import React from 'react';

import { Category } from '../components/Menu/types';

interface CategoriesContextProps {
  categories: {
    all: Category[];
    current: Category[];
  }
}

const CategoriesContext = React.createContext({} as CategoriesContextProps);

export default CategoriesContext;