import React from 'react';
import CartItem from '../components/CartItem';

class Carrinho extends React.Component {
  // constructor() {
  //   super();
  state = {
    cartArea: [],
  };
  // }

  componentDidMount() {
    const getLocal = this.getItemLocalStorage();
    this.setState({ cartArea: getLocal });
  }

  handleDeletItem = (id) => {
    const deletItem = JSON.parse(localStorage.getItem('arrayCartItens'));
    // console.log(deletItem);
    const newCart = deletItem.filter((e) => e.id !== id);
    localStorage.setItem('arrayCartItens', JSON.stringify(newCart));
    const getLocal = this.getItemLocalStorage();
    this.setState({ cartArea: getLocal });
    // this.setState({ cartArea: localStorage.getItem('arrayCartItens') });
  };

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
              <CartItem
                key={ e.id }
                e={ e }
                onClick={ () => this.handleDeletItem(e.id) }
              />
            ))
            : <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>}
        </div>
      </div>
    );
  }
}
export default Carrinho;
