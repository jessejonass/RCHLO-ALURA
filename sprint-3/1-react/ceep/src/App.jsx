import React from 'react';
import './assets/App.css';

import ListaNotas from './components/ListaNotas';
import FormCadastro from './components/FormCadastro';

export default class App extends React.Component {
  constructor(){
    super();

    this.state = {
      notas:[]
    }
  }

  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado)
  }

  deletarNota(index) {
    let listaNotas = this.state.notas;
    listaNotas.splice(index, 1);
    this.setState({
      notas: listaNotas,
    });
  }

  render() {
    return (
      <section className="conteudo">
        <FormCadastro criarNota={this.criarNota.bind(this)} />
        <ListaNotas 
          notas={this.state.notas} 
          deletarNota={this.deletarNota.bind(this)} 
        />
      </section>
    );
  }
}
