import React, { Component } from 'react';
import PageContainer from './container/PageContainer.js'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import AppHeader from './presentational/AppHeader.js'

import { Segment } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <AppHeader />
          <Route path='/' component={PageContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
