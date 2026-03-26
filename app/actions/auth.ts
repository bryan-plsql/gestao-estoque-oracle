'use server'

import { supabase } from '@/lib/supabase';
import { verificarAcesso, cadastrarAventureiro } from '@/lib/auth-utils';
import { redirect } from 'next/navigation';

/**
 * AÇÃO DE LOGIN 🔑
 */
export async function realizarLogin(formData: FormData) {
  const email = formData.get('email') as string;
  const senhaDigitada = formData.get('senha') as string;

  // 1. Busca o aventureiro no banco pelo e-mail
  const { data: usuario, error } = await supabase
    .from('usuarios')
    .select('*')
    .eq('email', email)
    .single();

  // Se der erro ou o usuário não existir
  if (error || !usuario) {
    throw new Error("Aventureiro não encontrado no mapa!");
  }

  // 2. Compara a senha digitada com o HASH salvo no Postgres
  const senhaValida = await verificarAcesso(senhaDigitada, usuario.senha_hash);

  if (!senhaValida) {
    throw new Error("Senha incorreta! O alarme foi disparado. 🚨");
  }

  // 3. Sucesso! Redireciona para o perfil/dashboard
  redirect('/perfil');
}

/**
 * AÇÃO DE CADASTRO 🛠️
 */
export async function realizarCadastro(formData: FormData) {
  const nome = formData.get('nome') as string;
  const email = formData.get('email') as string;
  const senhaPura = formData.get('senha') as string;

  // 1. Criptografa a senha antes de mandar para o banco
  const hash = await cadastrarAventureiro(senhaPura);

  // 2. Insere o novo aventureiro no Postgres
  const { error } = await supabase
    .from('usuarios')
    .insert([
      { 
        nome_usuario: nome, 
        email: email, 
        senha_hash: hash, 
        xp_total: 0, 
        nivel: 1 
      }
    ]);

  if (error) {
    console.error("Erro no Supabase:", error.message);
    throw new Error("Erro ao criar conta. Talvez este e-mail já esteja em uso!");
  }

  // 3. Cadastro feito! Manda para o login
  redirect('/login');
}