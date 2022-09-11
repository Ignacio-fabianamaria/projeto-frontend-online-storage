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

  render() {
    const { arrayProdutos } = this.state;
    const { title, thumbnail, price } = arrayProdutos;

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
          <h4 data-testid="product-detail-name">{ title }</h4>
          <img src={ thumbnail } alt={ title } data-testid="product-detail-image" />
          <p data-testid="product-detail-price">{ price }</p>
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
