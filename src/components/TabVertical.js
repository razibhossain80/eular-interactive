import React from 'react'
import { Tab, Nav, Row, Col } from 'react-bootstrap'
import Moa from './Moa'
import VideoCard from './VideoCard';

const TabVertical = () => {
  return (
    <div className='tab-vertical'>
      <Tab.Container id="left-tabs-example" defaultActiveKey="experience">
        <Row>
          <Col sm={12} lg={3}>
            <Nav variant="pills" className="flex-column tab-vertical__menu">
              <h3 className='fw-bold text-secondary'>Resources</h3>
              <Nav.Item>
                <Nav.Link eventKey="experience">REAL-WORLD EXPERIENCE</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="clinicalData">CLINICAL DATA</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="moa">MOA</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="commitment">COMMITMENT TO INFLAMMATION</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={12} lg={9}>
            <Tab.Content>
              <Tab.Pane eventKey="experience">
                <VideoCard />
              </Tab.Pane>
              <Tab.Pane eventKey="clinicalData">
                <VideoCard />
              </Tab.Pane>
              <Tab.Pane eventKey="moa">
                <Moa />
              </Tab.Pane>
              <Tab.Pane eventKey="commitment">
                <VideoCard />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  )
}

export default TabVertical