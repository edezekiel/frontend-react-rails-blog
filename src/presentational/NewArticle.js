import React from 'react'

import { Grid } from 'semantic-ui-react'

import FormPostArticle from './FormPostArticle.js'
import PreviewArticle from './PreviewArticle.js'

const NewArticle = (props) => {
  return (
    <Grid columns={2}>
      <Grid.Column>
      <FormPostArticle
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
        title={props.title}
        content={props.content}
      />
      </Grid.Column>
      <Grid.Column>
      <PreviewArticle
        title={props.title}
        content={props.content}
        />
      </Grid.Column>
    </Grid>
  )
}

export default NewArticle
