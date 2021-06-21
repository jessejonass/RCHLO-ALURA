import React from 'react';
import './assets/App.css';

import ListaNotas from './components/ListaNotas';
import ListaCategorias from './components/ListaCategorias';
import FormCadastro from './components/FormCadastro';

import Categorias from './data/Categorias';
import Notas from './data/Notas';

export default class App extends React.Component {
  constructor(){
    super();

    this.categorias = new Categorias();
    this.notas = new Notas();
  }

  render() {
    return (
      <section className="conteudo">
        <FormCadastro 
          categorias={this.categorias}
          criarNota={this.notas.criarNota.bind(this.notas)}
        />

        <main className="conteudo-principal">
          <ListaCategorias
            categorias={this.categorias}
            criarCategoria={
              this.categorias.criarCategoria.bind(this.categorias)
            }
          />

          <ListaNotas 
            notas={this.notas} 
            deletarNota={this.notas.deletarNota.bind(this.notas)}
          />
        </main>
      </section>
    );
  }
}
