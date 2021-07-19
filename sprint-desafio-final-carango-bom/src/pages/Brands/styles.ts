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
    padding: '16px',

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  customBtn: {
    marginLeft: '8px',
    margin: '5px',
  },
}));
