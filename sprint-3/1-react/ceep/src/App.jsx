import React from 'react';
import './assets/App.css';

import ListaNotas from './components/ListaNotas';
import FormCadastro from './components/FormCadastro';

export default class App extends React.Component {
  render() {
    return (
      <section className="conteudo">
      <FormCadastro />
      <ListaNotas />
      </section>
    );
  }
}
