import React from 'react'
import { Menu, Header, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import logo from '../assets/006-ui-1-copy.png'

const AppHeader = (props) =>  {
  return (
    <div>
      <Segment>
        <Menu className="inverted fixed">
          <Link to="/" className="item"><img src={logo} alt="logo"/></Link>
          <Link to="/" className="item">Ed Ezekiel</Link>

          <div className="right menu">
            <Link to="/about" className="item">About Me</Link>
            <Link to="/contact" className="item">Contact</Link>
            <Link to="/new" className="item">New Article</Link>
          </div>
        </Menu>
      </Segment>
    </div>
  )
}

export default AppHeader
