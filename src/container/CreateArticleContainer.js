import React, {Component} from 'react'

import CreateArticle from '../presentational/CreateArticle.js'
import PreviewArticle from '../presentational/PreviewArticle.js'

import { Grid } from 'semantic-ui-react'

export default class CreateArticleContainer extends Component {
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
      <div>
      <Grid columns={2}>
        <Grid.Column>
        <CreateArticle
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          title={this.state.title}
          content={this.state.content}
        />
        </Grid.Column>
        <Grid.Column>
        <PreviewArticle
          title={this.state.title}
          content={this.state.content}
          />
        </Grid.Column>
      </Grid>
      </div>
    )
  }
}
