import React, { Component } from 'react';
import ArticleList from './ArticleList.js'
import ArticleForm from './ArticleForm.js'
import NavBar from '../presentational/NavBar.js'
import { BrowserRouter as Router, Route, NavLink, Link, Switch } from 'react-router-dom';
import { Container, Segment } from 'semantic-ui-react'

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
