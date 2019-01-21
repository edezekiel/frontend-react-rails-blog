import React from 'react'
import { Menu, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import logo from '../assets/006-ui-1-copy.png'

const NavBar = (props) =>  {
  return (
    <Menu secondary color="violet">
      <Menu.Item><Link to="/" className="item"><img src={logo} alt="logo"/></Link></Menu.Item>
      <Menu.Item><Link to="/about" className="item"><Header>Ed Ezekiel</Header></Link></Menu.Item>
      <Menu.Item><Link to="/contact" className="item"><Header>Contact</Header></Link></Menu.Item>
      <Menu.Item><Link to="/new" className="item"><Header>New Article</Header></Link></Menu.Item>
    </Menu>
  )
}

export default NavBar
