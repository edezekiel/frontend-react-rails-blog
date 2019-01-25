import React, { Component } from 'react';
import Article from '../presentational/Article.js'

const URL = "http://localhost:3000/api/v1/articles"

// define ShowContainer
// let ShowWithRouter = withRouter(ShowContainer)
// export default ShowWithRouter

export default class ShowContainer extends Component {
  state = {
    article: [],
  }

  componentDidMount() {
    let articleId = parseInt(this.props.articleId)
    fetch(`${URL}/${articleId}`)
    .then(res => res.json())
    .then(article => this.setState({
      article: article
    }))
  }

  render() {
    return (
        <Article
          key={this.state.article.id}
          article={this.state.article}
          user={this.props.user}
        />
    )
  }
}
