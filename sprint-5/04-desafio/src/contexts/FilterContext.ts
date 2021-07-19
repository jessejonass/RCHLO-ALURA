import { createContext } from 'react';

interface FilterContextProps {
  setNameOrder(order: 'up' | 'down' | ''): void;
  setPriceOrder(order: 'up' | 'down' | ''): void;
  setFilter(e: string): void;
  nameOrder?: string;
  priceOrder?: string;
  filter: string;
}

const FilterContext = createContext({} as FilterContextProps);

export default FilterContext;