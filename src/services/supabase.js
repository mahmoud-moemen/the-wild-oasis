import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://uzhewgwflmydmmvoeikm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6aGV3Z3dmbG15ZG1tdm9laWttIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY1OTM2NzYsImV4cCI6MjAxMjE2OTY3Nn0.7_Fd87Ook60Hqog3tKq9QnST6yNFIyShjE8v0XD80qI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
