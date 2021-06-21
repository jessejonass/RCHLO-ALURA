import React from 'react';
import CardNota from '../CardNota';

import './styles.css';

export default class ListaDeNotas extends React.Component {
    render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((nota, index) => (
          <li className="lista-notas_item" key={index}>
            <CardNota 
              titulo={nota.titulo} 
              texto={nota.texto}
              categoria={nota.categoria}
              deletarNota={this.props.deletarNota}
              index={index}
            />
          </li>
        ))}
      </ul>
    );
  }
}