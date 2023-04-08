const errorConstants = [
  {
    message: 'Email or password incorrect',
    transition: 'Email ou senha incorretos.',
  },
  {
    message: 'Company CNPJ is not valid',
    transition: 'CNPJ inválido.',
  },
  {
    message: 'Unauthorized',
    transition: 'Usuário não está logado.',
  },
  {
    message: 'Company not found',
    transition: 'Empresa não encontrada.',
  },
  {
    message: 'Company belongs to another user',
    transition: 'Empresa pertence a outro usuário.',
  },
  {
    message: 'Company not found or belongs to another user',
    transition: 'Empresa não encontrada ou pertence a outro usuário.',
  },
  {
    message: 'Local not found',
    transition: 'Local não encontrado.',
  },
  {
    message: 'The email is already taken',
    transition: 'O email já está cadastrado no sistema.',
  },
  {
    message: 'User does not exist',
    transition: 'Usuário não encontrado.',
  },
];

export const errorMessageHandler = (message: string): string => {
  const error = errorConstants.find((e) => e.message === message);
  return error ? error.transition : 'Ocorreu algum erro ao fazer a requisição.';
};
