import React from 'react';

import './styles.css';

export default function MenuItem({ title }) {
  return (
    <li className="menu__item">
      <a className="menu__link" href="/">
        <span>{title}</span>
      </a>
    </li>
  );
};