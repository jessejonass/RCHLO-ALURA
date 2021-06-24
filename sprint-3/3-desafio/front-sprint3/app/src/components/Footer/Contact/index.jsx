import React from 'react';

import './styles.css';

import googlePlayImg from '../../../assets/google-play.webp';
import appStoreImg from '../../../assets/app-store.webp';

export default function Contact() {
  return (
    <section className="footer__contact">
      <div className="footer__container contact">
        <p className="contact__info">Receba ofertas e novidades por e-mail</p>
        <form action="/">
          <input className="contact__input" type="email" placeholder="Digite aqui seu e-mail" />
          <button className="contact__btn" type="submit">
            <span className="contact__btn__txt">Cadastrar</span>
          </button>
        </form>
        <p className="contact__msg-app">Baixe nosso App</p>
        <div className="apps">
          <a href="/">
            <img className="apps__img" src={googlePlayImg} alt="Google Play" />
          </a>
          <a href="/">
            <img className="apps__img" src={appStoreImg} alt="App Store" />
          </a>
        </div>
      </div>
    </section>
  );
};
