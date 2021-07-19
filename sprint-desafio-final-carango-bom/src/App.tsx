import { Suspense, lazy } from 'react';

import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { theme } from './assets/theme';
import { Vehicles } from './pages/Vehicles';
import { Brands } from './pages/Brands';
import { Dashboard } from './pages/Dashboard';
import { VehiclesProvider } from './hooks/VehiclesContext';
import { UserProvider } from './hooks/UserContext';
import { BrandsProvider } from './hooks/BrandsContext';
import { NewVehicle } from './pages/NewVehicle';
import { NewBrand } from './pages/NewBrand';
import { Login } from './pages/Login';

const Home = lazy(() => import('./pages/Home'));

export const App = (): JSX.Element => (
  <UserProvider>
    <ThemeProvider theme={theme}>
      <BrandsProvider>
        <VehiclesProvider>
          <BrowserRouter>
            <Suspense fallback={<p>Loading...</p>}>
              <Switch>
                <Route path="/" exact component={Home} />
              </Switch>

              <Switch>
                <Route path="/veiculos" exact component={Vehicles} />
              </Switch>

              <Switch>
                <Route path="/marcas" exact component={Brands} />
              </Switch>

              <Switch>
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/cadastro-veiculo" exact component={NewVehicle} />

                <Route path="/cadastro-marca" exact component={NewBrand} />
                <Route path="/edita-veiculo/:id" exact component={NewVehicle} />
                <Route path="/login" exact component={Login} />
              </Switch>
            </Suspense>
          </BrowserRouter>
        </VehiclesProvider>
      </BrandsProvider>
    </ThemeProvider>
  </UserProvider>
);
