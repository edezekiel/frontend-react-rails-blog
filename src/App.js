import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import NavBar from './presentational/NavBar.js'
import AppRouter from './AppRouter.js'
import { Container, Segment } from 'semantic-ui-react'

const App = (props) => {
  return (
    <BrowserRouter>
      <Container text>
        <NavBar />
        <Segment basic></Segment>
          <AppRouter />
      </Container>
    </BrowserRouter>
  );
}

export default App;
