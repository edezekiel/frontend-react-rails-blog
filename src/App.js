import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import AppHeader from './presentational/AppHeader.js'
import AppRouter from './AppRouter.js'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <AppHeader />
          <AppRouter />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
