// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ruanewybqxrdfvrdyeqr.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1YW5ld3licXhyZGZ2cmR5ZXFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg1NDU3MzAsImV4cCI6MjA1NDEyMTczMH0.Sy_h_BHoN23rzRFpVc9ARN2wimJ8lRPEVh_hpw_7tlY";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);