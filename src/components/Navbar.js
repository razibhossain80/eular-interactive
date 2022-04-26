import React from 'react'
import { useState, forwardRef } from 'react'
import { Button, Modal } from 'react-bootstrap'
import Resources from './Resources'
import Events from './Events'
import Pi from './Pi'
import StudyDetails from './StudyDetails'
import Logo from '../images/jyseleca.png'


const Navbar = (props, navbarRef) => {
    const [eventModalShow, setEventModalShow] = useState(false);
    const handleEventModalClose = () => setEventModalShow(false);
    const handleEventModalShow = () => setEventModalShow(true);

    const [resourcesModalShow, setResourcesModalShow] = useState(false);
    const handleResourcesModalClose = () => setResourcesModalShow(false);
    const handleResourcesModalShow = () => setResourcesModalShow(true);

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
                    <Button variant='primary' size="md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                        <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                    </svg>Home</Button>
                    <Button variant='primary' size="md" onClick={handleEventModalShow} className={handleEventModalShow ? "modal-active" : ""}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar4" viewBox="0 0 16 16">
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z" />
                    </svg>GALAPAGOS EVENT SCHEDULE</Button>
                    <Button variant='primary' size="md" onClick={handleResourcesModalShow} className={handleResourcesModalShow ? "modal-active" : ""}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-grid" viewBox="0 0 16 16">
                        <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
                    </svg>RESOURCES</Button>
                    <div className='copyright fs-12'>
                        JYSELECA, GALAPAGOS, and the GALAPAGOS logo are registered trademarks of Galapagos NV. © 2022 Galapagos NV. All rights reserved.GL-RA-JY-XXXXXX-XXXXX XX/22
                    </div>
                    <Button variant='primary' size="md" onClick={handleStudyModalShow}
                        className={`text-center justify-content-center ${handleStudyModalShow ? "modal-active" : ""}`}>STUDY DETAILS</Button>
                    <Button variant='primary' size="md" onClick={handlePiModalShow}
                        className={`text-center justify-content-center ${handlePiModalShow ? "modal-active" : ""}`}>PI</Button>
                    <img src={Logo} alt="logo"></img>
                </div>
            </div>
            <Modal show={eventModalShow} onHide={handleEventModalClose} backdrop="static" size="lg" centered>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <Events />
                </Modal.Body>
            </Modal>
            <Modal show={resourcesModalShow} onHide={handleResourcesModalClose} backdrop="static" size="lg" centered>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div className='modal-body__inner'>
                        <Resources />
                    </div>
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