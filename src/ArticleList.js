import React, {Component} from 'react'
import ArticleListItem from "./ArticleListItem.js"

export default class ArticleList extends Component {

  render() {
    return (
      <div>
        {this.props.articles.map((article, i) =><ArticleListItem key={i} article={article} />)}
      </div>
    )
  }
}
