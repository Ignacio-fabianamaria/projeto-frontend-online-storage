import React from 'react';

class Carrinho extends React.Component {
  render() {
    return (
      <div>
        <h2 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h2>
      </div>
    );
  }
}
export default Carrinho;
