import React from 'react';
import CartItem from '../components/CartItem';

class Carrinho extends React.Component {
  constructor() {
    super();
    this.state = {
      cartArea: [],
    };
  }

  componentDidMount() {
    const getLocal = this.getItemLocalStorage();
    this.setState({ cartArea: getLocal });
  }

  getItemLocalStorage = () => {
    const getProduct = localStorage.getItem('arrayCartItens');
    return JSON.parse(getProduct);//  usando o método JSON.parse para analisar a string  salva no localstorage e retornar os dados como objeto.
  };

  render() {
    const { cartArea } = this.state;
    return (
      <div>

        <div>
          { (cartArea)
            ? cartArea.map((e) => (
              <CartItem key={ e.id } e={ e } />
            ))
            : <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>}
        </div>
      </div>
    );
  }
}
export default Carrinho;
