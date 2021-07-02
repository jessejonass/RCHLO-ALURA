export default function FilterItem({ label }) {
  return (
    <li className="filters__item">
      <span className="filters__label">{label}</span>
      <img className="filters__img" src="assets/filter.svg" alt="filtro" />
    </li>
  );
}
