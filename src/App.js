import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import { Segment, Item } from 'semantic-ui-react'

import NavBar from './presentational/NavBar.js'
import AppRouter from './AppRouter.js'
import MyFooter from './presentational/MyFooter.js'

export default class App extends Component {
  state = {
    user: localStorage.getItem('name')
  }

  updateUser = (user) => {
    this.setState({ user: user})
  }

  logout = () => {
    this.setState({ user: null })
    localStorage.clear()
  }

  render() {
    return (
      <BrowserRouter>
          <div>
            <NavBar user={this.state.user} logout={this.logout}/>
            <Segment vertical padded>
              <AppRouter updateUser={this.updateUser}/>
            </Segment>
            <MyFooter />
          </div>
      </BrowserRouter>
    );
  }
}
