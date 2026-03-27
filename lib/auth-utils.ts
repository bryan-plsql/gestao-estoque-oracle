import bcrypt from 'bcrypt';

export async function cadastrarAventureiro(senhaPlana: string) {
  // O número 10 é o "cost factor" (quão complexo será o cálculo)
  const saltRounds = 10; 
  
  // Aqui a mágica acontece: transforma "minhaSenha123" em "$2b$10$..."
  const hash = await bcrypt.hash(senhaPlana, saltRounds);
  
  // Agora, em vez da senha real, você salva esse 'hash' no banco de dados!
  console.log("Senha segura para o banco:", hash);
  return hash;
}

export async function verificarAcesso(senhaDigitada: string, hashDoBanco: string) {
  // O bcrypt compara a senha digitada com o hash salvo
  const ehValido = await bcrypt.compare(senhaDigitada, hashDoBanco);
  
  if (ehValido) {
    console.log("Acesso permitido! Bem-vindo à Guilda.");
  } else {
    console.log("Senha incorreta. Alarme disparado! 🚨");
  }
  return ehValido;
}