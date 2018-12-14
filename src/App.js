import React, { Component } from 'react';
import './App.css'
import Home from './Home.js'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cv from './Cv'
import Hobbies  from './Hobbies.js';
import Projects from './Projects.js';



class App extends Component {
  render() {
    return (
      <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/cv" component={Cv} />
          <Route exact path="/hobbies" component={Hobbies} /> 
          <Route exact path="/projects" component={Projects} />   

      </div>

    )
  }
}

export default App;
