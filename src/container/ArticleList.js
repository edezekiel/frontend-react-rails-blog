import React, {Component} from 'react'
import { List } from 'semantic-ui-react'
import Article from '../presentational/Article.js'

export default class ArticleList extends Component {

  render() {
    return (
      <List>
        {this.props.articles.map((article, i) =>
          <Article
            key={i}
            article={article} />
        )}
      </List>
    )
  }
}
