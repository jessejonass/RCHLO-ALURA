import React from 'react';

import './styles.css';

import rchlo1Card from '../../../assets/ico-cartao-rchlo1.webp';
import rchlo2Card from '../../../assets/ico-cartao-rchlo1.webp';
import rchlo3Card from '../../../assets/ico-cartao-rchlo1.webp';
import visaCard from '../../../assets/ico-cartao-visa.png';
import masterCard from '../../../assets/ico-cartao-master.webp';
import amexCard from '../../../assets/ico-cartao-amex.webp';
import dinersCard from '../../../assets/ico-cartao-diners.png';
import eloCard from '../../../assets/ico-cartao-elo.png';
import boleto from '../../../assets/ico-boleto.webp';
import paypal from '../../../assets/ico-paypal.png';

import instagramIcon from '../../../assets/ico-instagram.svg';
import pinterestIcon from '../../../assets/ico-pinterest.svg';
import twitterIcon from '../../../assets/ico-twitter.svg';
import youtubeIcon from '../../../assets/ico-youtube.svg';
import linkedinIcon from '../../../assets/ico-linkedin.svg';
import a11yIcon from '../../../assets/ico-a11y.webp';

export default function Payment() {
  return (
    <section className="footer__payment">
      <div className="footer__container payment">
        <div className="payment__alternatives">
          <h3 className="payment__title">Formas de Pagamento</h3>
          <img className="payment__img" src={rchlo1Card} alt="Cartão Riachuelo" />
          <img className="payment__img" src={rchlo2Card} alt="Cartão Riachuelo" />
          <img className="payment__img" src={rchlo3Card} alt="Cartão Riachuelo" />
          <img className="payment__img" src={visaCard} alt="Visa" />
          <img className="payment__img" src={masterCard} alt="Master" />
          <img className="payment__img" src={amexCard} alt="Amex" />
          <img className="payment__img" src={dinersCard} alt="Diners" />
          <img className="payment__img" src={eloCard} alt="Elo" />
          <img className="payment__img" src={boleto} alt="Boleto" />
          <img className="payment__img" src={paypal} alt="Paypal" />
        </div>
        
        <div className="payment__social">
          <h3 className="payment__title">Siga a Riachuelo</h3>
          <div className="social__icons">
            <div className="social__icon icon">
              <a href="/">
                <img className="icon__img" src="assets/ico-facebook.svg" alt="" />
              </a>
            </div>

            <div className="social__icon icon">
              <a href="/">
                <img className="icon__img" src={instagramIcon} alt="Instagram" />
              </a>
              <p className="icon__text">RCHLO</p>
            </div>

            <div className="social__icon icon">
              <a href="/">
                <img className="icon__img" src={instagramIcon} alt="Instagram" />
              </a>
              <p className="icon__text">CASA RCHLO</p>
            </div>

            <div className="social__icon icon">
              <a href="/">
                <img className="icon__img" src={pinterestIcon} alt="Pinterest" />
              </a>
            </div>
            <div className="social__icon icon">
              <a href="/">
                <img className="icon__img" src={twitterIcon} alt="Twitter" />
              </a>
            </div>
            <div className="social__icon icon">
              <a href="/">
                <img className="icon__img" src={youtubeIcon} alt="YouTube" />
              </a>
            </div>
            <div className="social__icon icon">
              <a href="/">
                <img className="icon__img" src={linkedinIcon} alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="payment__accessibility">
          <h3 className="payment__title">Acessibilidade</h3>
          <img src={a11yIcon} alt="A11Y" />
        </div>
      </div>
    </section>
  );
};
