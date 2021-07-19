import { useState } from 'react';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import { api } from '../../api/request';

type ModalConfirmProps = {
  brandId: number;
  open: boolean;
  onClose: () => void;
};

export const EditBrandModal = ({
  brandId,
  open,
  onClose,
}: ModalConfirmProps): JSX.Element => {
  const [brandName, setBrandName] = useState('');

  function confirmUpdate() {
    const data = {
      id: brandId,
      modelo: brandName,
    };

    api
      .put(`/marcas/${brandId}`, data)
      .then(() => (
        <Alert severity="success" color="info">
          This is a success alert — check it out!
        </Alert>
      ))
      .catch((err) => (
        <Alert severity="error" color="info">
          {err}
        </Alert>
      ));

    setBrandName('');
    onClose();
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Atualizar marca</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <TextField
              label="marca"
              fullWidth
              margin="dense"
              onChange={(e) => setBrandName(e.target.value)}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={confirmUpdate} color="primary" autoFocus>
            Atualizar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
