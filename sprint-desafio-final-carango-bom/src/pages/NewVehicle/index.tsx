/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { useCallback } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import { useHistory, useParams } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import { Typography, Button, Paper } from '@material-ui/core';

import 'react-toastify/dist/ReactToastify.css';
import { request, api } from '../../api/request';
import { useStyles } from './styles';
import { Header } from '../../components/Header';
import { Input } from '../../components/input';
import { Select } from '../../components/Select';
import { useVehicles } from '../../hooks/VehiclesContext';
import { Vehicle } from '../../@types/contexts';

interface BrandProps {
  id: string;
  nome: string;
}

export function NewVehicle() {
  const [brands, setBrands] = useState<BrandProps[]>([]);
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [value, setValue] = useState('');
  const [currentVehicle, setCurrentVehicle] = useState<Vehicle>({} as Vehicle);
  const [loading, setLoading] = useState(false);

  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const { vehicles } = useVehicles();
  const classes = useStyles();

  const loadVehicle = useCallback(() => {
    const current = vehicles.find((vehicle) => vehicle.id === Number(id));

    if (current) {
      setCurrentVehicle(current);

      setBrand(String(current.marcaId));
      setModel(String(current.modelo));
      setYear(String(current.ano));
      setValue(String(current.valor));
    }
  }, [id, vehicles]);

  async function loadBrands() {
    await request('GET', `/marcas`).then((response: AxiosResponse) => {
      setBrands(response.data);
    });
  }

  // carrega marcas e verifica se tem ID na rota
  useEffect(() => {
    loadBrands();
    // se existir um ID na rota, carregar um veiculo com id === param
    if (id) loadVehicle();
  }, [id, loadVehicle]);

  const data = {
    marcaId: brand,
    modelo: model,
    ano: year,
    valor: value,
  };

  const notify = (message: string) =>
    toast.info(message, {
      position: 'top-right',
      autoClose: 2000,
      closeOnClick: true,
    });

  async function handleSubmit(): Promise<void> {
    await api
      .post('/veiculos', data)
      .then(() => {
        setLoading(true);
        notify('Veículo cadastrado com sucesso');
        setTimeout(() => {
          history.push('/');
          window.location.reload();
        }, 2500);
      })
      .catch(() => {
        notify('Erro ao cadastrar veículo');
      });
  }

  async function handleUpdate(): Promise<void> {
    await api
      .put(`/veiculos/${id}`, data)
      .then(() => {
        setLoading(true);
        notify('Veículo editado com sucesso');
        setTimeout(() => {
          history.push('/veiculos');
          window.location.reload();
        }, 2500);
      })
      .catch(() => {
        notify('Erro ao editar veículo');
      });
  }

  return (
    <>
      <Header />

      <ToastContainer />

      <main className={classes.layout} data-testid="cadastro-veiculo">
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            {id ? 'Editar veículo' : 'Cadastrar veículo'}
          </Typography>

          <Select value={brand} onChange={(e: any) => setBrand(e.target.value)}>
            <option value="DEFAULT" disabled>
              Selecione uma marca
            </option>
            {brands.map((item) => (
              <option key={item.id} value={item.id}>
                {item.nome}
              </option>
            ))}
          </Select>

          <Input
            type="text"
            placeholder="Modelo *"
            required
            autoFocus
            defaultValue={currentVehicle?.modelo}
            onChange={(e: any) => setModel(e.target.value)}
          />

          <Input
            type="text"
            placeholder="Ano *"
            required
            onChange={(e: any) => setYear(e.target.value)}
            defaultValue={currentVehicle.ano}
          />

          <Input
            type="text"
            placeholder="Valor *"
            required
            onChange={(e: any) => setValue(e.target.value)}
            defaultValue={currentVehicle.valor}
          />

          <div className={classes.buttons}>
            {Object.keys(currentVehicle).length > 0 ? (
              <Button
                variant="contained"
                color="primary"
                onClick={handleUpdate}
                className={classes.button}
                disabled={loading}
              >
                {loading ? '...' : 'Atualizar'}
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                className={classes.button}
                disabled={loading}
              >
                {loading ? '...' : 'Cadastrar'}
              </Button>
            )}

            <Button
              variant="contained"
              color="inherit"
              onClick={() => history.push('/')}
              className={classes.button}
            >
              Cancelar
            </Button>
          </div>
        </Paper>
      </main>
    </>
  );
}
