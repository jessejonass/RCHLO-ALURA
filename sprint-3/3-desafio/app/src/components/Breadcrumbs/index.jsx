import React, { useState, useEffect } from 'react';

import './styles.css';
import BreadcrumbItem from './BreadcrumbItem';

export default function Breadcrumbs() {
  const [current, setCurrent] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3333/current')
    .then(response => response.json())
    .then(data => setCurrent(data));
  }, []);

  return (
    <section className="main__breadcrumbs breadcrumbs">
      <nav>
        <ol className="breadcrumbs__list">
          {current.map(c => (
            <BreadcrumbItem key={c.id} name={c.name} link={c.link} />
          ))}
        </ol>
      </nav>
    </section>
  );
};
