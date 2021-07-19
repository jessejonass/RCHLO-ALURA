import { useEffect, useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import {
  Button,
  CssBaseline,
  TextField,
  Typography,
  Container,
  CircularProgress,
} from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

import { useUser } from '../../hooks/UserContext';
import { Header } from '../../components/Header';

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  signupLink: {
    textDecoration: 'none',
  },
}));

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const classes = useStyles();
  const { signIn, isAuthenticated } = useUser();

  const history = useHistory();

  // usuário autenticado é direcionado para o dashboard
  useEffect(() => {
    if (isAuthenticated) {
      history.push('/dashboard');
    }
  }, [history, isAuthenticated]);

  function handleSignin(e: any) { // eslint-disable-line
    e.preventDefault();
    setLoading(true);

    // executando a função de signin
    signIn(email, password);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  return (
    <>
      <Header />

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Entrar
          </Typography>

          <form className={classes.form} data-testid="login-form">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSignin}
            >
              {loading ? (
                <CircularProgress size={25} color="inherit" />
              ) : (
                'Entrar'
              )}
            </Button>

            <Link className={classes.signupLink} to="/cadastro">
              Faça seu cadastro
            </Link>
          </form>
        </div>
      </Container>
    </>
  );
}
