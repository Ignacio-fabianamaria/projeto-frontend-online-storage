import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Detalhes from './components/Detalhes';
import Carrinho from './components/Carrinho';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
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
          <Route
            exact
            path="/detalhes/:id"
            component={ Detalhes }
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
