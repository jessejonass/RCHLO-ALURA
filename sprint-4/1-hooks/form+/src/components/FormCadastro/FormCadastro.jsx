import React, { useState, useEffect } from 'react';
import { Typography, Stepper, Step, StepLabel } from '@material-ui/core';
 
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import DadosEntrega from './DadosEntrega';

export default function FormCadastro({ onSubmit, cpfValidator }) {
  const [receivedData, setReceivedData] = useState({});
  const [step, setStep] = useState(0);

  useEffect(() => {
    if(step === forms.length - 1) {
      onSubmit(receivedData);
    }
  }, [receivedData, step]);

  const forms = [
    <DadosUsuario onSubmit={receiveData} />,
    <DadosPessoais onSubmit={receiveData} cpfValidator={cpfValidator} />,
    <DadosEntrega onSubmit={receiveData} />,
    <Typography variant="h5">Obrigado pelo cadastro</Typography>
  ];

  function receiveData(data) {
    setReceivedData({ ...receivedData, ...data });
    nextStep();
  }

  function nextStep() {
    setStep(step + 1);
  }

  return (
    <>
      <Stepper activeStep={step}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>

        <Step>
          <StepLabel>Dados pessoais</StepLabel>
        </Step>

        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>

        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {forms[step]}
    </>
  );
};
