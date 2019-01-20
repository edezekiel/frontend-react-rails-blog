import React, { Component } from 'react';
import ArticleList from './ArticleList.js'
import ArticleForm from './ArticleForm.js'
import NavBar from '../presentational/NavBar.js'

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
      <div>
        <NavBar />
        <ArticleForm />
        <br />
        <ArticleList
          articles={this.state.articles}/>
      </div>
    );
  }
}
