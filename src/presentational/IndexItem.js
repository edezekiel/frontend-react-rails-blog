import React from 'react'
import { Link } from 'react-router-dom'
import { Header, Image } from 'semantic-ui-react'

const IndexItem = (props) => {
  return (
    <Link to={`/${props.article.id}`}>
        <Header>
          <Image avatar src={props.article.image} />
          {props.article.title}
        </Header>
    </Link>
  )
}

export default IndexItem
