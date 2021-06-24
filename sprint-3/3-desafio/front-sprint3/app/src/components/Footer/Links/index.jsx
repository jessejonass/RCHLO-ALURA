import React from 'react';

import './styles.css';

import attendanceIcon from '../../../assets/ico-attendance.svg';
import faqIcon from '../../../assets/ico-faq.svg';
import invoiceIcon from '../../../assets/ico-invoice-and-statement.svg';
import workIcon from '../../../assets/ico-work-with-us.svg';

export default function Links() {
  return (
    <section className="footer__links links">
      <div className="footer__container links">
        <div className="links__contacts">
          <div className="col">
            <a href="/" className="contact-icon">
              <img className="contact-icon__img" src={attendanceIcon} alt="Atendimento" />
              <p className="contact-icon__text">Atendimento</p>
            </a>
            <a href="/" className="contact-icon">
              <img className="contact-icon__img" src={faqIcon} alt="Perguntas Frequentes" />
              <p className="contact-icon__text">Perguntas Frequentes</p>
            </a>
          </div>
          
          <div className="col">
            <a href="/" className="contact-icon">
              <img className="contact-icon__img" src={invoiceIcon} alt="Fatura e Extrato" />
              <p className="contact-icon__text">Fatura e Extrato</p>
            </a>
            <a href="/" className="contact-icon">
              <img className="contact-icon__img" src={workIcon} alt="Trabalhe Conosco" />
              <p className="contact-icon__text">Trabalhe Conosco</p>
            </a>
          </div>
        </div>
          
        <hr className="links__separator" />
          
        <ul className="links__companies company-links">
          <li className="company-links">
            <h3 className="company-links__title">Cartão Riachuelo</h3>
            <ul>
              <li className="company-links__item">
                <a className="company-links__text" href="/">
                  Midway Financeira
                </a>
              </li>
              <li className="company-links__item">
                <a className="company-links__text" href="/">
                  Saiba como adquirir
                </a>
              </li>
              <li className="company-links__item">
                <a className="company-links__text" href="/">
                  Veja sua fatura e extrato
                </a>
              </li>
              <li className="company-links__item">
                <a className="company-links__text" href="/">
                  Buscando quitar suas dívidas?
                </a>
              </li>
            </ul>
          </li>
          
          <li className="company-links">
            <h3 className="company-links__title">Sobre a Riachuelo</h3>
            <ul>
              <li className="company-links__item">
                <a className="company-links__text" href="/">A Empresa</a>
              </li>
              <li className="company-links__item">
                <a className="company-links__text" href="/">Portal de Fornecedores</a>
              </li>
              <li className="company-links__item">
                <a className="company-links__text" href="/">
                  Relação com Investidores
                </a>
              </li>
              <li className="company-links__item">
                <a className="company-links__text" href="/">
                  Assessoria de Imprensa
                </a>
              </li>
              <li className="company-links__item">
                <a className="company-links__text" href="/">Trabalhe Conosco</a>
              </li>
              <li className="company-links__item">
                <a className="company-links__text" href="/">
                  Programa Jovem Aprendiz
                </a>
              </li>
              <li className="company-links__item">
                <a className="company-links__text" href="/">
                  Cadastro de Startups
                </a>
              </li>
              <li className="company-links__item">
                <a className="company-links__text" href="/"> Mapa do Site </a>
              </li>
              <li className="company-links__item">
                <a className="company-links__text" href="/"> Guide Shop </a>
              </li>
              <li className="company-links__item">
                <a className="company-links__text" href="/">
                  Venda na Riachuelo Marketplace
                </a>
              </li>
            </ul>
          </li>
          
          <li className="company-links">
            <h3 className="company-links__title">Moda que Transforma</h3>
            <ul>
              <li className="company-links__item">
                <a className="company-links__text" href="/">Na prática</a>
              </li>
              <li className="company-links__item">
                <a className="company-links__text" href="/">Entre Costuras</a>
              </li>
              <li className="company-links__item">
                <a className="company-links__text" href="/">
                  Jeans Mais Transparente</a>
              </li>
              <li className="company-links__item">
                <a className="company-links__text" href="/">Ações Covid-19</a>
              </li>
              <li className="company-links__item">
                <a className="company-links__text" href="/">Free Free</a>
              </li>
            </ul>
          </li>
          
          <li className="company-links">
            <h3 className="company-links__title">Ajuda</h3>
            <ul>
              <li className="company-links__item">
                <a className="company-links__text" href="/">Atendimento</a>
              </li>
              <li className="company-links__item">
                <a className="company-links__text" href="/">Perguntas Frequentes</a>
              </li>
              <li className="company-links__item">
                <a className="company-links__text" href="/">Trocas e Devoluções</a>
              </li>
              <li className="company-links__item">
                <a className="company-links__text" href="/">Portal da Privacidade</a>
              </li>
              <li className="company-links__item">
                <a className="company-links__text" href="/">Política de Privacidade</a>
              </li>
              <li className="company-links__item">
                <a className="company-links__text" href="/">Termos e Condições de Uso</a>
              </li>
              <li className="company-links__item">
                <a className="company-links__text" href="/">Regras e Resultados de Sorteios</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};
