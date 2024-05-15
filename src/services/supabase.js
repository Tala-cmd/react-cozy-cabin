import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://sxmohtbvjcpwxrvfcgfu.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4bW9odGJ2amNwd3hydmZjZ2Z1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU3NjU3MzEsImV4cCI6MjAzMTM0MTczMX0.GI6dnpkXxhI71Y6DcEJhgNQCPMjv95m_zhbiKmZKPQo'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;