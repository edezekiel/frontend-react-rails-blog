import React, {Component} from 'react'

import Banner from '../presentational/Banner.js'
import NavBar from '../presentational/NavBar.js'

import './menu.css'
import { Segment } from 'semantic-ui-react'

export default class Header extends Component {

  render() {
    return(
      <Segment className="vertical masthead">
        <NavBar />
        <Banner />
      </Segment>
    )
  }
}
