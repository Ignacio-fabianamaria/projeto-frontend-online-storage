import React from 'react';
import { Redirect } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="search-input">
          Favorita
          <input
            type="text"
            id="search-input"
          />
        </label>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <div>
          <button
            type="button"
            data-testid="shopping-cart-button"
            onChange={ <Redirect to="/carrinho" /> }
          >
            Carrinho
          </button>
        </div>
      </div>
    );
  }
}
export default Home;
