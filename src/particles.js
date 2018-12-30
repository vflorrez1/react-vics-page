import React, { Component } from 'react';
import Particles from 'react-particles-js';
import { Link } from "react-router-dom";
import './particles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { Animated } from "react-animated-css";


const particleOpt = {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 500
      }
    },
    "color": {
      "value": "#000000"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 120,
        "height": 120
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#000000",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": false
}

export default class Particless extends Component {

  render() {
    return (
      <div className="firstPage">
        <div className="firstPageBox">
          <div className="name">
            <h1>Victor Florez</h1>
          </div>
          <div className="navFloat">
            <div class="topnavv">
              <Link to="/">Home</Link>
              <Link to="/cv">CV</Link>
              <Link to="/projects">Projects</Link>
              <Link to="#">Contact</Link>
            </div>
          </div>
          <div className="devyy">
            <h1>Javascript Developer</h1>
          </div>
          <div className ="particleDiv">
          <Particles
            params={particleOpt}
          />
          <div className= "bottomButton">
          <FontAwesomeIcon  icon={faAngleDown} size="4x" />
          </div>
          
          </div>

        </div>
      </div>
    );
  };
}
