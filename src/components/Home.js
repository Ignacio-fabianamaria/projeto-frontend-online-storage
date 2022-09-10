import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.trocarInput = this.trocarInput.bind(this);
    this.botaoParaLocalizar = this.botaoParaLocalizar.bind(this);
    this.state = {
      // busca: '',
      data: [],
      name: '',
      // nomeProduto: '',
      // produtoImagem: '',
      // precoProduto: 0,
      arrayLista: [],

    };
  }

  async componentDidMount() {
    this.functionGetCategories();
  }

  functionGetCategories = async () => {
    const response = await getCategories();
    this.setState({ data: response });
  };

  ShowProductCategory = async ({ target }) => { // função para exibir os produtos ao selecionar o input de categoria
    const { id } = target;
    const { name } = this.state;
    const retProductCategory = await getProductsFromCategoryAndQuery(id, name);
    this.setState({ arrayLista: retProductCategory.results });
  };

  async botaoParaLocalizar() {
    const { name } = this.state;
    const resultado = await getProductsFromCategoryAndQuery('', name);
    console.log(resultado);
    if (name.length < 1) {
      this.setState({
        arrayLista: false,
      });
    } else {
      this.setState({
        arrayLista: resultado.results,
      });
    }
  }

  trocarInput(evento) {
    console.log(evento.target.value);
    this.setState({ name: evento.target.value }, () => {
    });
  }

  render() {
    const { data, name, arrayLista } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="search-input">
            Favorita
            <input
              type="search"
              id="search-input"
              data-testid="query-input"
              value={ name }
              onChange={ this.trocarInput }
            />
            {/* {console.log('input')} */}
          </label>
          <div htmlFor="query-button">
            <button
              onClick={ this.botaoParaLocalizar }
              type="button"
              data-testid="query-button"
            >
              Search
            </button>
            {data.name}
          </div>
        </form>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <div>
          <Link
            data-testid="shopping-cart-button"
            to="/carrinho"
          >
            Carrinho
          </Link>
        </div>
        <div>
          {data.map((element) => (
            <label
              htmlFor={ element.id }
              key={ element.id }
              data-testid="category"
            >
              <input
                type="checkbox"
                name={ element.name }
                id={ element.id }
                onClick={ this.ShowProductCategory }
              />
              {element.name}
            </label>
          ))}
        </div>
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
export default Home;
