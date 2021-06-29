import React from 'react';
import { Link } from 'react-router-dom';

import image from '../assets/img/doguito.svg';
import '../assets/css/componentes/cabecalho.css';

export default function Navbar() {
  return (
    <header className="cabecalho container">
      <div className="menu-hamburger">
        <span className="menu-hamburger__icon">
        </span>
      </div>

      <div className="cabecalho-container">
        <a href="/" className="flex flex--centro">
          <img className="cabecalho__logo" src={image} alt="Doguito Logo" />
          <h1 className="cabecalho__titulo">PetShop</h1>
        </a>
      </div>

      <nav className="menu-cabecalho">
        <ul className="menu-itens">
          <li>
            <Link 
              className="menu-item menu-item--entrar" 
              to="/login"
            >
                Entrar
            </Link>
          </li>

          <li>
            <Link className="menu-item" to="/produtos">Produtos</Link>
          </li>

          <li>
            <Link className="menu-item" to="/">Blog</Link>
          </li>

          <li>
            <Link className="menu-item" to="/sobre">Sobre</Link>
          </li>
        </ul>
      </nav>

      <div className="menu-cabecalho-background">

      </div>
    </header>
  );
};
