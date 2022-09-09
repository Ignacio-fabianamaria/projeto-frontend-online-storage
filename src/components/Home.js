import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();

    this.trocarInput = this.trocarInput.bind(this);
    this.botaoParaLocalizar = this.botaoParaLocalizar.bind(this);

    state = {
      busca: '',
      data: [],
      infoFrase: true,
      mensagem: '',
      name: '',
      nomeProduto: '',
      produtoImagem: '',
      precoProduto: 0,
      arrayLista: [],
    };
  }

  async componentDidMount() {
    this.functionGetCategories();
  }

  functionGetCategories = async () => {
    const response = await getCategories();
    console.log(response);
    this.setState({ data: response });
  };

  trocarInput(evento) {
    this.setState({ name: evento.target.value }, () => {
    });
  }

  async botaoParaLocalizar() {
    const { name } = this.state;
    this.setState({ name: '' });
    const resultado = await getProductsFromCategoryAndQuery(name);
    this.setState = {
      nomeProduto: name,
      arrayLista: resultado,
    };
  }

  render() {
    const { data, name, arrayLista } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="search-input" data-testid="query-input">
            Favorita
            <input
              type="text"
              id="search-input"
              value={ name }
              onChange={ this.trocarInput }
            />
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
          {arrayLista.map((element) => (
            <div key={ element.id }>
              <label
                htmlFor={ element.id }
                data-testid="category"
              >
                <input
                  type="checkbox"
                  name={ element.title }
                  id={ element.id }
                />

              </label>
              <p>
                {element.title}
              </p>
              <image src={ element.thumbnail } />

            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Home;
