import React, { Component } from 'react';
import ArticleList from './ArticleList.js'
import ArticleForm from './ArticleForm.js'

export default class ArticleContainer extends Component {
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
        <ArticleForm />
        <br />
        <ArticleList
          articles={this.state.articles}/>
      </div>
    );
  }
}
