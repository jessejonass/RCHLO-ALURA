import { Typography, Container, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { useUser } from '../../hooks/UserContext';
import { Header } from '../../components/Header';
import car from '../../assets/images/car.svg';
import { useStyles } from './styles';

const Home = (): JSX.Element => {
  const classes = useStyles();

  const { isAuthenticated } = useUser();

  return (
    <>
      <Header />

      <Container className={classes.container}>
        <Box className={classes.content}>
          <div className={classes.imageContent}>
            <img src={car} alt="Carro" className={classes.image} />
          </div>

          <div className={classes.infoContent}>
            <Typography variant="h1" className={classes.infoTitle}>
              Carango Bom
            </Typography>

            {!isAuthenticated ? (
              <Link to="/login" className={classes.infoButton}>
                Faça seu login
              </Link>
            ) : (
              <Link to="/dashboard" className={classes.infoButton}>
                Dashboard
              </Link>
            )}
          </div>
        </Box>
      </Container>
    </>
  );
};

export default Home;
