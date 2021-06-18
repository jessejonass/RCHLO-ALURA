import React from 'react';
import CardNota from '../CardNota';

import './styles.css';

export default class ListaDeNotas extends React.Component {
  render() {
    return (
      <ul className="lista-notas">
        {Array.of('Trabalho', 'Trabalho', 'Estudos').map((item, index) => (
          <li className="lista-notas_item" key={index}>
            <CardNota />
          </li>
        ))}
      </ul>
    );
  }
}