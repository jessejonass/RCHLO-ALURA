import React from 'react';

import './styles.css';

export default function BreadcrumbItem({ name, link }) {
    return (
      <>
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link" href="/">{name}</a>
        </li>
        {link && <li className="breadcrumbs__item  breadcrumbs__separator">/</li>}
      </>
  );
};
