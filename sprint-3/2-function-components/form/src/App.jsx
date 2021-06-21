import React from 'react';
import { Container, Typography } from '@material-ui/core';

import FormCadastro from './components/FormCadastro/FormCadastro';

import './App.css';

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

      <FormCadastro />
    </Container>
  );
}
