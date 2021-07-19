import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none',
  },
  userLogged: {
    marginLeft: 'auto',
  },
  customImg: {
    width: '26px',
    marginLeft: '0.25rem',
  },
  customTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  customLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
}));
