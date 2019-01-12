import React, {Component} from 'react'

export default class ArticleListItem extends Component {

  render() {
    return (
      <div>
        <strong>Article {this.props.article.id}:</strong>
        {this.props.article.title},
        {this.props.article.text}
        

      </div>
    )
  }
}
