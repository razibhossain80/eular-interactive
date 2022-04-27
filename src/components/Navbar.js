import React from 'react'
import { Link } from 'gatsby'
import { useState, forwardRef } from 'react'
import { Button, Modal } from 'react-bootstrap'
import Events from './Events'
import Pi from './Pi'
import StudyDetails from './StudyDetails'
import Logo from '../images/jyseleca.png'
import HomeImage from '../images/home.svg'
import EventImage from '../images/event.svg'
import ResourcesImage from '../images/resources.svg'


const Navbar = (props, navbarRef) => {
    const [eventModalShow, setEventModalShow] = useState(false);
    const handleEventModalClose = () => setEventModalShow(false);
    const handleEventModalShow = () => setEventModalShow(true);

    const [studyModalShow, setStudyModalShow] = useState(false);
    const handleStudyModalClose = () => setStudyModalShow(false);
    const handleStudyModalShow = () => setStudyModalShow(true);

    const [piModalShow, setPiModalShow] = useState(false);
    const handlePiModalClose = () => setPiModalShow(false);
    const handlePiModalShow = () => setPiModalShow(true);
    return (
        <>
            <div className='navbar' ref={navbarRef}>
                <div className='navbar__inner'>
                    <Link to="/" className='btn btn-primary btn-md'>
                        <img src={HomeImage} alt="home"/>
                        Home</Link>
                    <Button variant='primary' size="md" onClick={handleEventModalShow} className={eventModalShow ? "modal-active" : ""}><img src={EventImage} alt="event"/>GALAPAGOS EVENT SCHEDULE</Button>
                    <Link to="/explore" className='btn btn-primary btn-md'>
                        <img src={ResourcesImage} alt="resources"/>
                        Resources</Link>
                    <div className='copyright fs-12'>
                        JYSELECA, GALAPAGOS, and the GALAPAGOS logo are registered trademarks of Galapagos NV. © 2022 Galapagos NV. All rights reserved.GL-RA-JY-XXXXXX-XXXXX XX/22
                    </div>
                    <Button variant='primary' size="md" onClick={handleStudyModalShow}
                        className={`text-center justify-content-center ${studyModalShow ? "modal-active" : ""}`}>STUDY DETAILS</Button>
                    <Button variant='primary' size="md" onClick={handlePiModalShow}
                        className={`text-center justify-content-center ${piModalShow ? "modal-active" : ""}`}>PI</Button>
                    <img src={Logo} className="logo" alt="logo"></img>
                </div>
            </div>
            <Modal show={eventModalShow} onHide={handleEventModalClose} backdrop="static" size="lg" centered>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <Events />
                </Modal.Body>
            </Modal>
            <Modal show={studyModalShow} onHide={handleStudyModalClose} backdrop="static" size="lg" centered>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <StudyDetails />
                </Modal.Body>
            </Modal>
            <Modal show={piModalShow} onHide={handlePiModalClose} backdrop="static" size="lg" centered>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <Pi />
                </Modal.Body>
            </Modal>

        </>
    )
}
const forwaredNavbar = forwardRef(Navbar)
export default forwaredNavbar