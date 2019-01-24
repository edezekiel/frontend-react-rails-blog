import React from 'react'

import { Segment, Container, List, Icon } from 'semantic-ui-react'

const MyFooter = () => {
  return (
    <Segment vertical padded="very">
      <Container textAlign="center">
          Made by Ed Ezekiel with <Icon link name="heart"/>
      </Container>
    </Segment>
  )
}

export default MyFooter
