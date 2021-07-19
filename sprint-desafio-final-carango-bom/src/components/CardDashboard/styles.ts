import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  layout: {
    width: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.up(400 + theme.spacing(2) * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    textAlign: 'center',
    width: '320px',
  },
  customAmount: {
    color: '#4caf50',
    letterSpacing: '2px',
  },
  customInfo: {
    color: '#747474',
  },
  imgContainer: {
    width: 'auto',
  },
  imgContent: {
    maxWidth: '600px',
    width: '100%',
    objectFit: 'cover',
  },
  customContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
