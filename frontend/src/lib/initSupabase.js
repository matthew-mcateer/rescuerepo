import { createClient } from '@supabase/supabase-js';


// TODO: Figure out how to use the dotenv package.
const supabaseUrl = 'https://jkohjbndimwjcyobeuaf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imprb2hqYm5kaW13amN5b2JldWFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUyNTcxODIsImV4cCI6MjAwMDgzMzE4Mn0.bICKR1hSTyppYMPx8cEgocdY4IaStBlcIJdlQ1Iymg4'
export const supabase = createClient(supabaseUrl, supabaseKey);