import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Gallery from './gallery/Gallery';
import Details from './Details';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Gallery} />
          <Route exact path='/details' component={Details} />
        </div>
      </Router>
    );
  }
}


export default App;
