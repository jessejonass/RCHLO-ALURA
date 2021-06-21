import React from 'react';
import Button from '@material-ui/core/Button';

export default function FormCadastro() {
  return (
    <form>
      <label>Nome</label>
      <input type="text" placeholder="Nome" />

      <label>Sobrenome</label>
      <input type="text" placeholder="Sobrenome" />

      <label>CPF</label>
      <input type="text" placeholder="CPF" />

      <label htmlFor="promo">Promoções</label>
      <input type="checkbox" id="promo" name="promo" />

      <label htmlFor="newsletter">Novidades</label>
      <input type="checkbox" id="newsletter" name="newsletter" />

      <Button variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
};
