import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useContext,
  useCallback,
} from 'react';

import { AxiosResponse } from 'axios';

import { request } from '../../api/request';
import { useBrands } from '../BrandsContext';
import { Vehicle } from '../../@types/contexts';

type VehiclesContextData = {
  vehicles: Vehicle[];
  getVehicleBrand: (id: number) => string | undefined;
};

type VehiclesContextProps = {
  children: ReactNode;
};

export const VehiclesContext = createContext<VehiclesContextData>(
  {} as VehiclesContextData,
);

export function VehiclesProvider({ children }: VehiclesContextProps) {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  const { brands } = useBrands();

  function getVehicleBrand(id: number) { // eslint-disable-line
    if (brands) {
      const brand = brands.find((item) => item.id === id);
      return brand?.nome;
    }
  }

  // async function get() {
  //   await request('GET', '/veiculos').then((response: AxiosResponse) =>
  //     setVehicles(response.data),
  //   );
  // }

  const get = useCallback(async () => {
    await request('GET', '/veiculos').then((response: AxiosResponse) =>
      setVehicles(response.data),
    );
  }, []);

  useEffect(() => {
    get();
  }, [get]);

  return (
    <VehiclesContext.Provider value={{ vehicles, getVehicleBrand }}>
      {children}
    </VehiclesContext.Provider>
  );
}

export function useVehicles() {
  const context = useContext(VehiclesContext);

  if (!context) {
    throw new Error('useVehicles must be used within VehiclesContext');
  }

  return context;
}
