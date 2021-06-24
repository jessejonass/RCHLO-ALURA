import React from 'react';

import './styles.css';
import chevronDown from '../../../assets/filter.svg';

export default function FilterItem({ label }) {
  return (
    <li className="filters__item">
      <span className="filters__label">{label}</span>
      <img className="filters__img" src={chevronDown} alt="Seta fitro" />
    </li>
  );
};
