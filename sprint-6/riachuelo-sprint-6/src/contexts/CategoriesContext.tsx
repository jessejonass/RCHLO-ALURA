import React from 'react';
import { ICategoriesResponse } from '../services/CategoriesService';

interface ICategoriesContextProps {
    categories: ICategoriesResponse
}
const CategoriesContext = React.createContext<ICategoriesContextProps>({} as ICategoriesContextProps);

export default CategoriesContext;