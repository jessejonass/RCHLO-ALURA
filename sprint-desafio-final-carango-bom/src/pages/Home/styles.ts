import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: 'calc(100vh - 60px)',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    display: 'flex',
    justifyContent: 'space-around',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  imageContent: {
    width: '40%',

    [theme.breakpoints.down('sm')]: {
      width: '70%',
    },
  },

  image: {
    width: '100%',
  },

  infoContent: {
    width: '40%',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },

  infoTitle: {
    fontSize: '48px',

    [theme.breakpoints.down('sm')]: {
      marginTop: '40px',
    },
  },

  infoButton: {
    width: '80%',
    height: '40px',
    borderRadius: '4px',

    marginTop: '20px',
    background: '#1C5D99',
    color: '#fff',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    textDecoration: 'none',
  },
}));
