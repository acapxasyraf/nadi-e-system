import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

const useLastLogin = () => {
  const [lastLogin, setLastLogin] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLastLogin = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        const { data: session, error: sessionError } = await supabase
          .from("usage_sessions")
          .select("start_time")
          .eq("user_id", user.id)
          .eq("session_type", "login")
          .order("start_time", { ascending: false })
          .limit(1)
          .single();

        if (sessionError) throw sessionError;
        if (!session) {
          throw new Error("No login session data found");
        }

        setLastLogin(session.start_time);
      } catch (error) {
        console.error("Error fetching last login time:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLastLogin();
  }, []);

  return { lastLogin, loading, error };
};

export default useLastLogin;