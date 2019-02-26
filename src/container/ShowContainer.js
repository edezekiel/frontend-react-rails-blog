import React, { Component } from 'react';
import Article from '../presentational/Article.js'

const URL = "https://backend-edezekiel-blog.herokuapp.com/api/v1/articles"

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

  deleteArticle = () => {
    let articleId = parseInt(this.props.articleId)
    const options = {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({articleId: articleId})
    }
    fetch(`${URL}/${articleId}`, options)
    .then(res => res.json())
  }

  editArticle = () => {
    console.log("edit article")
  }

  render() {
    return (
      <div>
      {this.state.article.length ?
        <Article
          key={this.state.article.id}
          article={this.state.article}
          user={this.props.user}
          deleteArticle={this.deleteArticle}
          editArticle={this.editArticle}
        />
        : null
      }
      </div>
    )
  }
}
