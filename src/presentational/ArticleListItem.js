import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from "semantic-ui-react"

const ArticleListItem = (props) => {
  return(
    <Link to={`/${props.article.id}`}>
        <Header>{props.article.title}</Header>
    </Link>
  )
}


export default ArticleListItem
