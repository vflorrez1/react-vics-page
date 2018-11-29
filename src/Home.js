import React, { Component } from 'react';
import { Link } from "react-router-dom";
import me from './robe.jpg'


export default class Home extends Component {
    render() {
      return (
        <div>
          <div class="header">
            <h1>Victor Florez</h1>
            <p>Hi all</p>
          </div>
  
          <div class="topnav"> 
          <Link to="/">Home</Link>
          <Link to="/cv">CV</Link>
          <Link to="#">Skills</Link>
          <Link to="#">Hobbies</Link> 
          </div>
  
          <div class="row">
            <div class="column">
              <img src={me} alt="me"></img>
            </div>
            <div class="column">
              <h2>About me</h2>
              <p> I am a recently graduated from the Univerity of York with a Mathematics degree, however I have always had a big interest in coding and automation. I began coding in Java during my time at University and quickly realised how much I enjoyed it, the satisfaction of solving a problem really entrigued me so I began to look for methods to teach myself and decided to join a bootcamp to improve my current set of skills. </p>
            </div>
            <div class="column">
              <h2>Current work</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
            </div>
          </div>
  
          <div class="footer">
            <h2>Footer</h2>
          </div>
          </div>

      );
    }
  }