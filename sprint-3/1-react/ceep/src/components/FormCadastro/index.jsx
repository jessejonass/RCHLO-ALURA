import React from 'react';

import './styles.css';

export default class FormCadastro extends React.Component {
  constructor() {
    super();
    this.titulo = '';
  }

  handleMudancaTitulo(e) {
    this.titulo = e.target.value;
    console.log(this.titulo);
  }

  render() {
    return (
      <form className="form-cadastro">
        <input 
        type="text" 
        placeholder="Título"
        className="form-cadastro_input"
        onChange={this.handleMudancaTitulo.bind(this)}
      />
        <textarea
          rows={15}
          placeholder="Insira sua nota"
          className="form-cadastro_input"
        />

        <button className="form-cadastro_input form-cadastro_submit">
          Criar nota
        </button>
      </form>
    );
  }
};
