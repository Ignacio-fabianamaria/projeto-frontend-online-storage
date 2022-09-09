import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';

class Home extends React.Component {
  state = {
    data: [],
    // name: '',
    // price:'',
  };

  async componentDidMount() {
    this.functionGetCategories();
  }

  functionGetCategories = async () => {
    const response = await getCategories();
    console.log(response);
    this.setState({ data: response });
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="search-input" data-testid="query-input">
            Favorita
            <input
              type="text"
              id="search-input"
            />
          </label>
          <div htmlFor="query-button">
            <button
              type="submit"
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
      </div>
    );
  }
}
export default Home;
