import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';

import { CardDashboard } from '.';

describe('CardDashboard componet', () => {
  it('should render correctly', () => {
    const data = [
      {
        nomeDaMarca: 'Marca 1',
        montante: 15050,
        quantidadeDeVeiculos: 1,
      },
    ];
    render(<CardDashboard data={data} />);

    expect(screen.getByText('Marca 1')).toBeInTheDocument();
  });
});
