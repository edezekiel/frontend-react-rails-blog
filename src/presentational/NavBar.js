import React from 'react'
import { Menu, Header, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import logo from '../assets/006-ui-1-copy.png'

const NavBar = (props) =>  {
  return (
    <Menu secondary>
        <Link to="/" className="item"><Header as='h3'><Image src={logo} alt="logo"/> Ed Ezekiel</Header></Link>
        <Link to="/about" className="item"><Header as='h3'>About</Header></Link>
        <Link to="/contact" className="item"><Header as='h3'>Contact</Header></Link>
        <Link to="/new" className="item"><Header as='h3'>New Article</Header></Link>

        { props.user ?
        <Link to="/" className="item" onClick={props.logout}>
          <Header as='h3'>Logout</Header>
        </Link> :
        <Link to="/login" className="item">
          <Header as='h3'>Login</Header>
        </Link>
        }
    </Menu>
  )
}

export default NavBar
