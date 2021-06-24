import React, { 
  createContext, 
  useState, 
  useEffect, 
  useContext, 
} from 'react';

import { useMessage } from './useMessage';
import { useLoading } from './useLoading';

const ProductsContext = createContext(null);

function ProductsProvider({ children }) {
const [products, setProducts] = useState([]);
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

return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

function useProducts() {
  const context = useContext(ProductsContext);

  if(!context) {
    throw new Error('useProducts must be used within ProductsProvider');
  }

  return context;
}

export { ProductsProvider, useProducts };