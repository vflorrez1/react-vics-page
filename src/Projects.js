import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Projects.css'

export default class Projects extends Component {
  render() {
    return (
      <div>
        <div class="sidenav">
          <Link to="/">Home</Link>
          <Link to="/cv">CV</Link>
          <Link to="#">Skills</Link>
          <Link to="#">Hobbies</Link>
          <Link to="#">Projects</Link>
        </div>
        <div className="gridContainer">
          <div className="kid">
            <h1>kodflix</h1>
          </div>
          <div className="kid">
            <h1>siftr</h1>
          </div>
        </div>
      </div>

    );
  }
}