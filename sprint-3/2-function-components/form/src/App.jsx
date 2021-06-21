import React from 'react';
import { Container, Typography } from '@material-ui/core';
import FormCadastro from './components/FormCadastro/FormCadastro';
import './App.css';

function onSubmit(data) {
  console.log(data);
}

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

export default function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography
        variant="h3"
        component="h1"
        align="center"
      >
        Formulário de cadastro
      </Typography>

      <FormCadastro 
        onSubmit={onSubmit}
        cpfValidator={cpfValidator}
      />
    </Container>
  );
}
