import React, { Component } from 'react';
import './App.css'
import Home from './Home.js'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cv from './Cv'

function Test() {
  return <div>Hello</div>
}


class App extends Component {
  render() {
    return (
      <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/cv" component={Cv} />
          <Route exact path="/react-vics-page/test" component={Test} />
    
      </div>

    )
  }
}

export default App;
