import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  table: {
    minWidth: 650,
  },
  customTitle: {
    paddintTop: '16px',
    paddingBottom: '16px',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '16px',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      marginTop: '8px',
    },
  },
  customBtn: {
    marginLeft: '8px',
    margin: '5px',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginTop: '7px',
    },
  },
  customInput: {
    marginRight: 'auto',
    width: '100%',
    maxWidth: '320px',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginTop: '7px',
    },
  },
  customSelect: {
    marginRight: '16px',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginTop: '7px',
    },
  },
  labelInput: {
    marginRight: '16px',
    width: '200px',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginRight: '0',
    },
  },
}));
