import React, { Component } from 'react';
import Article from '../presentational/Article.js'

import { Container } from 'semantic-ui-react'

const URL = "http://localhost:3000/api/v1/articles"

export default class ArticleContainer extends Component {
  state = { article: [] }

  componentDidMount() {
    let articleId = parseInt(this.props.match.params.id)
    fetch(`${URL}/${articleId}`)
    .then(res => res.json())
    .then(article => this.setState({
      article: article
    }))
  }

  render() {
    return (
      <Container text textAlign="justified" style={{"margin-top": "7rem"}}>
        <Article
          key={this.state.article.id}
          article={this.state.article}
        />
      </Container>
    )
  }
}
