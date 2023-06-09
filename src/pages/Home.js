import React from 'react';
import { Link } from 'react-router-dom';
import Products from '../components/Products';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import '../styles/home.css';

class Home extends React.Component {
  constructor() {
    super();
    this.trocarInput = this.trocarInput.bind(this);
    this.botaoParaLocalizar = this.botaoParaLocalizar.bind(this);
    this.state = {
      data: [],
      name: '',
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

  /*   handleAddCartItens = (item) => { // função para adicionar produto ao carrinho
    console.log('item clicado');
    // const { arrayCartItens } = this.state;
    const teste = JSON.parse(localStorage.getItem('arrayCartItens')) || [];
    // console.log(teste);
    const novoArray = [...teste, item];
    this.addLocalStorage(novoArray);
    // this.setState({ arrayCartItens: novoArray });
  }; */

  /*  addLocalStorage = (item) => {
    const itemToAddCart = JSON.stringify(item);
    localStorage.setItem('arrayCartItens', itemToAddCart);
    // Inserindo método setItem para salvar dados no localstorage.Os dados ficarão salvos na chave (arrayCartItens)
  }; */

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
      <div className="home">
        <div className="home-super">
          <form className="form-search">
            <h1 className="title"> 🛍️ Shopping online</h1>
            <label htmlFor="search-input">
              <input
                type="search"
                id="search-input"
                data-testid="query-input"
                value={ name }
                onChange={ this.trocarInput }
              />
              {/* {console.log('input')} */}
            </label>

            <button
              className="button-search"
              onClick={ this.botaoParaLocalizar }
              type="button"
              data-testid="query-button"
            >
              <i className="fa fa-search search-icon" />
            </button>
            <Link to="/carrinho">
              <button
                className="button-cart"
                type="button"
                data-testid="shopping-cart-button"
              >
                🛒
              </button>
            </Link>
            {data.name}

          </form>
          <h2 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h2>
          <div className="categories">
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
        </div>
        <Products products={ arrayLista } />
      </div>
    );
  }
}
export default Home;
