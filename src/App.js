import React, { Component } from 'react';
import PageContainer from './container/PageContainer.js'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Banner from './presentational/Banner.js'
import NavBar from './presentational/NavBar.js'

import { Segment } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <Segment>
            <NavBar />
          </Segment>
          <Segment padded="very">
            <Banner />
          </Segment>
          <Route path='/' component={PageContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
