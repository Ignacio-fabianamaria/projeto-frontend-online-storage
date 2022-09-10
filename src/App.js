import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Detalhes from './components/Detalhes';
import Carrinho from './pages/Carrinho';

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
            path="/detalhes/:title"
            component={ Detalhes }
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
