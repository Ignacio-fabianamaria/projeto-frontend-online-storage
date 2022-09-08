import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="search-input">
          Favorita
          <input
            type="text"
            id="search-input"
            data-testid="home-initial-message"
          />
        </label>
        <h2>Digite algum termo de pesquisa ou escolha uma categoria.</h2>
      </div>
    );
  }
}
export default Home;
