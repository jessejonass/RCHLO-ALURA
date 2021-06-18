import React from 'react';
import './styles.css';

export default class FormCadastro extends React.Component {
  render() {
    return (
      <form className="form-cadastro">
        <input 
        type="text" 
        placeholder="Título"
        className="form-cadastro_input"
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
