import { render, screen } from '@testing-library/react';
import FilterContext from '../contexts/FilterContext';
import Header from './Header';
import Menu from './Menu';

jest.mock('./Menu');

test('renderiza o header', () => {

    Menu.mockImplementation(() => <div>Menu</div>);

    const mockFilterState = {
        setFilter: () => undefined
    };

    render(
        <FilterContext.Provider value={mockFilterState}>
            <Header />
        </FilterContext.Provider>
    );

    const el1 = screen.getByText(/menu/);
    expect(el1).toBeInTheDocument();
});
