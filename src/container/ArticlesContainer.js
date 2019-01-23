import React, { Component } from 'react';
import { Header, List, Image } from 'semantic-ui-react'
import ArticleListItem from '../presentational/ArticleListItem.js'

import { Container } from 'semantic-ui-react'

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
        <List animated divided size="medium" relaxed>
          {this.state.articles.map((article) =>
            <List.Item key={article.id}>
              <Image avatar floated='left' src='https://vignette.wikia.nocookie.net/gameofthrones/images/5/5c/Eddard_1x01.jpg/revision/latest?cb=20120511213934' />
              <List.Content verticalAlign='middle' floated='left'>
                <ArticleListItem
                  article={article} />
              </List.Content>
              <List.Content verticalAlign='middle' floated='right'>
                <Header as='h5'>January 19, 2019</Header>
              </List.Content>
            </List.Item>
          )}
        </List>
    )
  }
}
