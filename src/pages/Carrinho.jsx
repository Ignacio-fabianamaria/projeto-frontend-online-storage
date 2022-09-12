import React from 'react';

class Carrinho extends React.Component {
  constructor() {
    super();

    this.state = {
      cartArea: [],
    };
  }

  componentDidMount() {
    const cartAreas = this.getItemLocalStorage();
    console.log(cartArea, 'oi');
    this.setState({ cartArea: cartAreas });
  }

  getItemLocalStorage = () => {
    const getProduct = localStorage.getItem('arrayCartItens');
    return JSON.parse(getProduct);
    // / usando o método JSON.parse para analisar a string  salva no localstorage e retornar os dados como objeto.
  };

  render() {
    const { cartArea } = this.state;

    return (
      <div>
        <h2 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h2>

        <div>
          { cartArea.map((e) => (
            <div key={ e.id }>
              <p data-testid="shopping-cart-product-name">{ e.title }</p>
              <img src={ element.thumbnail } alt={ element.title } />
              <p>{ e.price }</p>
              <p data-testid="shopping-cart-product-quantity">quantity</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Carrinho;
