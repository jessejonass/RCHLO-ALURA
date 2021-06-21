import React from 'react';

import './styles.css';

export default class ListaCategorias extends React.Component {
  constructor() {
    super();
    this.state = {
      categorias: [],
    };
  }

  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias.bind(this));
  }

  _novasCategorias(categorias) {
    this.setState({...this.state, categorias});
  }

  _handleInput(e) {
    if (e.key === 'Enter') {
      let categoria = e.target.value;
      this.props.criarCategoria(categoria);
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.state.categorias.map((c, index) => (
            <li className="lista-categorias_item" key={index}>{c}</li>
          ))}
        </ul>

        <input 
          type="text" 
          className="lista-categorias_input" 
          placeholder="Adicione uma categoria" 
          onKeyUp={this._handleInput.bind(this)}
        />
      </section>
    );
  }
};
