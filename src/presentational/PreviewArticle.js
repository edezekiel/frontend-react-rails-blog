import React from 'react'

import Parser from 'html-react-parser';
import { Header } from 'semantic-ui-react'

const PreviewArticle = (props) => {
  return(
    <div>
      <Header size="large">Article Preview:</Header>
      <Header>{props.title}</Header>
      <Header>{props.date}</Header>
      {Parser(`${props.content}`)}
    </div>
  )
}

export default PreviewArticle
