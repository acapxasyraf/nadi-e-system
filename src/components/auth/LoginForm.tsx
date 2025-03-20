
import { useState } from "react";
import CryptoJS from "crypto-js";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("Attempting login for email:", email);
      
      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) {
        console.error("Authentication error:", authError);
        throw authError;
      }

      if (!authData.user) {
        throw new Error("No user data returned after successful auth");
      }

      console.log("Auth successful, checking profile...");

      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('*, nd_user_group(group_name)')
        .eq('id', authData.user.id)
        .single();

      if (profileError && profileError.code !== 'PGRST116') { // Ignore "not found" error
        console.error("Profile fetch error:", profileError);
        throw profileError;
      }

      // Special handling for tp_admin to ensure they have organization info
      let organizationName = null;
      let organizationId = profile?.organization_id || null;
      
      // If user is tp_admin or has an organization_id, fetch organization details
      if ((profile?.user_type === 'tp_admin' || profile?.organization_id) && profile) {
        // If tp_admin without organization_id, try to find their organization
        if (profile.user_type === 'tp_admin' && !profile.organization_id) {
          console.log("Fetching organization for tp_admin user");
          
          // Try to find organization where this user is an admin
          const { data: orgAdminData, error: orgAdminError } = await supabase
            .from('organization_users')
            .select('organization_id')
            .eq('user_id', authData.user.id)
            .eq('role', 'admin')
            .maybeSingle();
            
          if (!orgAdminError && orgAdminData?.organization_id) {
            organizationId = orgAdminData.organization_id;
            
            // Update profile with organization_id if found
            const { error: updateError } = await supabase
              .from('profiles')
              .update({ organization_id: organizationId })
              .eq('id', authData.user.id);
              
            if (updateError) {
              console.error("Error updating profile with organization_id:", updateError);
            }
          }
        }
        
        // Fetch organization name if we have an organization_id
        if (organizationId) {
          const { data: orgData, error: orgError } = await supabase
            .from('organizations')
            .select('name')
            .eq('id', organizationId)
            .single();
            
          if (!orgError && orgData) {
            organizationName = orgData.name;
          } else if (orgError) {
            console.error("Error fetching organization:", orgError);
          }
        }
      }

      // If no profile exists, create one
      if (!profile) {
        console.log("No profile found, creating one...");
        const { error: createProfileError } = await supabase
          .from('profiles')
          .insert([
            {
              id: authData.user.id,
              email: authData.user.email,
              user_type: 'member'
            }
          ]);

        if (createProfileError) {
          console.error("Error creating profile:", createProfileError);
          throw createProfileError;
        }
      }

      // Extract user group name from the join result
      const userGroupName = profile?.nd_user_group?.group_name || null;

      // Create user metadata with all the requested fields
      const userMetadata = {
        user_type: profile?.user_type || 'member',
        organization_id: organizationId,
        organization_name: organizationName,
        user_group: profile?.user_group || null,
        user_group_name: userGroupName
      };

      console.log("User metadata:", userMetadata);

      // Store session data
      const encryptedSession = CryptoJS.AES.encrypt(JSON.stringify({
        user: {
          ...authData.user,
          user_metadata: userMetadata
        },
        profile: profile || {
          id: authData.user.id,
          email: authData.user.email,
          user_type: 'member'
        }
      }), 'secret-key').toString();
      localStorage.setItem('session', encryptedSession);

      console.log('Login successful with metadata:', userMetadata);

      toast({
        title: "Success",
        description: "Logged in successfully",
      });
      
      navigate("/admin/dashboard");
    } catch (error: any) {
      console.error('Login error:', error);
      
      let errorMessage = "An unexpected error occurred. Please try again.";
      
      if (error.message.includes("Invalid login credentials")) {
        errorMessage = "Invalid email or password. Please try again.";
      } else if (error.message.includes("Email not confirmed")) {
        errorMessage = "Please verify your email before logging in.";
      } else if (error.message.includes("User not found")) {
        errorMessage = "No account found with this email. Please sign up.";
      }

      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label 
            htmlFor="email"
            className="text-sm font-medium text-gray-700"
          >
            Email
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@example.com"
            className="w-full px-4 py-2 bg-white/50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            required
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label 
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </Label>
            <Link 
              to="/forgot-password" 
              state={{ from: "login" }}
              className="text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors"
            >
              Forgot password?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full px-4 py-2 bg-white/50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            required
          />
        </div>
      </div>

      <Button 
        type="submit" 
        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200" 
        size="lg"
        disabled={loading}
      >
        {loading ? "Signing in..." : "Sign in"}
      </Button>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">
            Don't have an account?
          </span>
        </div>
      </div>

      <Link 
        to="/register" 
        className="block w-full text-center py-3 px-4 rounded-lg border-2 border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200"
      >
        Create an account
      </Link>
    </form>
  );
};
