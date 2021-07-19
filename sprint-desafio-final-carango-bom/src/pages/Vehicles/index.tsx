import { ChangeEvent, useEffect, useState } from 'react';

import { AxiosResponse } from 'axios';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  FormControl,
  TableRow,
  Paper,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
} from '@material-ui/core';
import { Edit, Add, Delete } from '@material-ui/icons/';

import { Header } from '../../components/Header';
import { useVehicles } from '../../hooks/VehiclesContext';
import { Vehicle } from '../../@types/contexts';
import { ModalConfirm } from '../../components/ModalConfirm';
import { VehicleTableCell } from '../../components/VehicleTableCell';
import { useStyles } from './styles';
import { request } from '../../api/request';
import { useBrands } from '../../hooks/BrandsContext';

type SelectedVehicle = {
  id: number;
};

export const Vehicles = (): JSX.Element => {
  const [optionSearch, setOptionSearch] = useState('');

  const classes = useStyles();
  const [selected, setSelected] = useState<SelectedVehicle[]>([]);
  const [newVehiclesList, setNewVehiclesList] = useState<Vehicle[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const { vehicles, getVehicleBrand } = useVehicles();

  const { brands } = useBrands();

  const history = useHistory();

  function removeSelected(id: number) {
    const selectedWithoutUnselected = selected.filter((item) => item.id !== id);
    setSelected(selectedWithoutUnselected);
  }

  function getSelectedVehicle(event: ChangeEvent<HTMLInputElement>) {
    const isSelected = selected.find(
      (item) => item.id === Number(event.target.id),
    );

    if (!isSelected) {
      setSelected([...selected, { id: Number(event.target.id) }]);
    } else {
      removeSelected(isSelected.id);
    }
  }

  function deleteVehicle(id: number): void {
    request('DELETE', `/veiculos/${id}`).then(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (response: AxiosResponse) => true,
    );
  }

  function handleDeleteVehicle() {
    selected.map((item) => deleteVehicle(item.id));

    request('GET', '/veiculos').then((response: AxiosResponse) =>
      setNewVehiclesList(response.data),
    );

    handleToggleModal();
  }

  function handleToggleModal(): void {
    setOpenModal(!openModal);
  }

  function handleRemoveVehicle(): void {
    handleToggleModal();
  }

  function handleSearchVehicle(event: ChangeEvent<HTMLInputElement>): void {
    const searchTerm = event.target.value;
    const brandsearchTerm = event.target.value;

    if (optionSearch === '') return;

    if (Number(optionSearch) === 1) {
      const brandSearch = brands.filter((item) => {
        const brand = item.nome.toLowerCase();
        const search = brandsearchTerm.toLowerCase();

        return brand.includes(search);
      });

      const vehiclesByBrand = vehicles.filter(
        (item) => item.marcaId === brandSearch[0]?.id,
      );

      setNewVehiclesList(vehiclesByBrand);
    }

    if (Number(optionSearch) === 2) {
      const vehicleSearch = vehicles.filter((item) => {
        const model = item.modelo.toLowerCase();
        const search = searchTerm.toLowerCase();

        return model.includes(search);
      });

      setNewVehiclesList(vehicleSearch);
    }
  }

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setOptionSearch(event.target.value as string);
  };
  return (
    <>
      <Header />

      <Container>
        <Typography variant="h4" component="h3" className={classes.customTitle}>
          Veículos
        </Typography>

        <TableContainer component={Paper}>
          <div className={classes.buttons}>
            <FormControl className={classes.labelInput}>
              <InputLabel id="search" className={classes.labelInput}>
                Selecione
              </InputLabel>
              <Select
                className={classes.customSelect}
                labelId="search"
                id="search"
                value={optionSearch}
                label="Selecione"
                onChange={handleChange}
              >
                <MenuItem value={1}>Marca</MenuItem>
                <MenuItem value={2}>Modelo</MenuItem>
              </Select>
            </FormControl>

            <TextField
              id="outlined-basic"
              label="Busque um carro"
              variant="standard"
              size="small"
              className={classes.customInput}
              onChange={handleSearchVehicle}
            />

            <Button
              variant="contained"
              startIcon={<Edit />}
              className={classes.customBtn}
              color="primary"
              onClick={() => history.push(`/edita-veiculo/${selected[0]?.id}`)}
              disabled={selected.length > 1 || selected.length === 0}
            >
              Editar
            </Button>
            <Button
              variant="contained"
              startIcon={<Add />}
              className={classes.customBtn}
              onClick={() => history.push(`/cadastro-veiculo`)}
            >
              Adicionar
            </Button>

            <Button
              variant="contained"
              startIcon={<Delete />}
              className={classes.customBtn}
              color="secondary"
              disabled={selected.length === 0}
              onClick={handleRemoveVehicle}
            >
              Excluir
            </Button>

            <ModalConfirm
              open={openModal}
              onClose={handleToggleModal}
              onConfirm={handleDeleteVehicle}
              title="Deseja realmente excluir esse veículo?"
              message="Ao confirmar, não será possivel reverter essa operação."
            />
          </div>

          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Marca</TableCell>
                <TableCell>Modelo</TableCell>
                <TableCell>Ano</TableCell>
                <TableCell>Valor</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {newVehiclesList.length > 0
                ? newVehiclesList.map((item) => (
                    <VehicleTableCell
                      key={item.id}
                      id={item.id}
                      modelo={item.modelo}
                      ano={item.ano}
                      valor={item.valor}
                      marcaId={item.marcaId}
                      getSelectedVehicle={getSelectedVehicle}
                      getVehicleBrand={getVehicleBrand}
                    />
                  ))
                : // eslint-disable-next-line radar/no-identical-functions
                  vehicles.map((item) => (
                    <VehicleTableCell
                      key={item.id}
                      id={item.id}
                      modelo={item.modelo}
                      ano={item.ano}
                      valor={item.valor}
                      marcaId={item.marcaId}
                      getSelectedVehicle={getSelectedVehicle}
                      getVehicleBrand={getVehicleBrand}
                    />
                  ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};
