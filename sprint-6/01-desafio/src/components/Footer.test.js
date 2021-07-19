import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renderiza o footer', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Receba ofertas e novidades por e-mail/i);
  expect(linkElement).toBeInTheDocument();
});
