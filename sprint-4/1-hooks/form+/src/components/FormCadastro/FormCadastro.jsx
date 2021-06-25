import React from 'react';

import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import DadosEntrega from './DadosEntrega';

export default function FormCadastro({ onSubmit, cpfValidator }) {
  return (
    <>
      <DadosPessoais onSubmit={onsubmit} cpfValidator={cpfValidator} />
      <DadosUsuario />
      <DadosEntrega />
    </>
  );
};
