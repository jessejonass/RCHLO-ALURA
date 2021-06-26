import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

export default function DadosEntrega({ onSubmit }) {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');

  return (
    <form onSubmit={e => {
      e.preventDefault();
      onSubmit({ cep, address, number, uf, city });
    }}>
      <TextField 
        id="cep" 
        label="CEP" 
        type="number" 
        variant="outlined"
        margin="normal"
        value={cep}
        onChange={e => setCep(e.target.value)}
      />

      <TextField 
        id="endereco" 
        label="Endereço" 
        type="text" 
        variant="outlined"
        fullWidth
        margin="normal"
        value={address}
        onChange={e => setAddress(e.target.value)}
      />

      <TextField 
        id="numero" 
        label="Número" 
        type="text" 
        variant="outlined"
        fullWidth
        margin="normal"
        value={number}
        onChange={e => setNumber(e.target.value)}
      />

      <TextField 
        id="cidade" 
        label="Cidade" 
        type="text" 
        variant="outlined"
        fullWidth
        margin="normal"
        value={city}
        onChange={e => setCity(e.target.value)}
      />

      <TextField 
        id="estado" 
        label="Estado" 
        type="text" 
        variant="outlined"
        fullWidth
        margin="normal"
        value={uf}
        onChange={e => setUf(e.target.value)}
      />

      <Button 
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
      >
        Finalizar cadastro
      </Button>
    </form>
  );
};
