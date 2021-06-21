import React from 'react';

import './styles.css';

export default class ListaCategorias extends React.Component {
  _handleInput(e) {
    if (e.key == 'Enter') {
      let categoria = e.target.value;
      this.props.criarCategoria(categoria);
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.props.categorias.map((cat, index) => (
            <li className="lista-categorias_item" key={index}>{cat}</li>
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
