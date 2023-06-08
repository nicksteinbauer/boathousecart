import { useState } from 'react'

import { Link } from '@shopify/hydrogen';

import Modal from 'react-bootstrap/Modal';
// import { Button } from 'react-bootstrap';

import MainForm from '../MainForm.client';

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
                    <Link href='' to='/products'>
                        <span>Products</span>
                    </Link>
                </li>
                <li className="flex-vertical">
                    <Link href='' to='/location'>
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
                <Modal.Title>Make Reservation</Modal.Title>
                </Modal.Header>
                <Modal.Body><MainForm /></Modal.Body>
            </Modal>
            </>
        )
    
}

export default MenuInterior

