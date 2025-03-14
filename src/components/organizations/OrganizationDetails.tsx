
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useOrganizations } from "@/hooks/use-organizations";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OrganizationFormDialog } from "./OrganizationFormDialog";
import { OrganizationUserList } from "./OrganizationUserList";
import { Building, ArrowLeft, Users, Info, Pencil } from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";

export function OrganizationDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const { 
    useOrganizationQuery, 
    useOrganizationUsersQuery,
    useUpdateOrganizationMutation,
    useDeleteOrganizationMutation
  } = useOrganizations();

  const { data: organization, isLoading, error } = useOrganizationQuery(id!);
  const { data: organizationUsers = [] } = useOrganizationUsersQuery(id!);
  const updateOrganizationMutation = useUpdateOrganizationMutation();
  const deleteOrganizationMutation = useDeleteOrganizationMutation();

  if (isLoading) {
    return <div className="flex justify-center p-8">Loading organization details...</div>;
  }

  if (error || !organization) {
    return (
      <div className="flex flex-col items-center p-8">
        <p className="text-destructive">Error loading organization details</p>
        <Button variant="outline" onClick={() => navigate("/admin/organizations")}>
          Back to Organizations
        </Button>
      </div>
    );
  }

  const handleUpdateOrganization = (values: any) => {
    updateOrganizationMutation.mutate({ ...organization, ...values });
  };

  const handleDeleteOrganization = () => {
    deleteOrganizationMutation.mutate(organization.id, {
      onSuccess: () => {
        navigate("/admin/organizations");
      }
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => navigate("/admin/organizations")}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-2xl font-bold">Organization Details</h1>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => setIsEditDialogOpen(true)}
          >
            <Pencil className="h-4 w-4 mr-2" />
            Edit Organization
          </Button>
          <Button
            variant="destructive"
            onClick={() => setIsDeleteDialogOpen(true)}
          >
            Delete Organization
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          {organization.logo_url ? (
            <img
              src={organization.logo_url}
              alt={organization.name}
              className="h-16 w-16 rounded-md object-contain bg-muted p-1"
            />
          ) : (
            <div className="h-16 w-16 rounded-md bg-muted flex items-center justify-center">
              <Building className="h-8 w-8 text-muted-foreground" />
            </div>
          )}
          <div>
            <CardTitle className="text-xl">{organization.name}</CardTitle>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-muted-foreground">Type:</span>
              <span className="text-sm font-medium bg-primary/10 text-primary px-2 py-0.5 rounded uppercase">{organization.type}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="details">
            <TabsList>
              <TabsTrigger value="details" className="flex items-center gap-1">
                <Info className="h-4 w-4" />
                <span>Details</span>
              </TabsTrigger>
              <TabsTrigger value="users" className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>Users ({organizationUsers.length})</span>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="mt-4 space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Description</h3>
                <p className="mt-1">{organization.description || "No description provided."}</p>
              </div>
              
              {organization.parent_id && (
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Parent Organization</h3>
                  <p className="mt-1">
                    {/* This would be better with a query to get the parent name */}
                    ID: {organization.parent_id}
                  </p>
                </div>
              )}
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Created At</h3>
                  <p className="mt-1">
                    {new Date(organization.created_at).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Last Updated</h3>
                  <p className="mt-1">
                    {new Date(organization.updated_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="users">
              {/* Fixed: Using the component without any props, as it now reads the id from useParams internally */}
              <OrganizationUserList />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <OrganizationFormDialog
        open={isEditDialogOpen}
        onOpenChange={setIsEditDialogOpen}
        organization={organization}
        onSubmit={handleUpdateOrganization}
      />

      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete the organization "{organization.name}" and remove all user associations.
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={handleDeleteOrganization}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
