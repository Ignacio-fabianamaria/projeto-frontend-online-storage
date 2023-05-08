import React from 'react';
import PropTypes from 'prop-types';
import '../styles/cartitem.css';

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
      <div className="cart-item">
        <div className="cart-icon">🛒</div>
        <p
          className="cart-item-title"
          data-testid="shopping-cart-product-name"
        >
          { e.title }

        </p>
        <img className="cart-item-img" src={ e.thumbnail } alt={ e.title } />
        <p className="cart-item-price">{ e.price }</p>
        <p
          className="cart-item-quantity"
          data-testid="shopping-cart-product-quantity"
        >
          {quantity}

        </p>
        <button
          onClick={ this.handleIncreaseDecrease }
          type="button"
          id="addItem"
          className="cart-item-increase"
          data-testid="product-increase-quantity"
        >
          ➕
        </button>
        <button
          onClick={ this.handleIncreaseDecrease }
          type="button"
          id="decreaseItem"
          className="cart-item-decrease"
          data-testid="product-decrease-quantity"
        >
          ➖
        </button>
        <button
          onClick={ onClick }
          type="button"
          className="cart-item-remove"
          data-testid="remove-product"
        >
          ❌
        </button>
      </div>
    );
  }
}

CartItem.propTypes = {
  e: PropTypes.string,
}.isRequired;

export default CartItem;
