import React from 'react';

import './styles.css';

export default function ProductItem({image, name, price}) {
  return (
    <li className="products__card card">
      <div className="card">
        <img
          className="card__img"
          src={image}
          alt={name}
        />
        <p className="card__description">
          {name}
        </p>
        <p className="card__price">{price}</p>
      </div>
    </li>
  );
};
