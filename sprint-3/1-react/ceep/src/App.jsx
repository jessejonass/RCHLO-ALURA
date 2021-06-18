import React from 'react';
import ListaDeNotas from './components/ListaDeNotas';

function App() {
  return (
    <>
    <form>
      <input type="text" placeholder="Título" />
      <textarea placeholder="Insira sua nota"></textarea>
      <button>Criar nota</button>
    </form>
    
    <ListaDeNotas />
    </>
  );
}

export default App;
