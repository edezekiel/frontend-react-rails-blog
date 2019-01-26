import React from 'react'

import { Segment, Container, Header, Icon, List } from 'semantic-ui-react'

const MyFooter = () => {
  return (
    <Segment vertical padded>
      <Container textAlign="center">
            <List horizontal relaxed>
              <List.Item>
                <a href="https://github.com/edezekiel" target="_blank">
                  <Icon name="github" link size="big" color="violet"></Icon>
                </a>
              </List.Item>
              <List.Item>
                <a href="https://twitter.com/_edezekiel" target="_blank">
                  <Icon name="twitter" link size="big" color="violet"></Icon>
                </a>
              </List.Item>
              <List.Item>
                <a href="https://www.linkedin.com/in/edezekiel/" target="_blank">
                  <Icon name="linkedin" link size="big" color="violet"></Icon>
                </a>
              </List.Item>
              <List.Item>
                <a href="https://medium.com/@edezekiel" target="_blank">
                  <Icon name="medium m" link size="big" color="violet"></Icon>
                </a>
              </List.Item>
            </List>
          <Header>Made by Ed Ezekiel</Header>
      </Container>
    </Segment>
  )
}

export default MyFooter
