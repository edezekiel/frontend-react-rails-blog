import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import NavBar from './presentational/NavBar.js'
import AppRouter from './AppRouter.js'
import { Container } from 'semantic-ui-react'

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
          <Container text textAlign="justified" style={{"margin-top": "7rem"}}>
            <AppRouter updateUser={this.updateUser}/>
          </Container>
        </div>
      </BrowserRouter>
    );
  }
}
