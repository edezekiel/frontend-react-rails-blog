import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import { Container, Segment } from 'semantic-ui-react'

import NavBar from './presentational/NavBar.js'
import AppRouter from './AppRouter.js'
import Footer from './presentational/Footer.js'

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
            <Segment vertical inverted basic>
              <NavBar user={this.state.user} logout={this.logout}/>
            </Segment>

            <Segment vertical padded="very">
              <AppRouter updateUser={this.updateUser}/>
            </Segment>

            <Segment inverted vertical padded="very">
              <Footer />
            </Segment>
          </div>
      </BrowserRouter>
    );
  }
}
