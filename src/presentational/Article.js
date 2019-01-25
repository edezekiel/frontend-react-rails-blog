import React from 'react';
import Parser from 'html-react-parser';
import { Header, Container, Segment, Image } from 'semantic-ui-react'
import '../css/CodeBlock.css'

const Article = (props) => {
  return (
    <Container text>
      <Header size="huge">{props.article.title}
        <Header.Subheader>{props.article.date}</Header.Subheader>
      </Header>

      <Image src={props.article.image} style={{"min-width": "100%", "max-height": "350px"}}/>

      <br />
      {Parser(`${props.article.text}`)}
    </Container>
  )
}

export default Article
