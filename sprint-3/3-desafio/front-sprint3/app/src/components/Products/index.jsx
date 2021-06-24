import React from 'react';

import './styles.css';
import ProductItem from './ProductItem';

import { useLoading } from '../../hooks/useLoading';
import { useFilter } from '../../hooks/useFilter';

import spinner from '../../assets/spinner.svg';

export default function Products() {
  const { isLoading } = useLoading();
  const { products, filtered } = useFilter();

  return (
    <>
      {isLoading ? (
        <div className="main__spinner">
          <img className="main__spinner-icon" src={spinner} alt="Spinner" />
        </div>
      ) : (
        <section className="main__products products">
          <div className="products__row">
            <ol className="products__list">
              {filtered.length > 0 ? (
                filtered.map(p => (
                  <ProductItem 
                    key={p.sku} 
                    image={p.image} 
                    price={p.price} 
                    name={p.name}
                  />
                ))
              ) : (
                <>
                  {products.length > 0 && products.map(p => (
                    <ProductItem 
                      key={p.sku} 
                      image={p.image} 
                      price={p.price} 
                      name={p.name}
                    />
                  ))}
                </>
              )}
            </ol>
          </div>
        </section>
      )}
    </>
  );
};
