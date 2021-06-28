function cpfValidator(cpf) {
  if (cpf.length !== 11) {
    return {
      valido: false,
      texto: 'O CPF deve ter 11 dígitos',
    }
  } else {
    return {
      valido: true,
      texto: '',
    }
  }
}

function passValidator(pass) {
  if (pass.length < 4 || pass.length > 20) {
    return {
      valido: false,
      texto: 'Senha deve ter entre 4 e 20 dígitos.',
    }
  } else {
    return {
      valido: true,
      texto: '',
    }
  }
}

function nameValidator(pass) {
  if (pass.length < 4 || pass.length > 20) {
    return {
      valido: false,
      texto: 'Nome deve ter mais de 3 dígitos.',
    }
  } else {
    return {
      valido: true,
      texto: '',
    }
  }
}

export { cpfValidator, passValidator, nameValidator };