/* eslint-disable jest/no-commented-out-tests */
import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';

import { CustomDrawer } from '.';

describe('CustomDrawer component', () => {
  it('should start closed', () => {
    const menuOpen = false;
    const handleToggleMenu = () => !menuOpen;

    const history = createMemoryHistory();
    history.push('/');

    render(
      <Router history={history}>
        <CustomDrawer menuOpen={menuOpen} handleToggleMenu={handleToggleMenu} />
      </Router>,
    );

    expect(screen.queryByText('Dashboard')).not.toBeInTheDocument();
  });

  it('should render correctly', () => {
    const menuOpen = true;
    const handleToggleMenu = () => !menuOpen;

    const history = createMemoryHistory();
    history.push('/');

    render(
      <Router history={history}>
        <CustomDrawer menuOpen={menuOpen} handleToggleMenu={handleToggleMenu} />
      </Router>,
    );

    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });
});
