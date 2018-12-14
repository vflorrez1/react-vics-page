import React, { Component } from 'react';
import Stateless from './Stateless.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faStar, faStarHalf, faStarAndCrescent } from '@fortawesome/free-solid-svg-icons'




export default class Hobbies extends Component {
    constructor() {
        super();
        // Don't call this.setState() here!
        this.state = {
            num: 0;
             on: <FontAwesomeIcon icon={faStar}/>,
             off: <FontAwesomeIcon icon={faStar} color="red"/>
     };
    }
       
  render() {
      if(this.state)
    return (
      <div>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} color="red"/>
        </div>
    );
  }
}