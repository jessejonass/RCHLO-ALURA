import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

export default function DadosUsuario({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit({ email, pass });
    }}>
      <TextField 
        id="email" 
        label="E-mail" 
        type="email" 
        variant="outlined"
        fullWidth
        margin="normal"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField 
        id="senha" 
        label="Senha" 
        type="password" 
        variant="outlined"
        fullWidth
        margin="normal"
        required
        value={pass}
        onChange={(e) => setPass(e.target.value)}
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
