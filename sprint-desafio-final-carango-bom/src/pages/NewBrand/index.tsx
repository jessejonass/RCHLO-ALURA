import { useState } from 'react';

import { useHistory } from 'react-router-dom';
import { TextField, Typography, Button, Paper } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import { useStyles } from './styles';
import { Header } from '../../components/Header';
import { api } from '../../api/request';

export function NewBrand() {
  const [brand, setBrand] = useState('');
  const history = useHistory();
  const classes = useStyles();

  function handleSubmit() {
    const data = {
      nome: brand,
    };

    api
      .post('/marcas', data)
      .then(() => (
        <Alert severity="success" color="info">
          This is a success alert — check it out!
        </Alert>
      ))
      .catch((err) => (
        <Alert severity="error" color="info">
          {err}
        </Alert>
      ));
    history.push('/marcas');
  }

  return (
    <>
      <Header />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Cadastro de marca
          </Typography>

          <TextField
            label="Marca"
            fullWidth
            margin="dense"
            onChange={(e) => setBrand(e.target.value)}
          />

          <div className={classes.buttons}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              className={classes.button}
            >
              Cadastrar
            </Button>

            <Button
              variant="contained"
              color="inherit"
              onClick={() => history.push('/marcas')}
              className={classes.button}
            >
              Cancelar
            </Button>
          </div>
        </Paper>
      </main>
    </>
  );
}
