import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://schriwrumvsfevmztcke.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjaHJpd3J1bXZzZmV2bXp0Y2tlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM4ODQ3ODEsImV4cCI6MjA1OTQ2MDc4MX0.khSFwQCV7wZqkwFv6l8KqG6LsbN8Hz3cgHxYmvwOFuc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
