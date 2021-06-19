import React from 'react';

import './styles.css';
import deleteImg from '../../assets/img/delete.svg';

export default class CardNota extends React.Component {
  deletarNota() {
    const index = this.props.index;
    this.props.deletarNota(index);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>

          <button 
            className="card-nota_delete"
            onClick={this.deletarNota.bind(this)}
          >
            <img className="card-nota_img" src={deleteImg} alt="Delete" />
          </button>
        </header>

        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
};
