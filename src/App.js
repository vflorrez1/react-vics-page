import React, { Component } from 'react';
import './App.css'
import Home from './Home.js'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cv from './Cv'
import Hobbies from './Hobbies.js';
import Projects from './Projects.js';
import Particless from './particles';
import Loader from './loader';
import SimpleSlider from './carasel.js';
import ReactFullpage from '@fullpage/react-fullpage';




class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="loader">
          {/* <Loader /> */}
        </div>
        <Route exact path="/" component={Particless} />
        <SimpleSlider/>
        <Route exact path="/projects" component={SimpleSlider} />
        <Route exact path="/cv" component={Cv} />
        <Route exact path="/hobbies" component={Hobbies} />
        </div>

    )
  }
}

export default App;
