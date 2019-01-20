import React, {Component} from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default class MenuExampleStackable extends Component {

  render() {
    return (
      <Menu className="stackable top fixed inverted">
        <NavLink to="/" className="active item">Home </NavLink>

        <NavLink to="/about" className="item">About</NavLink>

        <NavLink to="/contact" className="item">Contact</NavLink>

        <NavLink to="/new" className="item">New Article</NavLink>
      </Menu>
    )
  }
}
