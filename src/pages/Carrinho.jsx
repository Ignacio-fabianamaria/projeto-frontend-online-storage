import React from 'react';

class Carrinho extends React.Component {
  constructor() {
    super();
    this.state = {
      cartArea: [],
      quantity: 1,
    };
  }

  componentDidMount() {
    const getLocal = this.getItemLocalStorage();
    // console.log(cartArea, 'oi');
    this.setState({ cartArea: getLocal });
  }

  handleIncreaseDecrease = ({ target }) => {
    if (target.id === 'addItem') {
      this.setState((prevstate) => ({ quantity: prevstate.quantity + 1 }));
    } else {
      this.setState((prevstate) => ({ quantity: prevstate.quantity - 1 }));
    }
  };

  handleDeletItem = ({ target }) => {
    const deletItem = JSON.parse(localStorage.getItem('arrayCartItens'));
    const newCart = deletItem.some((e) => e.title !== target.id);
    localStorage.setItem('arrayCartItens', JSON.stringify(newCart));
    this.setState({ cartArea: newCart });
  };

  getItemLocalStorage = () => {
    const getProduct = localStorage.getItem('arrayCartItens');
    return JSON.parse(getProduct);//  usando o método JSON.parse para analisar a string  salva no localstorage e retornar os dados como objeto.
  };

  render() {
    const { cartArea, quantity } = this.state;
    return (
      <div>
        <div>
          { (cartArea)
            ? cartArea.map((e) => (
              <div key={ e.id }>
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
                  onClick={ this.handleDeletItem }
                  type="button"
                  data-testid="remove-product"
                >
                  x
                </button>
              </div>
            ))
            : <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>}
        </div>
      </div>
    );
  }
}
export default Carrinho;
