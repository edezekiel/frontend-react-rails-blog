import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react'

import ArticleForm from './ArticleForm.js'
import ArticleList from './ArticleList.js'
import Article from '../presentational/Article.js'
const URL = "http://localhost:3000/api/v1/articles"

export default class PageContainer extends Component {
  state = {
    articles: [],
    article: {},
  }

  componentDidMount() {
      fetch("http://localhost:3000/api/v1/articles")
      .then(res => res.json())
      .then(json => this.setState({articles: json}))
  }

  fetchArticle = (articleId) => {
    return fetch(`${URL}/${articleId}`)
    .then(res => res.json())
    .then(console.log)
  }

  render() {
    return (
      <div>
        <Container>
          <Switch>
            <Route exact path='/new' render={() => {
              return <ArticleForm />
            }} />
            <Route exact path="/:id" render={({match}) => {
              let articleId = parseInt(match.params.id)
              let article = this.state.articles.find(article => article.id === articleId)
              this.fetchArticle(articleId)
              return this.state.article.id ?
                <Article
                  key={article.id}
                  article={article} /> : null;
            }} />
            <Route exact path='/' render={() => {
              return <ArticleList articles={this.state.articles}/>
            }} />
          </Switch>
        </Container>
      </div>
    );
  }
}
