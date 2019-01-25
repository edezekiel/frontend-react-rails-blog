import React from 'react';
import Parser from 'html-react-parser';
import { Header, Container, Segment, Image } from 'semantic-ui-react'
import '../css/CodeBlock.css'

const Article = (props) => {
  return (
    <Container text>
      <Header size="huge">{props.article.title}</Header>
        {props.article.date}
      <br />
      <br />
      <Image src={props.article.image} />

      <br />
      {Parser(`${props.article.text}`)}
    </Container>
  )
}

export default Article
