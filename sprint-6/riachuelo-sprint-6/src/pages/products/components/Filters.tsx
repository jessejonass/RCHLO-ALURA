import { useContext } from "react";
import ProductsSortContext from "../../../contexts/ProductsSortContext";
import IFilter from "../../../models/IFilter";

function FilterItem({ label }: { label: string }) {
    return (
        <li className="filters__item">
            <span className="filters__label">{label}</span>
            <img className="filters__img" src="/assets/filter.svg" alt="filtro" />
        </li>
    );
}

function Filters({ filters }: { filters: IFilter[] }) {

    const { productsSort, setProductsSort } = useContext(ProductsSortContext);

    return (
        <>
            <section className="main__filters filters">
                <ul className="filters__list">
                    {filters.map(f => <FilterItem key={f.id} label={f.label} />)}
                </ul>
            </section>
            <section className="main__filters filters">
                <ul className="filters__list">
                    <li className="filters__item" onClick={()=> setProductsSort({prop: 'name', ord: (productsSort.ord === "asc" ? 'des' : 'asc')  })}>
                        <span className="filters__label">Nome</span>
                        <img
                            className={`filters__img ${productsSort.prop === 'name' && productsSort.ord === 'asc' && 'rotate180'}`}
                            src="/assets/filter.svg" alt="filtro" />
                    </li>
                    <li className="filters__item" onClick={()=> setProductsSort({prop: 'price', ord: (productsSort.ord === "asc" ? 'des' : 'asc')  })}>
                        <span className="filters__label">Preço</span>
                        <img 
                            className={`filters__img ${productsSort.prop === 'price' && productsSort.ord === 'asc' && 'rotate180'}`}
                            src="/assets/filter.svg" alt="filtro" />
                    </li>
                </ul>
            </section>
        </>
    );
}

export default Filters;