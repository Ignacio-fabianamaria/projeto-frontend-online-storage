import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';
// import Home from './Home';

class Detalhes extends React.Component {
  constructor() {
    super();

    this.state = {
      arrayProdutos: [],
    };
  }

  async componentDidMount() {
    this.ShowProductDetail();
  }

  ShowProductDetail = async () => {
    const { match } = this.props;
    const { id } = match.params;
    const response = await getProductById(id);
    this.setState({ arrayProdutos: response });
  };

  handleDetailAddCart = (item) => {
    const { arrayProdutos } = this.state;
    // const { title, thumbnail, price} = arrayProdutos;
    const toCartArray = [...arrayProdutos, item];
    this.addLocalStorage(toCartArray);
    this.setState({ arrayProdutos: toCartArray });
  };

  addLocalStorage = (item) => {
    const itemToAddCart = JSON.stringify(item);
    localStorage.setItem('arrayProdutos', itemToAddCart);
    // Inserindo método setItem para salvar dados no localstorage.Os dados ficarão salvos na chave (arrayCartItens)
  };

  render() {
    const { arrayProdutos } = this.state;
    const { title, thumbnail, price } = arrayProdutos;

    return (
      <div>
        <Link
          data-testid="shopping-cart-button"
          to="/carrinho"
        >
          Carrinho
        </Link>
        <div>
          <h1 data-testid="product-detail-name">{ title }</h1>
          <img src={ thumbnail } alt={ title } data-testid="product-detail-image" />
          <p data-testid="product-detail-price">{ price }</p>
          <button
            onClick={ this.handleDetailAddCart }
            type="button"
            data-testid="product-detail-add-to-cart"
          >
            Adicionar ao carrinho
          </button>
        </div>

      </div>
    );
  }
}

Detalhes.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string })
      .isRequired }).isRequired,
};

export default Detalhes;
