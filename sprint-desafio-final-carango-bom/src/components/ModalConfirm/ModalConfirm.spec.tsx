import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';

import { ModalConfirm } from '.';

describe('Header component', () => {
  it('should render correctly', () => {
    const title = 'Example';
    const message = 'This is a example test';
    const open = true;
    const onClose = () => false;
    const onConfirm = () => true;

    render(
      <ModalConfirm
        title={title}
        message={message}
        open={open}
        onClose={onClose}
        onConfirm={onConfirm}
      />,
    );

    expect(screen.getByText('Confirmar')).toBeInTheDocument();
  });
});
