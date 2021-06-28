import React from 'react';

const ValidacoesCadastro = React.createContext({
  cpf: noValidation, 
  pass: noValidation, 
  nome: noValidation
});

function noValidation (dados) {
  console.log(dados);
  return {
    valido: true,
    texto: '',
  }
}

export default ValidacoesCadastro;