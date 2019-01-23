import React from 'react'
import { Switch, Route } from 'react-router-dom'

import IndexContainer from './container/IndexContainer.js'
import ShowContainer from './container/ShowContainer.js'
import About from './presentational/About.js'
import NewArticleContainer from './container/NewArticleContainer.js'
import LoginContainer from './container/LoginContainer.js'

const AppRouter = (props) => {
  return(

    <Switch>
        <Route exact path="/about" component={About}/>
        <Route exact path='/login' render={() => {
          return <LoginContainer updateUser={props.updateUser} />
        }}/>
        <Route exact path='/new' component={NewArticleContainer}/>

        <Route exact path='/:id' component={ShowContainer} />
        <Route exact path='/' component={IndexContainer} />
    </Switch>
  )
}

export default AppRouter
