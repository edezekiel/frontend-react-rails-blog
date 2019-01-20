import React, {Component} from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './menu.css'
import logo from '../assets/006-ui-1-copy.png'

export default class MenuExampleStackable extends Component {

  render() {
    return (

      <Menu inverted header large fixed>
        <Link
          to="/"
          className="item">
          <img src={logo} />
        </Link>

        <div className="right menu">

          <Link to="/about" className="item">About Me</Link>

          <Link to="/contact" className="item">Contact</Link>

          <Link to="/new" className="item">New Article</Link>
        </div>
      </Menu>
    )
  }
}
