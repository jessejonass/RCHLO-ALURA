import FilterItem from './FilterItem';

export default function Filters({ filters }) {
  return (
    <section className="main__filters filters">
      <ul className="filters__list">
        {filters.map(f => <FilterItem key={f.id} label={f.label} />)}
      </ul>
    </section>
  );
}
