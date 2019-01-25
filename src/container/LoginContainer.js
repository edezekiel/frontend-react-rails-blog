import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import Login from '../presentational/Login.js'

const LOGIN_URL = "https://backend-edezekiel-blog.herokuapp.com/api/v1/login"

class LoginContainer extends Component {
  state = {
    email: "",
    password: "",
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(LOGIN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then(res => res.json())
    .then(payload => {
      localStorage.setItem('token', payload.token)
      localStorage.setItem('name', payload.name)
      this.props.updateUser(payload.name)
      this.props.history.push('/new')
    })
  }

  onInputChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <Login
        handleSubmit={this.handleSubmit}
        onInputChange={this.onInputChange}
      />
    )
  }
}

const LoginWithRouter = withRouter(LoginContainer)

export default LoginWithRouter;
