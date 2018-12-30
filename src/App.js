import React, { Component } from 'react';
import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cv from './Cv'
import Projects from './Projects.js';
import Particless from './particles';
import Loader from './loader';
import SimpleSlider from './carasel.js';
import Contact from './contact.js'
import AboutMe from './aboutMe.js'



class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="loader">
          {/* <Loader /> */}
        </div>
        <Route exact path="/" component={Particless} />
        <SimpleSlider/>
        <AboutMe/>
        <Contact/>
        <Route exact path="/projects" component={SimpleSlider} />
        <Route exact path="/cv" component={Cv} />
        </div>

    )
  }
}

export default App;
