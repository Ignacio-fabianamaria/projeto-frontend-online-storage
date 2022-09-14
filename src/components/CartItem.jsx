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
    const { quantity } = this.state;
    if (target.id === 'addItem') {
      this.setState((prevstate) => ({ quantity: prevstate.quantity + 1 }));
    } else if (quantity > 1) {
      this.setState((prevstate) => ({ quantity: prevstate.quantity - 1 }));
    }
  };

  render() {
    const { quantity } = this.state;
    const { e, onClick } = this.props;
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
          onClick={ onClick }
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
