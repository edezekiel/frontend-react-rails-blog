import React from 'react'

import Parser from 'html-react-parser';
import { Header, Image, Segment } from 'semantic-ui-react'

const PreviewArticle = (props) => {
  return(
    <div>
      <Header size="large">Article Preview:</Header>
      <Header>{props.title}</Header>
      <Header>{props.date}</Header>
      <Image src={props.image} style={{"minWidth": "100%", "maxHeight": "350px"}}/>
      <Segment>
        {Parser(`${props.content}`)}
      </Segment>
    </div>
  )
}

export default PreviewArticle
