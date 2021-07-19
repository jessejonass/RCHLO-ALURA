import { ChangeEvent } from 'react';

import { TableRow, TableCell, Checkbox } from '@material-ui/core';

import { currencyFormatter } from '../../utils/currencyFormatter';

type VehicleTableCellProps = {
  id: number | string;
  modelo: string;
  ano: number;
  valor: number;
  marcaId: number | string;
  getSelectedVehicle: (event: ChangeEvent<HTMLInputElement>) => void;
  getVehicleBrand: (id: number) => string | undefined;
};

export const VehicleTableCell = ({
  id,
  modelo,
  ano,
  valor,
  marcaId,
  getSelectedVehicle,
  getVehicleBrand,
}: VehicleTableCellProps): JSX.Element => (
  <TableRow key={id} hover>
    <TableCell>
      <Checkbox id={id.toString()} onChange={getSelectedVehicle} />
    </TableCell>
    <TableCell component="th" scope="row">
      {getVehicleBrand(Number(marcaId))}
    </TableCell>
    <TableCell component="th" scope="row">
      {modelo}
    </TableCell>
    <TableCell component="th" scope="row">
      {ano}
    </TableCell>
    <TableCell component="th" scope="row">
      {currencyFormatter(valor)}
    </TableCell>
  </TableRow>
);
