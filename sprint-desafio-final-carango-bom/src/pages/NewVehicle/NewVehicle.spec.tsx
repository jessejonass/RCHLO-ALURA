import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';

import { NewVehicle } from '.';

describe('Dashboard component', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    history.push('/cadastro-veiculo');

    render(
      <Router history={history}>
        <NewVehicle />
      </Router>,
    );

    expect(screen.getByTestId('cadastro-veiculo')).toBeInTheDocument();
  });
});
