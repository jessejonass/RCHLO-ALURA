import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';

import { Brands } from '.';

describe('Brands page', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    history.push('/marcas');

    render(
      <Router history={history}>
        <Brands />
      </Router>,
    );

    expect(screen.getByTestId('marcas')).toBeInTheDocument();
  });
});
