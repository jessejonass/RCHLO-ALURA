import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';

import { Header } from '.';

describe('Dashboard component', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    history.push('/');

    render(
      <Router history={history}>
        <Header />
      </Router>,
    );

    expect(screen.getByText('Carango Bom')).toBeInTheDocument();
  });
});
