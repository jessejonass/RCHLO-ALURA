import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    height: '56px',
    width: '100%',
    padding: '18.5px 14px',
    background: 'none',
    borderRadius: '4px',
    border: '1px solid #a3a3a3',
    margin: '6px 0',
    color: '#a3a3a3',
  },
}));

export function Input({ ...props }) {
  const classes = useStyles();

  return <input className={classes.container} {...props} />;
}
