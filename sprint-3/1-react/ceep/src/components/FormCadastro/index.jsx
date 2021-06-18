import React from 'react';

import './styles.css';

export default class FormCadastro extends React.Component {
  constructor(props) {
    super(props);

    this.titulo = '';
    this.texto = '';
  }

  _handleMudancaTitulo(e) {
    e.stopPropagation();
    this.titulo = e.target.value;
  }

  _handleMudancaTexto(e) {
    e.stopPropagation();
    this.texto = e.target.value;
  }

  _handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();


    this.props.criarNota(this.titulo, this.texto);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._handleSubmit.bind(this)}>
        <input 
        type="text" 
        placeholder="Título"
        className="form-cadastro_input"
        onChange={this._handleMudancaTitulo.bind(this)}
      />
        <textarea
          rows={15}
          placeholder="Insira sua nota"
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
        />

        <button className="form-cadastro_input form-cadastro_submit">
          Criar nota
        </button>
      </form>
    );
  }
};
