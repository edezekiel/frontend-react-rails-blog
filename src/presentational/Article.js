import React, {Component} from 'react';
import Parser from 'html-react-parser';
import { Button, List } from 'semantic-ui-react'

const Article = (props) => {
  return (
    <List.Item>
      <strong>Article {props.article.id}:</strong>
      --{props.article.title}--
      {Parser(`${props.article.text}`)}
    </List.Item>
  )
}

export default Article
