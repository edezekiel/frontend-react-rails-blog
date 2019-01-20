import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'

export default class HeroBanner extends Component {

  render() {
    return(
      <Header id="heroheader" size="huge" textAlign="centered">
        Ed Ezekiel's Blog
      </Header>
    )
  }
}
