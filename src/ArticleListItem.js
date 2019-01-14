import React, {Component} from 'react';
import Parser from 'html-react-parser';

export default class ArticleListItem extends Component {

  render() {
    return (
      <div>
        <strong>Article {this.props.article.id}:</strong>
        --{this.props.article.title}--
        {Parser(`${this.props.article.text}`)}
      </div>
    )
  }
}
