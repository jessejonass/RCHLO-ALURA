import React from 'react';

import image from '../assets/img/doguito404.svg';
import '../assets/css/404.css';

export default function NotFound() {
  return (
    <main className="container flex flex--centro flex--coluna">
      <img className="doguito-imagem" src={image} alt="Not found" />
      <p className="naoencontrado-texto">404 | Page not found</p>
    </main>
  );
};
