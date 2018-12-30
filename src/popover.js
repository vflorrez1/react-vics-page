import React from "react";
import { ButtonToolbar, Popover, OverlayTrigger } from 'react-bootstrap';
import phoneIcon from './icons/whatsappPhone.svg'
import emailIcon from './icons/emailIcon.svg'



export default function popover() {
    const popoverClick = (
        <Popover id="popover-trigger-click" title="Contact Number">
            <a href="tel:07805919393" target="_blank">
            <strong>07805919393</strong>
            </a>
        </Popover>
    );
    const popoverClickE = (
        <Popover id="popover-trigger-click" title="Email">
            <a href="mailto:manuel1212@hotmail.co.uk" target="_blank">
            <strong>manuel1212@hotmail.co.uk</strong>
            </a>
        </Popover>
    );
    return (
        <ButtonToolbar style={{ padding: '10px 0' }}>
            <OverlayTrigger
                trigger="click"
                rootClose
                placement="top"
                overlay={popoverClick}
            >
                <img src={phoneIcon} className="contactPics" alt="me"></img>
            </OverlayTrigger>
            <OverlayTrigger
                trigger="click"
                rootClose
                placement="top"
                overlay={popoverClickE}
            >
                <img src={emailIcon} className="contactPics" alt="me"></img>
            </OverlayTrigger>
        </ButtonToolbar>
    )

}