import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './assets/css/base/base.css';

import Home from './paginas/Home';
import Sobre from './paginas/Sobre';
import Category from './paginas/Category';
import Post from './paginas/Post';
import NotFound from './paginas/NotFound';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/categoria/:id" component={Category} />
        <Route path="/posts/:id" component={Post} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
