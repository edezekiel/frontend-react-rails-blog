import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import NavBar from './presentational/NavBar.js'
import AppRouter from './AppRouter.js'
import { Container, Segment } from 'semantic-ui-react'

const App = (props) => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Container text textAlign="justified" style={{"margin-top": "7rem"}}>
          <AppRouter />
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
