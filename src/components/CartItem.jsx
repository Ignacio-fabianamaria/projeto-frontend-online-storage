import React from 'react';
import PropTypes from 'prop-types';

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
  }

  handleIncreaseDecrease = ({ target }) => {
    if (target.id === 'addItem') {
      this.setState((prevstate) => ({ quantity: prevstate.quantity + 1 }));
    } else {
      this.setState((prevstate) => ({ quantity: prevstate.quantity - 1 }));
    }
  };

  handleDeletItem = (id) => {
    const deletItem = JSON.parse(localStorage.getItem('arrayCartItens'));
    const newCart = deletItem.filter((e) => e.id !== id);
    console.log(newCart);
    localStorage.setItem('arrayCartItens', JSON.stringify(newCart));
  };

  render() {
    const { quantity } = this.state;
    const { e } = this.props;
    return (
      <div>
        <p data-testid="shopping-cart-product-name">{ e.title }</p>
        <img src={ e.thumbnail } alt={ e.title } />
        <p>{ e.price }</p>
        <p data-testid="shopping-cart-product-quantity">{quantity}</p>
        <button
          onClick={ this.handleIncreaseDecrease }
          type="button"
          id="addItem"
          data-testid="product-increase-quantity"
        >
          +
        </button>
        <button
          onClick={ this.handleIncreaseDecrease }
          type="button"
          id="decreaseItem"
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <button
          onClick={ () => this.handleDeletItem(e.id) }
          type="button"
          data-testid="remove-product"
        >
          x
        </button>
      </div>
    );
  }
}

CartItem.propTypes = {
  e: PropTypes.string,
}.isRequired;

export default CartItem;
