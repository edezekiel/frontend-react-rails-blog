import React from 'react'
import { Menu, Header, Image, Container, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import logo from '../assets/006-ui-1-copy.png'

const NavBar = (props) =>  {
  return (
    <Segment inverted vertical>
        <Menu inverted fixed="top">
          <Container>
            <Link to="/" className="item"><Header inverted as='h3'><Image src={logo} alt="logo"/> Ed Ezekiel</Header></Link>
            <Link to="/about" className="item"><Header inverted as='h3'>About Me</Header></Link>
            <Link to="/login" className="item"><Header inverted as='h3'>Login</Header></Link>
            { props.user ? <Link to="/" className="item" onClick={props.logout}> <Header inverted as='h3'>Logout</Header> </Link> : null }
            { props.user ? <Link to="/new" className="item"><Header inverted as='h3'>New Article</Header></Link> : null }
            </Container>
        </Menu>
    </Segment>
  )
}

export default NavBar
