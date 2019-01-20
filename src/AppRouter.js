import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import { Switch, Route } from 'react-router-dom'

import ArticlesContainer from './container/ArticlesContainer.js'
import ArticleContainer from './container/ArticleContainer.js'
import About from './presentational/About.js'
import Contact from './presentational/Contact.js'
import PostFormContainer from './container/PostFormContainer.js'

export default class AppRouter extends Component {
  render() {
    return(
      <div>
        <Container>
          <Switch>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path='/new' component={PostFormContainer}/>
            <Route exact path='/:id' component={ArticleContainer} />
            <Route exact path='/' component={ArticlesContainer} />
          </Switch>
        </Container>
      </div>
    )
  }
}
