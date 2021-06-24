import React from 'react';

import './styles.css';

import Contact from './Contact';
import Links from './Links';
import Payment from './Payment';
import Bottom from './Bottom';

export default function Footer() {
  return (
    <footer className="footer">
      <Contact />
      <Links />
      <Payment />
      <Bottom />
    </footer>
  );
};
