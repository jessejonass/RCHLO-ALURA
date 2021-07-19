import { useState } from 'react';
import { useEffect } from 'react';

import { useHistory } from 'react-router';
import { Container, Divider } from '@material-ui/core';
import { AxiosResponse } from 'axios';

import { useStyles } from './styles';
import { Header } from '../../components/Header';
import managerImg from '../../assets/images/manager.svg';
import { Footer } from '../../components/Footer';
import { request } from '../../api/request';
import { CardDashboard } from '../../components/CardDashboard';
import { useUser } from '../../hooks/UserContext';

type DashboardType = {
  montante: number;
  nomeDaMarca: string;
  quantidadeDeVeiculos: number;
};
export const Dashboard = (): JSX.Element => {
  const classes = useStyles();
  const [data, setData] = useState<DashboardType[]>([]);

  const history = useHistory();
  const { isAuthenticated } = useUser();

  useEffect(() => {
    if (!isAuthenticated) history.push('/');

    request('GET', '/dashboard').then((response: AxiosResponse) =>
      setData(response.data),
    );
  }, [history, isAuthenticated]);

  return (
    <>
      <Header />

      <Container className={classes.customContainer} data-testid="dashboard">
        <div className={classes.imgContainer}>
          <img src={managerImg} alt="manager" className={classes.imgContent} />
        </div>

        <CardDashboard data={data} />
      </Container>

      <Divider variant="middle" />

      <Footer />
    </>
  );
};
