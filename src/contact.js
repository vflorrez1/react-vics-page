import React, { Component } from "react";
import './contact.css'
import phoneIcon from './icons/whatsappPhone.svg'
import emailIcon from './icons/emailIcon.svg'
import fbIcon from './icons/facebookIcon.svg'
import linkedIcon from './icons/linkedIcon.svg'
import { Popover} from 'react-bootstrap';
import Popy from './popover.js'
import github from './icons/githubIcon.svg'



export default class Contact extends Component {
    render() {
        return (
            <div className="contactContainerr">
                <div className="nameof">
                    Get In Touch!
                </div>
                <div className="contactIcons">
                    <Popy/>
                    <a className="contactPics" href="https://github.com/vflorrez1" target="_blank">
                    <img src={github} className="contactPics" alt="me"></img>
                    </a>
                    <a className="contactPics" href="https://www.facebook.com/florezbiccy" target="_blank">
                    <img src={fbIcon} className="contactPics" alt="me"></img>
                    </a>
                    <a className="contactPics" href="https://www.linkedin.com/in/victor-florez-39b581133/" target="_blank">
                    <img src={linkedIcon} className="contactPics" alt="me"></img>
                    </a>
                </div>
            </div>
        );
    }
}