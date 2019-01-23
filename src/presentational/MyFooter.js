import React from 'react'

import { Segment, Container, List, Icon } from 'semantic-ui-react'

const MyFooter = () => {
  return (
    <Segment vertical padded="very">
      <Container textAlign="center">
        <List horizontal relaxed divided>
          <List.Item>
            <Icon link name="twitter" size="big" color="violet"/>
          </List.Item>
          <List.Item>
            <Icon link name="github" size="big" color="violet"/>
          </List.Item>
          <List.Item>
            <Icon link name="linkedin" size="big" color="violet"/>
          </List.Item>
        </List>
      </Container>
    </Segment>
  )
}

export default MyFooter
