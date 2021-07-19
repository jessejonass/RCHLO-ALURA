import { useContext } from "react";
import { FilterItem } from "./FilterItem";
import FilterContext from "../../../../contexts/FilterContext";

import { Filters as F } from "./types";

export function Filters({ filters }: F) {
    const { nameOrder, setNameOrder, priceOrder, setPriceOrder } = useContext(FilterContext);


    function handleNameOrder() {
        setPriceOrder('');
        nameOrder === 'up' ? setNameOrder('down') : setNameOrder('up');
    }

    function handlePriceOrder() {
        setNameOrder('');
        priceOrder === 'up' ? setPriceOrder('down') : setPriceOrder('up');
    }

    return (
        <section className="main__filters filters">
            <ul className="filters__list">
                {filters.map((f: any) => (
                    <FilterItem 
                        key={f.id} 
                        label={f.label} 
                    />
                ))}

                <li className="filters__item" onClick={handleNameOrder}>
                    <span className="filters__label">Nome</span>
                    <img 
                        className="filters__img" 
                        src={nameOrder ? `/assets/${nameOrder}.png` : `/assets/down.png`} 
                        alt="filtro" 
                    />
                </li>

                <li className="filters__item" onClick={handlePriceOrder}>
                    <span className="filters__label">Preço</span>
                    <img 
                        className="filters__img" 
                        src={priceOrder ? `/assets/${priceOrder}.png` : `/assets/down.png`}
                        alt="filtro" 
                    />
                </li>
            </ul>
        </section>
    );
}