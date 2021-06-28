import React, { useContext, useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErrors from '../../hooks/useErrors';

export default function DadosUsuario({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const validations = useContext(ValidacoesCadastro);
  const [errors, validateFields, isValid] = useErrors(validations);

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      if (isValid()) {
        onSubmit({ email, pass });
      }
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
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField 
        onBlur={validateFields}
        error={!errors.pass.valido}
        helperText={errors.pass.texto}
        onChange={(e) => setPass(e.target.value)}
        id="pass" 
        label="Senha" 
        type="password" 
        variant="outlined"
        fullWidth
        margin="normal"
        required
        value={pass}
        name="pass"
      />

      <Button 
        type="submit"
        variant="contained"
        color="primary"
      >
        Próximo
      </Button>
    </form>
  );
};
