import React from 'react'
import { Menu, Header, Image, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import logo from '../assets/006-ui-1-copy.png'

const NavBar = (props) =>  {
  return (
    <Menu fixed="top" inverted borderless>
      <Container>
        <Menu.Item as="a"><Link to="/"><Header inverted as='h3'><Image src={logo} alt="logo"/> Ed Ezekiel</Header></Link></Menu.Item>
        <Menu.Item as="a"><Link to="/about"><Header inverted as='h3'>About</Header></Link></Menu.Item>
        <Menu.Item as="a"><Link to="/contact"><Header inverted as='h3'>Contact</Header></Link></Menu.Item>
        <Menu.Item as="a"><Link to="/new"><Header inverted as='h3'>New Article</Header></Link></Menu.Item>
      </Container>
    </Menu>
  )
}

export default NavBar
