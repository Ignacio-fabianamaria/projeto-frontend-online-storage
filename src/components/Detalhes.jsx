import React from 'react';
import { Link } from 'react-router-dom';
// import Home from './Home';

class Detalhes extends React.Component {
  constructor() {
    super();
    this.state = {
      arrayLista: [],
    };
  }

  render() {
    const { arrayLista } = this.state;
    return (
      <div>
        <h1>xablau?</h1>
        <Link
          data-testid="shopping-cart-button"
          to="/carrinho"
        >
          Carrinhossss
        </Link>
        <div>
          { (arrayLista)
            ? arrayLista.map((element) => ( // produtos
              <div key={ element.id } data-testid="product">
                <Link
                  to={ `/detalhes/${element.title} ` }
                >
                  <p data-testid="product-detail-name">{ element.title }</p>
                </Link>
                <img
                  data-testid="product-detail-image"
                  src={ element.thumbnail }
                  alt={ element.title }
                />
                <p data-testid="product-detail-price">{ `R$: ${element.price}` }</p>
              </div>
            ))
            : <p>Nenhum produto foi encontrado</p>}
        </div>

      </div>
    );
  }
}
export default Detalhes;
