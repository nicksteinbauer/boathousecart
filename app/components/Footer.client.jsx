import { useState } from 'react'

import Modal from 'react-bootstrap/Modal';

import { Link } from "@shopify/hydrogen";
import { PinLogo } from "./PinLogo";
import { MainLogo } from "./header/MainLogo";
import BoathouseBlock from "./BoathouseBlock.client";
import MainForm from './MainForm.client';

import ScrollLinkHome from "./navlinks/ScrollLinkHome.client";
import ScrollLink1 from "./navlinks/ScrollLink1.client";
import ScrollLink2 from "./navlinks/ScrollLink2.client";


function Footer() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    return (
        <>
        <footer className="mainFooter">
            <div className="inside-xl lowerFooter flex-md">
                <div className="forty">
                    <div className="always-flex theLogos">
                        <PinLogo /><MainLogo />
                    </div>
                    <h4>Boathouse Cart & Bike Rental</h4>
                    <p>
                        Hartford Avenue<br/>
                        Put-in-Bay, OH 43456
                    </p>
                    <p>
                        <a href="tel:419-285-2113">419-285-2113</a><br/>
                        <a href="mailto:info@boathousecartrental.com">info@boathousecartrental.com</a>
                    </p>
                </div>
                <div className="thirty">
                    <h4>Navigation</h4>
                    <ul>
                        <li>
                            <ScrollLinkHome />
                        </li>
                        <li>
                            <ScrollLink1 />
                        </li>
                        <li>
                            <ScrollLink2 />
                        </li>
                        <li>
                            <Link to="/location">Location</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact Us</Link>
                        </li>
                        <li>
                            <button className="reserveButton" onClick={handleShow}>
                                <span>Reserve Now</span>
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="thirty">
                    <h4>Boathouse Block</h4>
                    <BoathouseBlock />
                </div>
            </div>
        </footer>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Make Reservation</Modal.Title>
            </Modal.Header>
            <Modal.Body><MainForm /></Modal.Body>
        </Modal>
        </>
    )

}
export default Footer;
