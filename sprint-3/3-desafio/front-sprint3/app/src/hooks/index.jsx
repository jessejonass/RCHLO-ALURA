import React from 'react';

import { LoadProvider } from './useLoading';
import { MessageProvider } from './useMessage';
import { FilterProvider } from './useFilter';

export default function AppProvider({ children }) {
  return (
    <MessageProvider>
      <LoadProvider>
        <FilterProvider>
          {children}
        </FilterProvider>
      </LoadProvider>
    </MessageProvider>
  );
};
