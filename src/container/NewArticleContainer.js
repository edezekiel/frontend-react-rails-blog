import React, {Component} from 'react'

import { Redirect } from 'react-router-dom'

import NewArticle from '../presentational/NewArticle.js'

export default class NewArticleContainer extends Component {
  state = {
    title: '',
    content: '',
    redirect: false,
    articleId: null
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
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
    .then(article => this.setState({redirect: true, articleId: article.id}))
  }

  render() {
    return (
      <div>
      {this.props.user ? <NewArticle handleChange={this.handleChange} handleSubmit={this.handleSubmit} title={this.state.title} content={this.state.content}/> : <div>Unauthorized</div>}
      {(this.state.redirect) ? <Redirect to={"/" + this.state.articleId}/> : null }
    </div>
    )
  }
}
