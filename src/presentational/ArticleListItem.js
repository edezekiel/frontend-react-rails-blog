import React from 'react'
import { Link } from 'react-router-dom'

const ArticleListItem = (props) => {
  return(
    <Link to={`/${props.article.id}`}>
      <li>{props.article.title}</li>
    </Link>
  )
}


export default ArticleListItem
