import React, {Component} from 'react'

import HeroBanner from '../presentational/HeroBanner.js'
import NavBar from '../presentational/NavBar.js'

import './menu.css'
import { Segment } from 'semantic-ui-react'

export default class Header extends Component {

  render() {
    return(
      <Segment className="inverted vertical masthead">
        <NavBar />
        <HeroBanner />
      </Segment>
    )
  }
}
