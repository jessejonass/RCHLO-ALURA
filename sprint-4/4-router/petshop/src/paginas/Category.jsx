import React, { useState, useEffect } from 'react';
import { useParams, Route, useRouteMatch } from 'react-router-dom';
import { busca } from '../api/api';

import Categories from '../components/Categories';
import PostList from '../components/PostList';

import '../assets/css/blog.css'

export default function Category() {
  const [bola, setBola] = useState([]);

  const { id } = useParams();
  const { path } = useRouteMatch();

  useEffect(() => {
    busca('', setBola);
  }, []);

  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
      </div>

      <Categories />

      <Route exact path={`${path}/`}>
        <PostList url={`posts?categoria=${id}`} />
      </Route>
    </>
  );
};
