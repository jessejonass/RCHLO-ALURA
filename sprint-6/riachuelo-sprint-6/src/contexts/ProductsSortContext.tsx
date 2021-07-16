import React from 'react';

interface IProductsSortContextProps {
    productsSort: IProductsSort;
    setProductsSort: React.Dispatch<React.SetStateAction<IProductsSort>>
}

export interface IProductsSort {
    prop: 'name' | 'price';
    ord: 'asc' | 'des';
}

const ProductsSortContext = React.createContext<IProductsSortContextProps>({} as IProductsSortContextProps);

export default ProductsSortContext;