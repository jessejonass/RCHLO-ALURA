import React from 'react';
import { Container, Typography } from '@material-ui/core';
import FormCadastro from './components/FormCadastro/FormCadastro';
import './App.css';

import { cpfValidator, nameValidator, passValidator } from './models/cadastro';
import ValidacoesCadastro from './contexts/ValidacoesCadastro';

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

      <ValidacoesCadastro.Provider value={{
        cpf: cpfValidator, 
        pass: passValidator, 
        nome: nameValidator
      }}>
        <FormCadastro 
          onSubmit={onSubmit}
        />
      </ValidacoesCadastro.Provider>
    </Container>
  );
}
