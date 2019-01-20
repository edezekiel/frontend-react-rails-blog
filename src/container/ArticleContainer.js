import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Link, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react'

import Header from '../presentational/Header.js'
import ArticleForm from './ArticleForm.js'
import ArticleList from './ArticleList.js'

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
        <Header />
        <Container>
          <Switch>
            <Route exact path='/new' render={() => {
              return <ArticleForm />
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
