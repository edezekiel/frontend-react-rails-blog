import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import LoginForm from '../presentational/LoginForm.js'

const LOGIN_URL = "http://localhost:3000/api/v1/login"

class LoginContainer extends Component {
  state = {
    email: "",
    password: ""
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
      console.log(payload)
      localStorage.setItem('token', payload.token)
      localStorage.setItem('name', payload.name)
      this.props.updateUser(payload.name)
      this.props.history.push('/')
    })
  }

  render() {
    console.log(this.props)
    return (
      <LoginForm
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

const LoginWithRouter = withRouter(LoginContainer)

export default LoginWithRouter;