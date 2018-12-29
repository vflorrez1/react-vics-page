import React, { Component } from "react";
import './contact.css'
import phoneIcon from './icons/whatsappPhone.svg'
import emailIcon from './icons/emailIcon.svg'
import fbIcon from './icons/facebookIcon.svg'
import linkedIcon from './icons/linkedIcon.svg'



export default class Contact extends Component {
    render() {
        return (
            <div className="contactContainerr">
                <div className="nameof">
                    Get In Touch!
                </div>
                <div className="contactIcons">
                    <img src={phoneIcon} className="contactPics" alt="me"></img>
                    <img src={emailIcon} className="contactPics" alt="me"></img>
                    <img src={fbIcon} className="contactPics" alt="me"></img>
                    <img src={linkedIcon} className="contactPics" alt="me"></img>
                </div>
         </div>
                );
              }
}