import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import AppHeader from './presentational/AppHeader.js'
import AppRouter from './AppRouter.js'
import { Segment } from 'semantic-ui-react'

const App = (props) => {
  return (
    <BrowserRouter>
      <div>
        <AppHeader />
        <Segment basic></Segment>
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
