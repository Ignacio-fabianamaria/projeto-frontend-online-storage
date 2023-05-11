import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';
import '../styles/detalhes.css';

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

  handleAddCartItens = (item) => { // função para adicionar produto ao carrinho
    console.log('item clicado');
    const teste = JSON.parse(localStorage.getItem('arrayCartItens')) || [];

    const novoArray = [...teste, item];
    this.addLocalStorage(novoArray);
  };

  addLocalStorage = (item) => {
    const itemToAddCart = JSON.stringify(item);
    localStorage.setItem('arrayCartItens', itemToAddCart);
    // Inserindo método setItem para salvar dados no localstorage.Os dados ficarão salvos na chave (arrayCartItens)
  };

  render() {
    const { arrayProdutos } = this.state;
    const { title, thumbnail, price } = arrayProdutos;

    return (
      <div>
        <nav>
          <h1 className="title"> 🛍️ Shopping online</h1>
          <div className="links-nav">
            <Link to="/" className="link-home">
              <i className="fa fa-home home-icon" />
              Home
            </Link>
            <Link
              className="link-cart"
              data-testid="shopping-cart-button"
              to="/carrinho"
            >
              <i className="fa fa-shopping-cart cart-icon" />
              Carrinho
            </Link>
          </div>
        </nav>
        <div className="detalhes">

          <div className="detalhes-produtos">
            <h1 data-testid="product-detail-name">{ title }</h1>
            <img src={ thumbnail } alt={ title } data-testid="product-detail-image" />
            <p data-testid="product-detail-price">
              R$:
              {' '}
              { price }
            </p>
            <button
              onClick={ () => this.handleAddCartItens(arrayProdutos) }
              type="button"
              data-testid="product-detail-add-to-cart"
            >
              Adicionar ao carrinho
            </button>
          </div>
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
