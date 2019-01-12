import React, {Component} from 'react'

export default class ArticleListItem extends Component {

  render() {
    return (
      <li>Title: {this.props.article.title},
    Content: {this.props.article.text}</li>
    )
  }
}
