import React from 'react';
import Parser from 'html-react-parser';
import { List, Header, Button } from 'semantic-ui-react'
import './CodeBlock.css'

const Article = (props) => {
  return (
    <List.Item>
      <Header>{props.article.title}</Header>
      {Parser(`${props.article.text}`)}
    </List.Item>
  )
}

export default Article
