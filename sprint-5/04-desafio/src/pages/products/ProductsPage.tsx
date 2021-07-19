import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import FilterContext from "../../contexts/FilterContext";
import LoadingContext from "../../contexts/LoadingContext";
import MessageContext from "../../contexts/MessageContext";
import ProductsService from "../../services/ProductsService";
import Breadcrumbs from "./components/Breadcrumbs";
import Filters from "./components/Filters";

import { Product as P, Filter as F } from './types';

function Product({ sku, image, name, price }: P) {
    const history = useHistory();

    function detail() {
        history.push('/product/' + sku);
    }

    return (
        <li className="products__card card" onClick={() => detail()}>
            <div className="card">
                <img className="card__img" src={image} alt="" />
                <p className="card__description">
                    {name}
                </p>
                <p className="card__price">
                    R$ {price}
                </p>
            </div>
        </li>
    );
}

function ProductsPage() {
    const [products, setProducts] = useState<P[]>([]);
    const [filters, setFilters] = useState<F[]>([]);

    const { filter, priceOrder, nameOrder } = useContext(FilterContext);
    const { addRequest, removeRequest } = useContext(LoadingContext);
    const { setMessage } = useContext(MessageContext);

    useEffect(() => loadProducts(), []); // eslint-disable-line

    function loadProducts() {
        addRequest();
        ProductsService.get()
            .then((r: any) => {
                setProducts(r.products);
                setFilters(r.filters);
            })
            .catch(() => setMessage("Ocorreu um erro ao carregar os produtos..."))
            .finally(() => removeRequest());
    }

    function orderByName(a:any, b:any) {
        if (nameOrder === 'down') {
            return a.props.name < b.props.name 
                ? -1 
                : (a.props.name > b.props.name ? 1 : 0);
        }
        return a.props.name < b.props.name 
            ? 1 
            : (a.props.name > b.props.name ? -1 : 0);
    }

    function orderByPrice(a:any, b:any) {
        if (priceOrder === 'down') {
            return Number(a.props.price.replace(/,/g, '.')) - Number(b.props.price.replace(/,/g, '.'));
        }
        return Number(b.props.price.replace(/,/g, '.')) - Number(a.props.price.replace(/,/g, '.'));
    }

    return (
        <>
            <Breadcrumbs />
            <Filters filters={filters}></Filters>
            <section className="main__products products">
                <div className="products__row">
                    <ol className="products__list">
                        {!nameOrder && !priceOrder && products
                            .filter(p =>
                                filter ? p.name.toUpperCase().indexOf(filter.toUpperCase()) !== -1 : true)
                            .map(
                                p =>
                                    <Product key={p.sku} sku={p.sku} image={p.image} name={p.name} price={p.price} />
                            )
                        }

                        {nameOrder && products
                            .filter(p =>
                                filter ? p.name.toUpperCase().indexOf(filter.toUpperCase()) !== -1 : true)
                            .map(
                                p =>
                                    <Product key={p.sku} sku={p.sku} image={p.image} name={p.name} price={p.price} />
                            ).sort(orderByName)
                        }

                        {priceOrder && products
                            .filter(p =>
                                filter ? p.name.toUpperCase().indexOf(filter.toUpperCase()) !== -1 : true)
                            .map(
                                p =>
                                    <Product key={p.sku} sku={p.sku} image={p.image} name={p.name} price={p.price} />
                            ).sort(orderByPrice)
                        }
                    </ol>
                </div>
                <div className="products__row">
                    <ol className="products__list">
                    </ol>
                </div>
            </section>
        </>

    );
}

export default ProductsPage;