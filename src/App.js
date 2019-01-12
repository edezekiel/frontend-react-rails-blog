import React, { Component } from 'react';
import Textarea from './textarea.js'

class App extends Component {
  getArticles () {
    fetch("http://localhost:3000/api/v1/articles")
    .then(res => res.json())
    .then(console.log)
  }
  render() {
    return (
      <div className="App">
        {this.getArticles()}
        <Textarea />
      </div>
    );
  }
}

export default App;
