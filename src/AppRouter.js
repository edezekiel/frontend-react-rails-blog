import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import { Switch, Route } from 'react-router-dom'

import ArticlesContainer from './container/ArticlesContainer.js'
import ArticleForm from './container/ArticleForm.js'
import ArticleList from './container/ArticleList.js'
import Article from './presentational/Article.js'
import About from './presentational/About.js'
import Contact from './presentational/Contact.js'

export default class AppRouter extends Component {

  render() {

    return(
      <div>
        <Container>
          <Switch>
            <Route exact path='/new' render={() => {
              return <ArticleForm />
            }} />
            <Route exact path="/about" render={() => {
              return <About />
            }} />
            <Route exact path="/contact" render={() => {
              return <Contact />
            }} />
            <Route exact path='/' component={ArticlesContainer} />
          </Switch>
        </Container>
      </div>
    )
  }
}
