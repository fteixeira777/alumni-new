import { createClient } from '@supabase/supabase-js'
//DhGQAvjHdZfwFgQL
//const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseUrl = 'https://xnlruavdccgldnwnakwq.supabase.co';

//const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhubHJ1YXZkY2NnbGRud25ha3dxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTg1MjUwNzMsImV4cCI6MTk3NDEwMTA3M30.uZFV5lUkT3CXtfV4dR-P3ToF-wHDBnz89JOt4O4yZDg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey)