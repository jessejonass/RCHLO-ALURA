import { ReactElement, useState } from 'react';

import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  makeStyles,
  Button,
  Container,
} from '@material-ui/core';
import {
  Menu,
  CarRental,
  BrandingWatermark,
  Dashboard,
  Logout,
  Home,
  PeopleAlt,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';

import { useUser } from '../../hooks/UserContext';

const useStyles = makeStyles(() => ({
  appBar: {
    boxShadow: 'none',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
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
  drawer: {
    width: '300px',
    padding: '50px 0 50px 30px',
  },
}));

export const Header = (): ReactElement => {
  const classes = useStyles();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  const { isAuthenticated, signOut } = useUser();

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Container>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => handleToggleMenu()}
            >
              <Menu />
            </IconButton>

            <Link to="/" className={classes.link}>
              <Typography
                variant="h5"
                align="center"
                className={classes.customTitle}
              >
                Carango Bom{' '}
              </Typography>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
      {/* padding 60 50 width={280} */}

      <Drawer open={menuOpen} onClose={() => handleToggleMenu()}>
        <List className={classes.drawer}>
          <Link to="/" className={classes.customLink}>
            <ListItem button onClick={handleToggleMenu}>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItem>
          </Link>

          {isAuthenticated && (
            <Link to="/dashboard" className={classes.customLink}>
              <ListItem button onClick={handleToggleMenu}>
                <ListItemIcon>
                  <Dashboard />
                </ListItemIcon>
                <ListItemText>Dashboard</ListItemText>
              </ListItem>
            </Link>
          )}

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

          {!isAuthenticated && (
            <Link to="/login" className={classes.customLink}>
              <ListItem button onClick={handleToggleMenu}>
                <ListItemIcon>
                  <PeopleAlt />
                </ListItemIcon>
                <ListItemText>Entrar</ListItemText>
              </ListItem>
            </Link>
          )}

          {isAuthenticated && (
            <Button onClick={signOut} className={classes.customLink}>
              <ListItem button onClick={handleToggleMenu}>
                <ListItemIcon>
                  <Logout />
                </ListItemIcon>
                <ListItemText>Sair</ListItemText>
              </ListItem>
            </Button>
          )}
        </List>
      </Drawer>
    </>
  );
};
