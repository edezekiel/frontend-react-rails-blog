import React, { Component } from 'react';
import ArticleList from './ArticleList.js'
import Textarea from './textarea.js'

class App extends Component {
  state = {
    articles: [],
    currentArticleId: null
  }

  componentDidMount() {
      fetch("http://localhost:3000/api/v1/articles")
      .then(res => res.json())
      .then(json => this.setState({articles: json}))
  }

  render() {
    return (
      <div className="App">
        <Textarea />
        <br />
        <ArticleList
          articles={this.state.articles}/>
      </div>
    );
  }
}

export default App;
