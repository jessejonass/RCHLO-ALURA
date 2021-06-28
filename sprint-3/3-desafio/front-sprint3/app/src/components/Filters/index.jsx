import React, { useEffect, useState } from 'react';

import './styles.css';
import FilterItem from './FilteItem';

export default function Filters() {
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    async function loadFilters() {
      await fetch('http://localhost:3333/filters')
      .then(response => response.json())
      .then(data => setFilters(data));
    }
    loadFilters();
  }, []);

  return (
    <section className="main__filters filters">
      <ul className="filters__list">
        {filters.map(f => (
          <FilterItem key={f.id} label={f.label} />
        ))}
      </ul>
    </section>
  );
};
