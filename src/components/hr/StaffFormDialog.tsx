
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, UserPlus } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { createStaffMember } from "@/lib/staff";
import { useAuth } from "@/hooks/useAuth";
import { useUserAccess } from "@/hooks/use-user-access";

const staffFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email({ message: "Please enter a valid email address" }),
  userType: z.string().min(2, "User type is required"),
  employDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Please enter a valid date",
  }),
  status: z.enum(["Active", "On Leave", "Inactive"]),
  siteLocation: z.string().min(2, "Site location is required"),
  phone_number: z.string()
    .regex(/^(\+?6?01)[0-9]{8,9}$/, { 
      message: "Please enter a valid Malaysian phone number (e.g., +60123456789 or 01123456789)" 
    })
    .optional()
    .or(z.literal('')),
  ic_number: z.string()
    .regex(/^\d{6}-\d{2}-\d{4}$/, { 
      message: "Please enter a valid IC number in the format xxxxxx-xx-xxxx" 
    }),
});

type StaffFormValues = z.infer<typeof staffFormSchema>;

interface StaffFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  organizationId: string;
  organizationName: string;
  onStaffAdded: (staff: any) => void;
  siteLocations?: string[];
}

export function StaffFormDialog({
  open,
  onOpenChange,
  organizationId,
  organizationName,
  onStaffAdded,
  siteLocations,
}: StaffFormDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [availableSites, setAvailableSites] = useState<{id: string, sitename: string}[]>([]);
  const [userTypes, setUserTypes] = useState<string[]>([]);
  const { user } = useAuth();
  const { userType: currentUserType } = useUserAccess();
  
  const [currentUserCredentials, setCurrentUserCredentials] = useState<{
    email?: string;
    password?: string;
  }>({});

  useEffect(() => {
    const fetchSites = async () => {
      try {
        const { data, error } = await supabase
          .from('nd_site_profile')
          .select('id, sitename')
          .eq('dusp_tp_id', organizationId);
        
        if (error) throw error;
        if (data) {
          setAvailableSites(data);
        }
      } catch (err) {
        console.error('Error fetching sites:', err);
        toast({
          title: "Error",
          description: "Failed to load site locations.",
          variant: "destructive",
        });
      }
    };

    const fetchUserTypes = async () => {
      try {
        const allowedTypes = ['staff_manager', 'staff_assistant_manager'];
        setUserTypes(allowedTypes);
      } catch (err) {
        console.error('Error fetching user types:', err);
      }
    };

    if (organizationId) {
      fetchSites();
      fetchUserTypes();
    }
  }, [organizationId, toast]);

  const form = useForm<StaffFormValues>({
    resolver: zodResolver(staffFormSchema),
    defaultValues: {
      name: "",
      email: "",
      userType: "",
      employDate: new Date().toISOString().split("T")[0],
      status: "Active",
      siteLocation: "",
      phone_number: "",
      ic_number: "",
    },
  });

  const handleICNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^0-9-]/g, '');
    
    if (value.length > 6 && value.charAt(6) !== '-') {
      value = value.slice(0, 6) + '-' + value.slice(6);
    }
    if (value.length > 9 && value.charAt(9) !== '-') {
      value = value.slice(0, 9) + '-' + value.slice(9);
    }
    
    if (value.length > 14) {
      value = value.slice(0, 14);
    }
    
    form.setValue('ic_number', value);
  };

  useEffect(() => {
    const promptForPassword = async () => {
      if (user?.email) {
        setCurrentUserCredentials({
          email: user.email,
        });
      }
    };
    
    if (open && user) {
      promptForPassword();
    }
  }, [open, user]);

  const onSubmit = async (data: StaffFormValues) => {
    setIsSubmitting(true);
    try {
      const allowedCreatorTypes = ['tp_admin', 'tp_hr', 'super_admin'];
      if (!currentUserType || !allowedCreatorTypes.includes(currentUserType)) {
        throw new Error('You do not have permission to create staff members');
      }
      
      if (!['staff_manager', 'staff_assistant_manager'].includes(data.userType)) {
        throw new Error('Only staff_manager and staff_assistant_manager user types are allowed');
      }
      
      console.log("Submitting staff with user type:", data.userType, "and site location:", data.siteLocation);
      
      // Find the selected site for displaying in success message
      const selectedSite = availableSites.find(site => site.id === data.siteLocation);
      
      // Ensure site location is a number for database compatibility
      const siteLocationId = parseInt(data.siteLocation, 10);
      
      if (isNaN(siteLocationId)) {
        throw new Error('Invalid site location format');
      }
      
      const result = await createStaffMember({
        ...data,
        organizationId,
        siteLocation: siteLocationId, // Convert to number to match bigint in database
      });

      onStaffAdded({
        ...result.data,
        name: data.name,
        userType: data.userType,
        siteLocationName: selectedSite?.sitename || "Unknown site"
      });
      
      toast({
        title: "Success",
        description: `${data.name} has been added to ${organizationName} as ${data.userType.replace(/_/g, ' ')} at ${selectedSite?.sitename || "Unknown site"}`,
      });
      onOpenChange(false);
      form.reset();
    } catch (error: any) {
      console.error("Error adding staff:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to add staff member. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold flex items-center gap-2">
            <UserPlus className="h-5 w-5" />
            Add New Staff Member
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="John Doe" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} type="email" placeholder="user@example.com" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="ic_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>IC Number</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        onChange={handleICNumberChange}
                        placeholder="xxxxxx-xx-xxxx"
                        className="font-mono"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input {...field} type="tel" placeholder="+60123456789" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="userType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>User Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select user type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {userTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type.split('_').map(word => 
                              word.charAt(0).toUpperCase() + word.slice(1)
                            ).join(' ')}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="employDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Employment Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Active">Active</SelectItem>
                        <SelectItem value="On Leave">On Leave</SelectItem>
                        <SelectItem value="Inactive">Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="siteLocation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Site Location</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select site location">
                            {field.value && availableSites.find(site => site.id === field.value)?.sitename}
                          </SelectValue>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="max-h-60 overflow-y-auto">
                        {availableSites.map((site) => (
                          <SelectItem key={site.id} value={site.id}>
                            {site.sitename}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-end space-x-2 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Adding...
                  </>
                ) : (
                  "Add Staff"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
