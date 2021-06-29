import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { busca } from '../api/api';

export default function PostList({ url }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    busca(url, setPosts); // :/ :/ :/
  }, [url]);

  return (
    <section className="posts container">
      {posts.map(p => (
        <Link 
          className={`cartao-post cartao-post--${p.categoria}`} 
          to={`posts/${p.id}`}>
            <article key={p.id}>
              <h3 className="cartao-post__titulo">{p.title}</h3>

              <p className="cartao-post__meta">
                {p.metadescription}
              </p>
            </article>
        </Link>
      ))}
    </section>
  );
};
