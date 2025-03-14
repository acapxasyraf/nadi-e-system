
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";
import { type Holiday } from "@/utils/holidayUtils";
import { formatDateForDB } from "@/utils/holidayUtils";
import { type HolidayFormValues } from "@/components/holidays/forms/HolidayFormSchema";

export function useHolidayOperations(onSuccess: () => void) {
  const [selectedHoliday, setSelectedHoliday] = useState<Holiday | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddHoliday = () => {
    setSelectedHoliday(null);
    setIsDialogOpen(true);
  };

  const handleEditHoliday = (holiday: Holiday) => {
    setSelectedHoliday(holiday);
    setIsDialogOpen(true);
  };

  const handleDeleteHoliday = async (holidayId: number) => {
    if (!confirm('Are you sure you want to delete this holiday?')) return;

    try {
      // First, delete the state assignments
      const { error: stateError } = await supabase
        .from('nd_leave_public_holiday_state')
        .delete()
        .eq('public_holiday_id', holidayId);

      if (stateError) throw stateError;

      // Then, delete the holiday
      const { error: holidayError } = await supabase
        .from('nd_leave_public_holiday')
        .delete()
        .eq('id', holidayId);

      if (holidayError) throw holidayError;

      toast({
        title: "Holiday deleted",
        description: "The holiday has been successfully deleted.",
      });

      // Refresh the holiday list
      onSuccess();
    } catch (error) {
      console.error('Error deleting holiday:', error);
      toast({
        variant: "destructive",
        title: "Failed to delete holiday",
        description: "There was an error deleting the holiday.",
      });
    }
  };

  const submitHoliday = async (values: HolidayFormValues, userId?: string) => {
    try {
      const formattedDate = formatDateForDB(values.date);
      const year = values.date.getFullYear();
      
      let holidayId;
      
      if (selectedHoliday) {
        // Update existing holiday
        const { error } = await supabase
          .from('nd_leave_public_holiday')
          .update({
            desc: values.desc,
            date: formattedDate,
            year: year,
            status: values.status
          })
          .eq('id', selectedHoliday.id);

        if (error) throw error;
        holidayId = selectedHoliday.id;
        
        // Delete existing state assignments before adding new ones
        const { error: deleteError } = await supabase
          .from('nd_leave_public_holiday_state')
          .delete()
          .eq('public_holiday_id', holidayId);
          
        if (deleteError) throw deleteError;
      } else {
        // Create new holiday
        const { data, error } = await supabase
          .from('nd_leave_public_holiday')
          .insert({
            desc: values.desc,
            date: formattedDate,
            year: year,
            status: values.status
          })
          .select();

        if (error) throw error;
        holidayId = data[0].id;
      }

      // Add state assignments if states were selected
      if (values.states && values.states.length > 0) {
        // First get all valid states from the database
        const { data: allValidStates, error: statesError } = await supabase
          .from('nd_state')
          .select('id');
          
        if (statesError) throw statesError;
        
        // Create a set of valid state IDs for faster lookup
        const validStateIds = new Set(allValidStates.map(state => state.id));
        
        // Filter out any invalid state IDs
        const filteredStates = values.states.filter(stateId => validStateIds.has(stateId));
        
        if (filteredStates.length !== values.states.length) {
          console.warn(`Some selected states (${values.states.filter(id => !validStateIds.has(id)).join(', ')}) do not exist in the database and were ignored.`);
          toast({
            variant: "warning",
            title: "Warning",
            description: "Some selected states were invalid and have been ignored.",
          });
        }
        
        if (filteredStates.length > 0) {
          // Create state assignments for valid states only
          const stateAssignments = filteredStates.map(stateId => ({
            public_holiday_id: holidayId,
            state_id: stateId,
            created_by: userId,
            created_at: new Date()
          }));

          // Insert the state assignments
          const { error: insertError } = await supabase
            .from('nd_leave_public_holiday_state')
            .insert(stateAssignments);

          if (insertError) {
            console.error('Error inserting state assignments:', insertError);
            throw insertError;
          }
        }
      }

      toast({
        title: selectedHoliday ? "Holiday updated" : "Holiday created",
        description: `The holiday has been successfully ${selectedHoliday ? 'updated' : 'created'}.`,
      });

      // Refresh the holiday list
      onSuccess();
      setIsDialogOpen(false);
    } catch (error) {
      console.error('Error saving holiday:', error);
      toast({
        variant: "destructive",
        title: `Failed to ${selectedHoliday ? 'update' : 'create'} holiday`,
        description: "There was an error saving the holiday data.",
      });
    }
  };

  return {
    selectedHoliday,
    isDialogOpen,
    setIsDialogOpen,
    handleAddHoliday,
    handleEditHoliday,
    handleDeleteHoliday,
    submitHoliday
  };
}
