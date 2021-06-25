import React from 'react';
import { TextField, Button } from '@material-ui/core';

export default function DadosUsuario() {
  return (
    <form>
      <TextField 
        id="email" 
        label="E-mail" 
        type="email" 
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <TextField 
        id="senha" 
        label="Senha" 
        type="password" 
        variant="outlined"
        fullWidth
        margin="normal"
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
