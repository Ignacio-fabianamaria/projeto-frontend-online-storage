import React from 'react';
import { getCategories } from '../services/api';

class Home extends React.Component {
  state = {
    data: [],
    // name: '',
  };

  async componentDidMount() {
    await this.functionGetCategories();
  }

  functionGetCategories = async () => {
    const teste = await getCategories();
    this.setState({
      data: teste,
    });
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <label htmlFor="search-input">
          <input
            type="text"
            id="search-input"

          />
        </label>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <div>
          {data.map((element) => (
            <div
              key={ element.id }
              name={ element.name }
            >
              <input
                type="radio"
                name={ element.name }
                id={ element.id }
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Home;
