import React from 'react'

import { Segment, Container, Header, Grid, Icon, List } from 'semantic-ui-react'

const MyFooter = () => {
  return (
    <Segment vertical padded>
      <Container textAlign="center">
        <Grid columns={2}>
          <Grid.Column>
            <Header color="violet">Made by Ed Ezekiel</Header>
          </Grid.Column>
          <Grid.Column>
            <List horizontal relaxed>
              <List.Item>
                <Icon name="github" link size="big" color="violet"></Icon>
              </List.Item>

              <List.Item>
                <Icon name="twitter" link size="big" color="violet"></Icon>
              </List.Item>

              <List.Item>
                <Icon name="linkedin" link size="big" color="violet"></Icon>
              </List.Item>

              <List.Item>
                <Icon name="medium m" link size="big" color="violet"></Icon>
              </List.Item>

            </List>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  )
}

export default MyFooter
