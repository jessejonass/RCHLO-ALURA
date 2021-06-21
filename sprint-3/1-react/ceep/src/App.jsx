import React from 'react';
import './assets/App.css';

import ListaNotas from './components/ListaNotas';
import ListaCategorias from './components/ListaCategorias';
import FormCadastro from './components/FormCadastro';

export default class App extends React.Component {
  constructor(){
    super();

    this.state = {
      notas: [],
      categorias: ['Games', 'Música'],
    }
  }

  criarNota(titulo, texto, categoria){
    const novaNota = {titulo, texto, categoria};
    const novoArrayNotas = [...this.state.notas, novaNota]

    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado)
  }

  criarCategoria(categoria) {
    const novoArrayCategorias = [...this.state.categorias, categoria];
    
    const novoEstado = {
      ...this.state, 
      categorias: novoArrayCategorias,
    }

    this.setState(novoEstado);
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
        <FormCadastro 
          categorias={this.state.categorias}
          criarNota={this.criarNota.bind(this)}
        />

        <main className="conteudo-principal">
          <ListaCategorias
            categorias={this.state.categorias}
            criarCategoria={this.criarCategoria.bind(this)}
          />

          <ListaNotas 
            notas={this.state.notas} 
            deletarNota={this.deletarNota.bind(this)} 
          />
        </main>
      </section>
    );
  }
}
