import React from 'react'

import { List, Image, Header, Container } from 'semantic-ui-react'

import IndexItem from './IndexItem.js'

const Index = (props) => {

  return (
    <Container text>
      <List animated divided size="medium" relaxed>
        {props.articles.map((article) => {
          return (
            <List.Item key={article.id}>
              <Image avatar floated='left' src='https://vignette.wikia.nocookie.net/gameofthrones/images/5/5c/Eddard_1x01.jpg/revision/latest?cb=20120511213934' />
              <List.Content verticalAlign='middle' floated='left'>
                <IndexItem article={article} />
              </List.Content>
              <List.Content verticalAlign='middle' floated='right'>
                <Header as='h5'>{article.date}</Header>
              </List.Content>
            </List.Item>
          )
        })}
      </List>
    </Container>
  )
}

export default Index
