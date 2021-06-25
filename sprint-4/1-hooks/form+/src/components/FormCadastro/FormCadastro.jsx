import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';

export default function FormCadastro({ onSubmit, cpfValidator }) {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  
  const [errors, setErrors] = useState({
    cpf: {
      valido: true,
      texto: '',
    },
  });

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit({nome, sobrenome, cpf, novidades, promocoes});
    }}>
      <TextField
        value={nome}
        onChange={e => setNome(e.target.value)}
        id="nome" 
        label="Nome" 
        variant="outlined" 
        fullWidth
        margin="normal"
      />

      <TextField 
        value={sobrenome}
        onChange={e => setSobrenome(e.target.value)}
        id="sobrenome" 
        label="Sobrenome" 
        variant="outlined" 
        fullWidth
        margin="normal"
      />

      <TextField
        value={cpf}
        onBlur={e => {
          const isValid = cpfValidator(cpf);
          setErrors({
            cpf: isValid,
          });
        }}
        error={!errors.cpf.valido}
        helperText={errors.cpf.texto}
        onChange={e => setCpf(e.target.value)}
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
            checked={promocoes}
            onChange={e => setPromocoes(e.target.checked)}
            name="promocoes"
            color="primary"
          />
        }
      />

      <FormControlLabel 
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            onChange={e => setNovidades(e.target.checked)}
            name="novidades"
            color="primary"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
};
