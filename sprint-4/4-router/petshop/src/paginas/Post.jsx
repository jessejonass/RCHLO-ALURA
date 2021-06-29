import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { busca } from '../api/api';
import '../assets/css/post.css';

export default function Post() {
  const [post, setPost] = useState({});

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    busca(`posts/${id}`, setPost)
    .catch(() => {
      history.push('/404');
    });
  }, [id, history]);

  return (
    <main className="container flex flex--centro">
      <article className="cartao post">
        <h2 className="cartao__titulo">
          {post.title}
        </h2>

        <p className="cartao__texto">
          {post.body}
        </p>
      </article>
    </main>
  );
};
