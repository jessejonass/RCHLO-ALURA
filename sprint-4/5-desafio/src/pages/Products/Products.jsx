import { useContext, useEffect, useState } from "react";

import FilterContext from "../../contexts/FilterContext";
import LoadingContext from "../../contexts/LoadingContext";
import MessageContext from "../../contexts/MessageContext";
import ProductsService from "../../services/ProductsService";

import Breadcrumbs from "./components/Breadcrumb/Breadcrumbs";
import Filters from "./components/Filters";
import Product from "./components/Product";

function Products() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState([]);

  const { filter } = useContext(FilterContext);
  const { addRequest, removeRequest } = useContext(LoadingContext);
  const { setMessage } = useContext(MessageContext);

  useEffect(() => {
    loadProducts();
    loadFilters();
  }, []); // eslint-disable-line

  function loadProducts() {
    addRequest();
    ProductsService.get()
      .then(r => {
        setProducts(r);
      })
      .catch(() => setMessage("Ocorreu um erro ao carregar os produtos..."))
      .finally(() => removeRequest());
  }

  async function loadFilters() {
    await fetch("http://localhost:3333/filters")
      .then(r => r.json())
      .then(d => setFilters(d));
  }

  return (
    <main className="main">
      <Breadcrumbs />
      <Filters filters={filters} />

      <section className="main__products products">
        <div className="products__row">
          <ol className="products__list">
            {products
              .filter(p =>
                filter
                  ? p.name.toUpperCase().indexOf(filter.toUpperCase()) !== -1
                  : true,
              )
              .map(p => (
                <Product
                  key={p.sku}
                  image={p.image}
                  name={p.name}
                  price={p.price}
                  to={p.sku}
                />
              ))}
          </ol>
        </div>

        <div className="products__row">
          <ol className="products__list" />
        </div>
      </section>
    </main>
  );
}

export default Products;
