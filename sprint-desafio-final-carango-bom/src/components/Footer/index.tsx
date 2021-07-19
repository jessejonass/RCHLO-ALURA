import { Typography, Link } from '@material-ui/core';

import { useStyles } from './styles';

export const Footer = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.customFooter}>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Callback
        </Link>{' '}
        {new Date().getFullYear()}.
      </Typography>
    </div>
  );
};
