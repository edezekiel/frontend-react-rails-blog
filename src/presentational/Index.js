import React from 'react'

import { List, Image, Header, Container, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Index = (props) => {

  return (
    <Container text>
      <Segment basic>
        <Header size="huge">Latest Blogs</Header>
      </Segment>
      <Segment basic>
        <List verticalAlign='middle' animated divided size="medium" relaxed>
          {props.articles.map((article) => {
            return (
              <List.Item key={article.id}>
                <List.Content verticalAlign='middle' floated='left'>
                  <Link to={`/${article.id}`}>
                      <Header>
                        <Image avatar src={article.image} />
                        {article.title}
                      </Header>
                  </Link>
                </List.Content>
                <List.Content verticalAlign='middle' style={{"marginTop":"15px"}} floated='right'>
                  <Header as='h5'>{article.date}</Header>
                </List.Content>
              </List.Item>
            )
          })}
        </List>
      </Segment>
    </Container>
  )
}

export default Index
