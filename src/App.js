import React, { Component } from 'react';

class App extends Component {
  getArticles () {
    fetch("http://localhost:3000/api/v1/articles")
    .then(res => res.json())
    .then(console.log)
  }
  render() {
    return (
      <div className="App">
        hi there
        {this.getArticles()}
      </div>
    );
  }
}

export default App;
