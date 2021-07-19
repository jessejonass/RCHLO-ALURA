import { ChangeEvent, useState } from 'react';

import { AxiosResponse } from 'axios';
import {
  Container,
  TableContainer,
  Paper,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from '@material-ui/core';
import { Edit, Add, Delete } from '@material-ui/icons/';
import { useHistory } from 'react-router-dom';

import { Header } from '../../components/Header';
import { useBrands } from '../../hooks/BrandsContext';
import { EditBrandModal } from '../../components/EditBrandModal/EditBrandModal';
import { ModalConfirm } from '../../components/ModalConfirm';
import { request } from '../../api/request';
import { BrandTableCell } from '../../components/BrandTableCell';
import { useStyles } from './styles';

type SelectedBrand = {
  id: number;
};

type Brand = {
  id: number;
  nome: string;
};

export const Brands = (): JSX.Element => {
  const classes = useStyles();
  const { brands } = useBrands();
  const history = useHistory();
  const [selected, setSelected] = useState<SelectedBrand[]>([]);
  const [openEditModal, setEditOpenModal] = useState<boolean>(false);
  const [openDeleteModal, setDeleteOpenModal] = useState<boolean>(false);
  const [newBrandsList, setNewBrandsList] = useState<Brand[]>([]);
  function handleToggleEditModal(): void {
    setEditOpenModal(!openEditModal);
  }

  function handleToggleDeleteModal(): void {
    setDeleteOpenModal(!openDeleteModal);
  }

  function handleUpdateBrand(): void {
    handleToggleEditModal();
  }

  function deleteBrand(id: number): void {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    request('DELETE', `/marcas/${id}`).then((response: AxiosResponse) => true);
  }

  function handleDeleteBrand() {
    selected.map((item) => deleteBrand(item.id));

    request('GET', '/marcas').then((response: AxiosResponse) =>
      setNewBrandsList(response.data),
    );

    handleToggleDeleteModal();
  }

  function handleOnSelectBrand(event: ChangeEvent<HTMLInputElement>) {
    const isSelected = selected.find(
      (item) => item.id === Number(event.target.id),
    );

    if (!isSelected) {
      setSelected([
        ...selected,
        {
          id: Number(event.target.id),
        },
      ]);
    } else {
      removeSelected(isSelected.id);
    }
  }

  function onRegisterBrand() {
    history.push('/cadastro-marca');
  }

  function removeSelected(id: number) {
    const selectedWithoutUnselected = selected.filter((item) => item.id !== id);

    setSelected(selectedWithoutUnselected);
  }

  return (
    <>
      <Header />

      <Container data-dataid="marcas">
        <Typography variant="h4" component="h3" className={classes.customTitle}>
          Marcas
        </Typography>

        <TableContainer component={Paper}>
          <div className={classes.buttons}>
            <Button
              variant="contained"
              startIcon={<Edit />}
              className={classes.customBtn}
              color="primary"
              disabled={selected.length > 1 || selected.length === 0}
              onClick={handleUpdateBrand}
            >
              Editar
            </Button>

            <Button
              variant="contained"
              startIcon={<Add />}
              className={classes.customBtn}
              onClick={onRegisterBrand}
            >
              Adicionar
            </Button>

            <Button
              variant="contained"
              startIcon={<Delete />}
              className={classes.customBtn}
              color="secondary"
              disabled={selected.length === 0}
              onClick={handleToggleDeleteModal}
            >
              Excluir
            </Button>

            <ModalConfirm
              open={openDeleteModal}
              onClose={handleToggleDeleteModal}
              onConfirm={handleDeleteBrand}
              title="Deseja realmente excluir essa marca?"
              message="Ao confirmar, não será possivel reverter essa operação."
            />
          </div>

          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Marca</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {newBrandsList.length > 0
                ? newBrandsList.map((brand) => (
                    <BrandTableCell
                      key={brand.id}
                      id={brand.id.toString()}
                      nome={brand.nome}
                      handleOnSelectBrand={handleOnSelectBrand}
                    />
                  ))
                : // eslint-disable-next-line radar/no-identical-functions
                  brands.map((brand) => (
                    <BrandTableCell
                      key={brand.id}
                      id={brand.id.toString()}
                      nome={brand.nome}
                      handleOnSelectBrand={handleOnSelectBrand}
                    />
                  ))}
            </TableBody>
          </Table>

          <EditBrandModal
            brandId={selected[0]?.id}
            open={openEditModal}
            onClose={handleToggleEditModal}
          />
        </TableContainer>
      </Container>
    </>
  );
};
