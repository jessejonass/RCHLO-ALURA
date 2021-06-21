import React from 'react';

import './styles.css';

export default class FormCadastro extends React.Component {
  constructor(props) {
    super(props);

    this.titulo = '';
    this.texto = '';
    this.categoria = 'Sem categoria';

    this.state = {
      categorias: [],
    };

    this._novasCategorias = this._novasCategorias.bind(this);
  }

  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias);
  }

  componentWillUnmount() {
    this.props.categorias.desinscrever(this._novasCategorias);
  }

  _novasCategorias(categorias) {
    this.setState({...this.state, categorias});
  }

  _handleMudancaTitulo(e) {
    e.stopPropagation();
    this.titulo = e.target.value;
  }

  _handleMudancaTexto(e) {
    e.stopPropagation();
    this.texto = e.target.value;
  }

  _handleMudancaCategoria(e) {
    e.stopPropagation();
    this.categoria = e.target.value;
  }

  _handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    this.props.criarNota(this.titulo, this.texto, this.categoria);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._handleSubmit.bind(this)}>
        <select
          onChange={this._handleMudancaCategoria.bind(this)}
          className="form-cadastro_input"
        >
          <option value="Sem categoria">Sem categoria</option>
          {this.state.categorias.map((c, index) => (
            <option value={c} key={index}>{c}</option>
          ))}
        </select>
        
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
