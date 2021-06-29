import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { busca } from '../api/api';

import '../assets/css/blog.css';

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    busca(`/categorias`, setCategories);
  }, []);

  return (
    <ul className="lista-categorias container flex">
      {categories.map(c => (
        <Link to={`/categoria/${c.id}`}>
          <li 
            className={`
              lista-categorias__categoria 
              lista-categorias__categoria--${c.id}`
            }
          >
            {c.nome}
          </li>
        </Link>
      ))}
    </ul>
  );
};
