import React from 'react';

export function MenuItem({ label }: any) {
  return (
      <li className="menu__item">
          <a className="menu__link" href="#home">
              <span>{label}</span>
          </a>
      </li>
  );
}
