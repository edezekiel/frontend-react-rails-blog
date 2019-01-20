import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import AppHeader from './presentational/AppHeader.js'
import AppRouter from './AppRouter.js'

const App = (props) => {
  return (
    <BrowserRouter>
      <div>
        <AppHeader />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
