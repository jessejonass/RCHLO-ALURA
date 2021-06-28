import React from 'react';
import { Container, Typography } from '@material-ui/core';
import FormCadastro from './components/FormCadastro/FormCadastro';
import './App.css';

import { cpfValidator, nameValidator, passValidator } from './models/cadastro';

function onSubmit(data) {
  console.log(data);
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
        validations={{ cpf: cpfValidator, pass: passValidator, nome: nameValidator }}
      />
    </Container>
  );
}
