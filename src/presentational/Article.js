import React from 'react';
import Parser from 'html-react-parser';
import { Header, Container } from 'semantic-ui-react'
import '../css/CodeBlock.css'

const Article = (props) => {
  return (
    <Container text>
      <Header textAlign="center">{props.article.title}</Header>
      <br />
      <p>{props.article.date}</p>
      <br />
      {Parser(`${props.article.text}`)}
    </Container>
  )
}

export default Article
