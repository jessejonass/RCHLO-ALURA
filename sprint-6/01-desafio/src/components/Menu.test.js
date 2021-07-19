import { render, screen } from '@testing-library/react';
import CategoriesContext from '../contexts/CategoriesContext';
import Menu from './Menu';

test('renderiza o menu', () => {
  const categories = {
    all: [
      {
        id: 1,
        label: 'Masculino',
        link: '#Masculino'
      },
      {
        id: 2,
        label: 'Feminino',
        link: '#Feminino'
      },
      {
        id: 3,
        label: 'Novidades',
        link: '#Novidades'
      }
    ]
  };

  render(
    <CategoriesContext.Provider value={{ categories }}>
      <Menu />
    </CategoriesContext.Provider>
  );

  const el1 = screen.getByText(/Masculino/i);
  const el2 = screen.getByText(/Feminino/i);
  const el3 = screen.getByText(/Novidades/i);

  expect(el1).toBeInTheDocument();
  expect(el2).toBeInTheDocument();
  expect(el3).toBeInTheDocument();
});
