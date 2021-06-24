import React, { 
  createContext, 
  useState, 
  useEffect, 
  useContext, 
  useCallback
} from 'react';

import { useMessage } from './useMessage';
import { useLoading } from './useLoading';

const FilterContext = createContext(null);

function FilterProvider({ children }) {
const [products, setProducts] = useState([]);
const [filtered, setFiltered] = useState([]);

const { addMessage } = useMessage();
const { addRequest, removeRequest } = useLoading();

useEffect(() => {
  function loadProducts() {
    addRequest();

    fetch('http://localhost:3333/products')
    .then(response => {
      if (response.ok) {
        addMessage('success', 'Produtos carregados com sucesso');
      } else {
        addMessage('error', 'Erro ao carregar produtos');
      }

      return response.json();
    })
    .then(data => setProducts(data))
    .catch(() => {
      addMessage('error', 'Erro ao carregar produtos');
    })
    .finally(() => removeRequest());
  }
  loadProducts();
}, [addRequest, removeRequest, addMessage]);

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
    <FilterContext.Provider value={{ products, addFilter, filtered }}>
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