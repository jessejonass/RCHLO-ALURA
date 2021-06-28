import React, { useState } from 'react';

import './styles.css';

import menuIcon from '../../assets/menu.svg';
import closeIcon from '../../assets/close.svg';
import searchIcon from '../../assets/search.svg';
import riachueloLogo from '../../assets/riachuelo.svg';
import rchloLogo from '../../assets/rchlo.svg';

import Menu from '../Menu';

import { useFilter } from '../../hooks/useFilter';
import { useProducts } from '../../hooks/useProducts';

export default function Header() {
  const [search, setSearch] = useState();
  const { addFilter } = useFilter();
  // const { products } = useProducts();

  function handleFilter(e) {
    e.preventDefault();
    addFilter(search);
  }
  
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__mobile">
          <div className="header__drawer menu header__drawer--active">
            <img className="menu__img" src={menuIcon} alt="Menu Icon" />
            <p className="menu__title">menu</p>
          </div>

          <div className="header__drawer close">
            <img src={closeIcon} alt="Close Icon" />
            <p className="close__title">fechar</p>
          </div>

          <h1 className="header__logo">
            <img className="header__img" src={rchloLogo} alt="Logo" />
          </h1>
        </div>

        <div className="header__desktop">
          <h1 className="header__logo">
            <img className="header__img" src={riachueloLogo} alt="Logo" />
          </h1>
        </div>

        <div className="header__search">
          <form onSubmit={handleFilter}>
            <img className="header__icon" src={searchIcon} alt="Search Icon" />
            <input
              onChange={e => setSearch(e.target.value)}
              className="header__input" 
              type="search" 
              placeholder="O que você está procurando?"
            />
          </form>
        </div>

        <Menu />
      </div>
    </header>
  );
};
