import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

export default function DadosUsuario({ onSubmit, validations }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  
  const [errors, setErrors] = useState({
    pass: {
      valido: true,
      texto: '',
    },
  });
  
  function validateFields(e) {
    const { name, value } = e.target;
    
    const newState = {...errors};
    
    newState[name] = validations[name](value)
    setErrors(newState);
  }

  function isValid() {
    for (let e in errors) {
      if (!errors[e].valido) {
        return false;
      }
    }
    return true;
  }

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
