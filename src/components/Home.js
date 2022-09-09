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
     infoFrase: true,
     mensagem: '',
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
    console.log(response);
    this.setState({ data: response });
  };

  trocarInput(evento) {
    console.log(evento.target.value);
    this.setState({ name: evento.target.value }, () => {
    });
  }

  async botaoParaLocalizar() {
    const { name } = this.state;
    const resultado = await getProductsFromCategoryAndQuery(name);
    console.log(resultado);
    this.setState({
      name: '',
      nomeProduto: name,
      arrayLista: resultado.results,
      infoFrase: false,
      mensagem: 'Nenhum produto foi encontrado',
    });
  }

  render() {
    const { data, name, arrayLista, nomeProduto, infoFrase, mensagem } = this.state;
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
              />
              {element.name}
            </label>
          ))}
        </div>
        <div>
          <h3>{`Exibindo os resultados da Pesquisa por: ${nomeProduto}`}</h3>
          { infoFrase && mensagem }
          { (arrayLista.length > 0)
            ? arrayLista.map((element) => ( // produtos
              <div key={ element.id } data-testid="product">
                <p>{ element.title }</p>
                <img src={ element.thumbnail } alt={ element.title } />
                <p>{ `R$: ${element.price}` }</p>
              </div>
            ))
            : <p>Nenhum produto foi encontrado</p>}
        </div>
      </div>
    );
  }
}
export default Home;
