import React, { useState } from 'react';
 
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import DadosEntrega from './DadosEntrega';

export default function FormCadastro({ onSubmit, cpfValidator }) {
  const [step, setStep] = useState(0);

  const forms = [
    <DadosUsuario onSubmit={nextStep} />,
    <DadosPessoais onSubmit={nextStep} cpfValidator={cpfValidator} />,
    <DadosEntrega onSubmit={onsubmit} />,
  ];

  function nextStep() {
    setStep(step + 1);
  }

  return forms[step];
};
