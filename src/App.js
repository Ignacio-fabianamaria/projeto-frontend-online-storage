import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Carrinho from './pages/Carrinho';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route
          exact
          path="/"
          component={ Home }
        />
        <Route
          exact
          path="/carrinho"
          component={ Carrinho }
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
