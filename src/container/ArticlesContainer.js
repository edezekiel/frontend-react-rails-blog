import React, { Component } from 'react';
import { Header, List } from 'semantic-ui-react'
import ArticleListItem from '../presentational/ArticleListItem.js'

const URL = "http://localhost:3000/api/v1/articles"

export default class ArticlesContainer extends Component {
  state = { articles: [] }

  componentDidMount() {
    fetch(URL)
    .then(res => res.json())
    .then(articles => this.setState({articles: articles}))
  }

  render() {
    return (
      <div>
      <Header size="huge">Articles</Header>
        <List animated size="medium" relaxed>
          {this.state.articles.map((article) =>
            <List.Item key={article.id}>
              <ArticleListItem
                article={article} />
            </List.Item>
          )}
        </List>
      </div>
    )
  }
}
