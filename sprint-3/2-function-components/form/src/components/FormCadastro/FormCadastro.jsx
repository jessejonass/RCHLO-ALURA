import React from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';

export default function FormCadastro() {
  return (
    <form>
      <TextField 
        id="nome" 
        label="Nome" 
        variant="outlined" 
        fullWidth
        margin="normal"
      />

      <TextField 
        id="sobrenome" 
        label="Sobrenome" 
        variant="outlined" 
        fullWidth
        margin="normal"
      />

      <TextField 
        id="cpf" 
        label="CPF" 
        variant="outlined" 
        fullWidth
        margin="normal"
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch 
            name="promocoes"
            defaultChecked
            color="primary"
          />
        }
      />

      <FormControlLabel 
        label="Novidades"
        control={
          <Switch 
            name="novidades"
            defaultChecked
            color="primary"
          />
        }
      />

      <Button variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
};
