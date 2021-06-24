import React from 'react';

import { LoadProvider } from './useLoading';
import { MessageProvider } from './useMessage';
import { FilterProvider } from './useFilter';
import { ProductsProvider } from './useProducts';

export default function AppProvider({ children }) {
  return (
    <MessageProvider>
      <LoadProvider>
        <ProductsProvider>
          <FilterProvider>
            {children}
          </FilterProvider>
        </ProductsProvider>
      </LoadProvider>
    </MessageProvider>
  );
};
