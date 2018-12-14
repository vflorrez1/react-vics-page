import React, { Component } from 'react';
import { Link } from "react-router-dom";
import cv from './cc.jpg'
import './Cv.css'


export default class Cv extends Component {
    render() {
        return (
            <div>
                <div class="sidenav">
                    <Link to="/">Home</Link>
                    <Link to="/cv">CV</Link>
                    <Link to="#">Skills</Link>
                    <Link to="/hobbies">Hobbies</Link>
                    <Link to="/projects">Projects</Link>
                </div>

                <div class="content">
                    <h2>CVVVVVV</h2>
                    <img src={cv} alt="me"></img>
                </div>
            </div>

        );
    }
}