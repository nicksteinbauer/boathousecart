import { useState } from 'react'

import { Link } from '@shopify/hydrogen';

import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

    function MenuInterior() {


    

        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
            <>
            <ul className="flex-md navUl">
                <li className="flex-vertical">
                    <Link href='' to='/about'>
                        <span>About</span>
                    </Link>
                </li>
                <li className="flex-vertical">
                    <Link href='' to='/rates'>
                        <span>Rates</span>
                    </Link>
                </li>
                <li className="flex-vertical">
                    <Link href='' to='/contact'>
                        <span>Location</span>
                    </Link>
                </li>
                <li className="flex-vertical">
                    <Link href='' to='/contact'>
                        <span>Contact Us</span>
                    </Link>
                </li>
                <li className="flex-vertical">
                    <button className="reserveButton" onClick={handleShow}>
                        <span>Reserve Now</span>
                    </button>
                </li>
            </ul>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <button variant="secondary" onClick={handleClose}>
                    Close
                </button>
                </Modal.Footer>
            </Modal>
            </>
        )
    
}

export default MenuInterior

