import { ChangeEvent } from 'react';

import { TableRow, TableCell, Checkbox } from '@material-ui/core';

type BrandTableCellProps = {
  id: string;
  nome: string;
  handleOnSelectBrand: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const BrandTableCell = ({
  id,
  nome,
  handleOnSelectBrand,
}: BrandTableCellProps): JSX.Element => (
  <TableRow hover>
    <TableCell>
      <Checkbox id={id} onChange={handleOnSelectBrand} />
    </TableCell>
    <TableCell component="th" scope="row">
      {nome}
    </TableCell>
  </TableRow>
);
