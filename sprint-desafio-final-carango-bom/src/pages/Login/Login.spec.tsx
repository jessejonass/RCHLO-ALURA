import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';

import { Login } from '.';

describe('Dashboard component', () => {
  it('should render correctly', async () => {
    const history = createMemoryHistory();
    history.push('/login');

    render(
      <Router history={history}>
        <Login />
      </Router>,
    );

    const loginForm = await screen.findByTestId('login-form');

    expect(loginForm).toHaveFormValues({
      name: '',
      password: '',
    });
  });
});
