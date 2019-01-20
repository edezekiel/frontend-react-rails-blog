import React, {Component} from 'react';
import Parser from 'html-react-parser';
import { Button, List } from 'semantic-ui-react'

export default class ArticleListItem extends Component {

  render() {
    return (
      <List.Item>
        <strong>Article {this.props.article.id}:</strong>
        --{this.props.article.title}--
        {Parser(`${this.props.article.text}`)}
      </List.Item>
    )
  }
}
