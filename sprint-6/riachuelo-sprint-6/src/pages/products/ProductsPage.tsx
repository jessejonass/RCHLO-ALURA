import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import FilterContext from "../../contexts/FilterContext";
import LoadingContext from "../../contexts/LoadingContext";
import MessageContext from "../../contexts/MessageContext";
import ProductsSortContext from "../../contexts/ProductsSortContext";
import IFilter from "../../models/IFilter";
import IProduct from "../../models/IProduct";
import binarySearch from "../../services/BinarySearch";
import mergeSort from "../../services/MergeSort";
import ProductsService from "../../services/ProductsService";
import Breadcrumbs from "./components/Breadcrumbs";
import Filters from "./components/Filters";

function Product({ sku, image, name, price }: { sku: number, image: string, name: string, price: string }) {
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
    const [products, setProducts] = useState<IProduct[]>([]);
    const [filters, setFilters] = useState<IFilter[]>([]);

    const { filter } = useContext(FilterContext);
    const { addRequest, removeRequest } = useContext(LoadingContext);
    const { setMessage } = useContext(MessageContext);

    const { productsSort } = useContext(ProductsSortContext);

    // eslint-disable-next-line
    useEffect(() => loadProducts(), []);

    function loadProducts() {
        addRequest();
        ProductsService.get()
            .then(r => {
                setProducts(r.products);
                setFilters(r.filters);
            })
            .catch(() => setMessage("Ocorreu um erro ao carregar os produtos..."))
            .finally(() => removeRequest());
    }

    function getProducts(): IProduct[] {
        if (!filter) {
            return mergeSort<IProduct>(products,
                (p1, p2) => {
                    let ord = productsSort.ord === 'asc' ? 1 : -1;
                    if (productsSort.prop === 'name') {
                        return p1.name.localeCompare(p2.name) * ord;
                    } else {
                        return (parseFloat(p1.price.replace(',', '.')) - parseFloat(p2.price.replace(',', '.'))) * ord
                    }
                }
            );

            // return products
            //     .sort((p1, p2) => {
            //         let ord = productsSort.ord === 'asc' ? 1 : -1;
            //         if (productsSort.prop === 'name') {
            //             return p1.name.localeCompare(p2.name) * ord;
            //         } else {
            //             return (parseFloat(p1.price.replace(',', '.')) - parseFloat(p2.price.replace(',', '.'))) * ord
            //         }
            //     })
        } else {
            // const p = products.find(p => p.name.toUpperCase().indexOf(filter.toUpperCase()) !== -1);

            const p = binarySearch<IProduct>(
                mergeSort(products, (p1, p2) => p1.name.localeCompare(p2.name)),
                pr => pr.name.substring(0, filter.length).toUpperCase().localeCompare(filter.toUpperCase())
            )

            if (p) {
                return [p];
            } else {
                return [];
            }
        }
    }

    return (
        <>
            <Breadcrumbs></Breadcrumbs>
            <Filters filters={filters}></Filters>
            <section className="main__products products">
                <div className="products__row">
                    <ol className="products__list">
                        {
                            getProducts()
                                .map(
                                    p =>
                                        <Product key={p.sku} sku={p.sku} image={p.image} name={p.name} price={p.price} />
                                )
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