import React from 'react';
import './App.css';

import Header from './components/Header';
import Breadcrumbs from './components/Breadcrumbs';
import Filters from './components/Filters';
import Products from './components/Products';
import Footer from './components/Footer';

import AppProvider from './hooks';

function App() {
  return (
    <AppProvider>
      <Header />

      <div className="main">
        <Breadcrumbs />
        <Filters />
        <Products />
      </div>

      <Footer />
    </AppProvider>
  );
}

export default App;
