import { Grid, Paper, Typography } from '@material-ui/core';

import { useStyles } from '../../pages/Dashboard/styles';
import { currencyFormatter } from '../../utils/currencyFormatter';

type CardDashbord = {
  nomeDaMarca: string;
  montante: number;
  quantidadeDeVeiculos: number;
};

type CardDashbordProps = {
  data: CardDashbord[];
};

export const CardDashboard = ({ data }: CardDashbordProps): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.layout}>
      {data.map((item) => (
        <Paper className={classes.paper} key={item.nomeDaMarca}>
          <Grid />
          <Typography component="p" color="primary" variant="h6">
            {item.nomeDaMarca}
          </Typography>

          <Typography
            component="h2"
            variant="h5"
            className={classes.customAmount}
          >
            {currencyFormatter(item.montante)}
          </Typography>

          <p className={classes.customInfo}>
            {item.quantidadeDeVeiculos}
            {item.quantidadeDeVeiculos > 1 ? ' veículos.' : ' veículo.'}
          </p>
        </Paper>
      ))}
    </div>
  );
};
