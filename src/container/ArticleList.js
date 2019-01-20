import React, {Component} from 'react'
import { List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class ArticleList extends Component {

  render() {
    return (
      <List>
        {this.props.articles.map((article) =>
          <Link key={article.id} to={`/${article.id}`}>
            <li>{article.title}</li>
          </Link>
        )}
      </List>
    )
  }
}
