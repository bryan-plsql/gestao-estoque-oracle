import { createClient } from '@supabase/supabase-js';

// Buscamos as variáveis que você configurou na Vercel
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// É aqui que entra a nossa decisão de segurança! 🛡️
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Erro de Conexão: As chaves do portal Supabase não foram encontradas! 🚨');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);