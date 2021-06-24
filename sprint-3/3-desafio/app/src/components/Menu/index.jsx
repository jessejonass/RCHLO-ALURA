import React, { useEffect, useState } from 'react';

import './styles.css';
import MenuItem from './MenuItem';

export default function Menu() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3333/categories')
    .then(response => response.json())
    .then(data => setCategories(data));
  }, []);

  return (
    <nav className="header__menu menu">
      <ul className="menu__list">
        {categories.map(c => (
          <MenuItem key={c.id} title={c.label} />
        ))}
      </ul>
    </nav>
  );
};
