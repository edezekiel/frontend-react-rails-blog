import React, { Component } from 'react';
import ArticleContainer from './container/ArticleContainer.js'
import { BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path='/' component={ArticleContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
