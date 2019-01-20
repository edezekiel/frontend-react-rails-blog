import React, {Component} from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './menu.css'

export default class MenuExampleStackable extends Component {

  render() {
    return (
      <Menu className="main inverted">

        <Link to="/" className="item">Blog</Link>

        <Link to="/about" className="item">About</Link>

        <Link to="/contact" className="item">Contact</Link>

        <Link to="/new" className="item">New Article</Link>
      </Menu>
    )
  }
}
