
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useOrganizations } from "@/hooks/use-organizations";
import { UserType } from "@/types/auth";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

export const useOrganizationUserManagement = () => {
  const { id } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("member");
  const [filterUserType, setFilterUserType] = useState<string>("all");
  const [userGroupIds, setUserGroupIds] = useState<number[]>([]);

  const { 
    useOrganizationQuery,
    useOrganizationUsersQuery, 
    useAddUserToOrganizationMutation,
    useRemoveUserFromOrganizationMutation 
  } = useOrganizations();

  // Fetch organization to determine eligible user types
  const { data: organization } = useOrganizationQuery(id!);

  // Get eligible user types based on organization type
  const eligibleUserTypes: UserType[] = organization?.type === "dusp" 
    ? ["dusp_admin", "dusp_management", "dusp_operation"] 
    : ["tp_admin", "tp_management", "tp_region", "tp_hr", "tp_finance", "tp_operation"];

  // Get user groups based on organization type
  const { data: userGroups = [], isLoading: loadingUserGroups } = useQuery({
    queryKey: ["user-groups", organization?.type],
    queryFn: async () => {
      if (!organization?.type) return [];
      
      console.log("Fetching user groups for organization type:", organization.type);
      
      // Get appropriate user group for the organization type - using ILIKE for case-insensitive matching
      const { data, error } = await supabase
        .from("nd_user_group")
        .select("id, group_name, user_types")
        .ilike("group_name", organization?.type === "dusp" ? "%DUSP%" : "%TP%");
      
      if (error) {
        console.error("Error fetching user groups:", error);
        throw error;
      }
      
      console.log("Found user groups:", data);
      
      // Extract the ids of relevant user groups
      const groupIds = data.map(group => group.id);
      setUserGroupIds(groupIds);
      return data;
    },
    enabled: !!organization?.type
  });

  // Fetch users already in the organization
  const { 
    data: orgUsers = [], 
    isLoading: loadingOrgUsers, 
    error: orgUsersError 
  } = useOrganizationUsersQuery(id!);

  // Fetch eligible users from profiles table
  const { 
    data: eligibleUsers = [], 
    isLoading: loadingEligibleUsers 
  } = useQuery({
    queryKey: ["eligible-users", organization?.type],
    queryFn: async () => {
      if (!organization?.type) return [];
      
      console.log("Fetching eligible users for organization type:", organization.type);
      
      const orgTypeLower = organization.type.toLowerCase();
      const userTypePrefix = orgTypeLower === "dusp" ? "dusp_" : "tp_";
      
      // Fetch users with matching user_type prefix
      const { data, error } = await supabase
        .from("profiles")
        .select("id, full_name, email, user_type, user_group")
        .ilike("user_type", `${userTypePrefix}%`);
      
      if (error) {
        console.error("Error fetching eligible users by type:", error);
        toast.error("Failed to load eligible users");
        throw error;
      }
      
      console.log(`Found ${data.length} users with ${userTypePrefix} user types:`, data);
      return data;
    },
    enabled: !!organization?.type
  });

  // Filter users not already in the organization
  const availableUsers = eligibleUsers.filter(
    (user) => !orgUsers.some((orgUser) => orgUser.user_id === user.id)
  );

  // Filter available users by search term and selected user type
  const filteredAvailableUsers = availableUsers.filter(
    (user) => {
      const matchesSearch = 
        (user.full_name?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
        (user.email?.toLowerCase() || "").includes(searchTerm.toLowerCase());
      
      const matchesType = 
        filterUserType === "all" || 
        user.user_type === filterUserType;
      
      return matchesSearch && matchesType;
    }
  );

  // Mutations
  const addUserMutation = useAddUserToOrganizationMutation();
  const removeUserMutation = useRemoveUserFromOrganizationMutation();

  // Add user to organization
  const handleAddUser = (userId: string) => {
    if (!id) return;
    
    console.log("Adding user:", userId, "to org:", id, "with role:", selectedRole);
    
    addUserMutation.mutate({ 
      organization_id: id, 
      user_id: userId,
      role: selectedRole 
    });
  };

  // Remove user from organization
  const handleRemoveUser = (userId: string) => {
    if (!id) return;
    
    console.log("Removing user:", userId, "from org:", id);
    
    removeUserMutation.mutate({ 
      organizationId: id, 
      userId 
    });
  };

  return {
    id,
    searchTerm,
    setSearchTerm,
    selectedRole,
    setSelectedRole,
    filterUserType,
    setFilterUserType,
    eligibleUserTypes,
    orgUsers,
    loadingOrgUsers,
    orgUsersError,
    filteredAvailableUsers,
    loadingEligibleUsers: loadingEligibleUsers || loadingUserGroups,
    handleAddUser,
    handleRemoveUser,
    organizationType: organization?.type
  };
};
