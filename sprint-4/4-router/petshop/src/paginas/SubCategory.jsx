import React from 'react';
import { useParams } from 'react-router-dom';

import PostList from '../components/PostList';

export default function SubCategory() {
  const { subcategoria } = useParams();
  
  return (
    <PostList url={`posts?subcategoria=${subcategoria}`} />
  );
};
