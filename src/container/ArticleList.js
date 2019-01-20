import React, {Component} from 'react'
import { List } from 'semantic-ui-react'
import Article from '../presentational/Article.js'

export default class ArticleList extends Component {

  render() {
    return (
      <List>
        {this.props.articles.map((article) =>
          <Article
            key={article.id}
            article={article} />
        )}
      </List>
    )
  }
}
