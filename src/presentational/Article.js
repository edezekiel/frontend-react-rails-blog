import React from 'react';
import Parser from 'html-react-parser';
import { Header, Container, Image, Button } from 'semantic-ui-react'
import '../css/CodeBlock.css'

const Article = (props) => {
  return (
    <Container text>
      { props.user ? <Button primary onClick={props.deleteArticle}>Delete</Button> : null}

      { (props.article.title !== undefined) ?
        <div>
          <Header size="huge">{props.article.title}
            <Header.Subheader>{props.article.date}</Header.Subheader>
          </Header>

          <Image src={props.article.image} style={{"minWidth": "100%", "maxHeight": "350px"}}/>

          <br />
          {Parser(`${props.article.text}`)}
        </div>
      : null
      }
    </Container>
  )
}

export default Article
