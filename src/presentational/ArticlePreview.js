import React from 'react'

import Parser from 'html-react-parser';
import { Header } from 'semantic-ui-react'

const ArticlePreview = (props) => {
  return(
    <div>
      <Header size="large">Article Preview:</Header>
      <Header>{props.title}</Header>
      {Parser(`${props.content}`)}
    </div>
  )
}

export default ArticlePreview
