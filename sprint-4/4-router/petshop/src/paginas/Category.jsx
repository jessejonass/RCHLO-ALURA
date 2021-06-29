import React, { useState, useEffect } from 'react';
import { useParams, Route, useRouteMatch, Link, Switch } from 'react-router-dom';

import { busca } from '../api/api';

import Categories from '../components/Categories';
import PostList from '../components/PostList';
import SubCategory from './SubCategory';

import '../assets/css/blog.css'

export default function Category() {
  const [subcategories, setSubcategories] = useState([]);

  const { id } = useParams();
  const { url, path } = useRouteMatch();

  useEffect(() => {
    busca(`/categorias/${id}`, (categoria) => {
      setSubcategories(categoria.subcategorias);
    });
  }, [id]);

  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
      </div>

      <Categories />

      <ul className="lista-categorias container flex">
        {subcategories.map(s => (
          <li 
            key={s}
            className={`
              lista-categorias__categoria 
              lista-categorias__categoria--${id}
            `}
          >
            <Link to={`${url}/${s}`}>
              {s}
            </Link>
          </li>
        ))}
      </ul>

      <Switch>
        <Route exact path={`${path}/`}>
          <PostList url={`posts?categoria=${id}`} />
        </Route>
        
        <Route path={`${path}/:subcategoria`}>
          <SubCategory />
        </Route>
      </Switch>
    </>
  );
};
