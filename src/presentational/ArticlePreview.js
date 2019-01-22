import React from 'react'

import Parser from 'html-react-parser';
import { Header, Segment } from 'semantic-ui-react'

const ArticlePreview = (props) => {
  return(
    <Segment padded="very">
    <Header size="large">Article Preview:</Header>
    <Header>{props.title}</Header>
    {Parser(`${props.content}`)}
    </Segment>
  )
}

export default ArticlePreview
