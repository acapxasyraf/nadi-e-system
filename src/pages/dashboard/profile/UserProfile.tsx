import { useEffect, useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { SettingsLoading } from "@/components/settings/SettingsLoading";
import { supabase } from "@/lib/supabase";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import StaffProfileSettings from "@/components/profile/staff/StaffProfileSettings";
import { StaffJobSettings } from "@/components/profile/staff/StaffJobSettings";
import MemberProfileSettings from "@/components/profile/member/MemberProfileSettings";
import SuperAdminProfileSettings from "@/components/profile/super_admin/SuperAdminProfileSettings";
import ProfileSettings from "@/components/profile/ProfileSettings";

const UserProfile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userType, setUserType] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        const { data: profile, error } = await supabase
          .from("profiles")
          .select("user_type")
          .eq("id", user.id)
          .single();

        if (error) throw error;

        setUserType(profile?.user_type || null);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (isLoading) {
    return <SettingsLoading />;
  }

  if (userType === "super_admin") {
    return (
      <DashboardLayout>
        <ProfileHeader />
        <div className="space-y-8">
          <SuperAdminProfileSettings />
        </div>
      </DashboardLayout>
    );
  }

  if (userType === "member") {
    return (
      <DashboardLayout>
        <ProfileHeader />
        <div className="space-y-8">
          <MemberProfileSettings />
        </div>
      </DashboardLayout>
    );
  }

  if (userType?.startsWith("staff")) {
    return (
      <DashboardLayout>
        <ProfileHeader />
        <div className="space-y-8">
          <StaffProfileSettings />
          <StaffJobSettings />
        </div>
      </DashboardLayout>
    );
  }

  if (
    userType?.startsWith("mcmc") ||
    userType?.startsWith("dusp") ||
    userType?.startsWith("sso") ||
    userType?.startsWith("tp") ||
    userType?.startsWith("vendor")
  ) {
    return (
      <DashboardLayout>
        <ProfileHeader />
        <div className="space-y-8">
          <ProfileSettings />
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <ProfileHeader />
      <div className="space-y-8">
        <p>User type not recognized.</p>
      </div>
    </DashboardLayout>
  );
};

export default UserProfile;