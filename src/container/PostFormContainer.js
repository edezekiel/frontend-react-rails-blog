import React, {Component} from 'react'
import PostForm from '../presentational/PostForm.js'

export default class FormContainer extends Component {
  state = {
    title: '',
    content: ''
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const article = {title: this.state.title, text: this.state.content}
    const options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(article)
    }
    return fetch("http://localhost:3000/api/v1/articles", options)
    .then(res => res.json())
  }

  render() {
    return (
      <PostForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        title={this.state.title}
        content={this.state.content}
      />
    )
  }
}
