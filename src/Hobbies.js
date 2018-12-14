import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Stateless from './Stateless.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faStar, faStarHalf, faStarAndCrescent } from '@fortawesome/free-solid-svg-icons'




export default class Hobbies extends Component {
  render() {
    return (
      <div>
        <div class="sidenav">
          <Link to="/">Home</Link>
          <Link to="/cv">CV</Link>
          <Link to="#">Skills</Link>
          <Link to="#">Hobbies</Link>
          <Link to="/projects">Projects</Link>
        </div>
        <div>
          <Stateless props_1="hey" />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} color="red" />
        </div>
      </div>

    );
  }
}