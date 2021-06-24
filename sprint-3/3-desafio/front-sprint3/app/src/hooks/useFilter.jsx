import React, { 
  createContext, 
  useState, 
  useContext, 
  useCallback
} from 'react';

import { useProducts } from './useProducts';

const FilterContext = createContext(null);

function FilterProvider({ children }) {
  const { products } = useProducts();
  const [filtered, setFiltered] = useState([]);

  const addFilter = useCallback(search => {
    if (search === '') {
      setFiltered([]);
    } else {
      const filter = products.filter(p => (
        p.name.toUpperCase().includes(search.toUpperCase())
      ));
      setFiltered(filter);
    }
  }, [products]);

  return (
      <FilterContext.Provider value={{ addFilter, filtered }}>
        {children}
      </FilterContext.Provider>
    );
  };

function useFilter() {
  const context = useContext(FilterContext);

  if(!context) {
    throw new Error('useFilter must be used within FilterProvider');
  }

  return context;
}

export { FilterProvider, useFilter };