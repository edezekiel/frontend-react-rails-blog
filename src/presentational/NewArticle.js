import React from 'react'

import { Grid, Container } from 'semantic-ui-react'

import FormPostArticle from './FormPostArticle.js'
import PreviewArticle from './PreviewArticle.js'

const NewArticle = (props) => {
  return (
    <Container>
      <Grid columns={2}>
        <Grid.Column>
        <FormPostArticle
          handleChange={props.handleChange}
          handleSubmit={props.handleSubmit}
          title={props.title}
          date={props.date}
          content={props.content}
        />
        </Grid.Column>
        <Grid.Column>
        <PreviewArticle
          title={props.title}
          date={props.date}
          content={props.content}
          />
        </Grid.Column>
      </Grid>
    </Container>
  )
}

export default NewArticle
