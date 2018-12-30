import React, { Component } from 'react';
import me from './robe.jpg'
import './aboutMe.css'

export default class AboutMe extends Component {
    render() {
        return (
            <div>
                <div class="infoContainer">
                    {/* <div class="column">
                        <img className="images" src={me} alt="me"></img>
                    </div> */}
                    <div class="infoCol">
                        <div className="infoHeader">About me</div>
                        <p className="infoText"> I have recently graduated from the Univerity of York with a Mathematics degree, however I have always had a big interest in coding and automation. I began coding in Java during my time at University and quickly realised how much I enjoyed it, the satisfaction of solving a problem really entrigued me so I began to look for methods to teach myself and decided to join a bootcamp to improve my current set of skills. </p>
                    </div>
                    <div class="infoCol">
                        <div className="infoHeader">Current work</div>
                        <p className="infoText"> Currently enrolled at a Web Development Bootcamp "Kodiri" which is run by an experienced Web Developer "Ricardo Mallols". The course finishes on the 21st of December, throught the course I will be understanding the React framework as well constantly developing in Javascript HTML5 and CSS3. As well as working with the fundemental tools of Web Developemnt I will also be working in an Agil enviroment and working in group projects. Along with these skills we will also be deploying our first projects and implementing javascript in the backend. </p>
                    </div>
                </div>
            </div>

        );
    }
}