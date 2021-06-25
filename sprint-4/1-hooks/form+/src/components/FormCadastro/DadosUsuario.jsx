import React from 'react';
import { TextField, Button } from '@material-ui/core';

export default function DadosUsuario({ onSubmit }) {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit();
    }}>
      <TextField 
        id="email" 
        label="E-mail" 
        type="email" 
        variant="outlined"
        fullWidth
        margin="normal"
        required
      />

      <TextField 
        id="senha" 
        label="Senha" 
        type="password" 
        variant="outlined"
        fullWidth
        margin="normal"
        required
      />

      <Button 
        type="submit"
        variant="contained"
        color="primary"
      >
        Cadastrar
      </Button>
    </form>
  );
};
