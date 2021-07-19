import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useContext,
} from 'react';

import { AxiosResponse } from 'axios';

import { request } from '../../api/request';

type Brand = {
  id: number;
  nome: string;
};

type BrandsContextData = {
  brands: Brand[];
};

type BrandsContextProps = {
  children: ReactNode;
};

export const BrandsContext = createContext<BrandsContextData>(
  {} as BrandsContextData,
);

export function BrandsProvider({ children }: BrandsContextProps) {
  const [brands, setBrands] = useState<Brand[]>([]);

  function get() {
    request('GET', '/marcas').then((response: AxiosResponse) =>
      setBrands(response.data),
    );
  }

  useEffect(() => {
    get();
  }, []);

  return (
    <BrandsContext.Provider value={{ brands }}>
      {children}
    </BrandsContext.Provider>
  );
}

export function useBrands() {
  const context = useContext(BrandsContext);

  if (!context) {
    throw new Error('useBrandss must be used within BrandssContext');
  }

  return context;
}
