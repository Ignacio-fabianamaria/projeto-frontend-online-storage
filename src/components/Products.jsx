import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Products extends React.Component {
  handleAddCartItens = (item) => {
    const teste = JSON.parse(localStorage.getItem('arrayCartItens')) || [];
    const novoArray = [...teste, item];
    this.addLocalStorage(novoArray);
  };

  addLocalStorage = (item) => {
    const itemToAddCart = JSON.stringify(item);
    localStorage.setItem('arrayCartItens', itemToAddCart);
  };

  render() {
    const { products } = this.props;
    return (
      <div className="product-list">
        { (products)
          ? products.map((element) => (
            <div className="card-product" key={ element.id } data-testid="product">
              <img
                data-testid="product-detail-image"
                src={ element.thumbnail }
                alt={ element.title }
              />
              <Link
                to={ `/detalhes/${element.id} ` }
                data-testid="product-detail-link"
              >
                <p data-testid="product-detail-name">{ element.title }</p>
              </Link>
              <p data-testid="product-detail-price">{ `R$: ${element.price}` }</p>
              <button
                onClick={ () => this.handleAddCartItens(element) }
                type="button"
                data-testid="product-add-to-cart"
              >
                <i className="fa fa-shopping-cart" />
              </button>
            </div>
          ))
          : <p>Nenhum produto foi encontrado</p>}
      </div>
    );
  }
}

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Products;
