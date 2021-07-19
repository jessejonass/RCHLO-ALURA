import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';
import {
  Login,
  CarRental,
  BrandingWatermark,
  People,
  Dashboard,
  Logout,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';

import { useStyles } from './styles';

type CustomDrawerProps = {
  menuOpen: boolean;
  handleToggleMenu: () => void;
};

export const CustomDrawer = ({
  menuOpen,
  handleToggleMenu,
}: CustomDrawerProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Drawer open={menuOpen} onClose={() => handleToggleMenu()}>
      <List>
        <Link to="/" className={classes.customLink}>
          <ListItem button onClick={handleToggleMenu}>
            <ListItemIcon>
              <Login />
            </ListItemIcon>
            <ListItemText>Entrar</ListItemText>
          </ListItem>
        </Link>

        <Link to="/dashboard" className={classes.customLink}>
          <ListItem button onClick={handleToggleMenu}>
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText>Dashboard</ListItemText>
          </ListItem>
        </Link>

        <Link to="/veiculos" className={classes.customLink}>
          <ListItem button onClick={handleToggleMenu}>
            <ListItemIcon>
              <CarRental />
            </ListItemIcon>
            <ListItemText>Veículos</ListItemText>
          </ListItem>
        </Link>

        <Link to="/marcas" className={classes.customLink}>
          <ListItem button onClick={handleToggleMenu}>
            <ListItemIcon>
              <BrandingWatermark />
            </ListItemIcon>
            <ListItemText>Marcas</ListItemText>
          </ListItem>
        </Link>

        <Link to="/" className={classes.customLink}>
          <ListItem button onClick={handleToggleMenu}>
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText>Usuários</ListItemText>
          </ListItem>
        </Link>

        <Link to="/" className={classes.customLink}>
          <ListItem button onClick={handleToggleMenu}>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText>Sair</ListItemText>
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
};
