import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';

import { Dashboard } from '.';

describe('Dashboard component', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    history.push('/dashboard');

    render(
      <Router history={history}>
        <Dashboard />
      </Router>,
    );

    expect(screen.getByTestId('dashboard')).toBeInTheDocument();
  });
});
