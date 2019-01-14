import React, {Component} from 'react'
import ArticleListItem from "./ArticleListItem.js"
import { List } from 'semantic-ui-react'

export default class ArticleList extends Component {

  render() {
    return (
      <List>
        {this.props.articles.map((article, i) =><ArticleListItem key={i} article={article} />)}
      </List>
    )
  }
}
