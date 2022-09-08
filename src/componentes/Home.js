import React from 'react';

class Home extends React.Component {
  render() {
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
      </div>
    );
  }
}
export default Home;
