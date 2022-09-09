import React from 'react';
import { getCategories } from '../services/api';

class Home extends React.Component {
  state = {
    data: [],
    // name: '',
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
            <label
              htmlFor={ element.id }
              key={ element.id }
              data-testid="category"
            >
              <input
                type="radio"
                name={ element.name }
                id={ element.id }
              />
              { element.name }
            </label>
          ))}
        </div>
      </div>
    );
  }
}
export default Home;
