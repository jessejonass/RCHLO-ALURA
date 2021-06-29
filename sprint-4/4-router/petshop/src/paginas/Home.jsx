import React from 'react';

import PostList from '../components/PostList';
import Categories from '../components/Categories';

const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
      </div>
      
      <Categories />
      <PostList url={'/posts'} />
    </main>
  )
}

export default Home;
