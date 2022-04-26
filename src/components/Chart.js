import React from 'react'
import Button from "react-bootstrap/button"
import Graph from '../images/graph.png'

const Chart = () => {
    return (
        <div className='chart'>
            <div className="graph-info">
                <div className="graph-info__item">
                    <span className="bullet bg-primary-gradient"></span>
                    JYSELECA
                </div>
                <div className="graph-info__item">
                    <span className="bullet bg-gray-dark"></span>
                    Baricitinib
                </div>
                <div className="graph-info__item">
                    <span className="bullet bg-gray-darker"></span>
                    Tofacitinib
                </div>
                <div className="graph-info__item">
                    <span className="bullet bg-gray"></span>
                    Upadacitinib
                </div>
            </div>
            <div className='chart-buttons'>
                <Button variant="light" size="lg" className='me-3'  style={{maxWidth: '250px'}}>JAK1 inhibition reduces inflammation in RA</Button>
                <Button variant="light" size="lg">Pan-JAK inhibition may affect normal physiological functions</Button>
            </div>
            <div className="graph">
                <img src={Graph} alt='graph' />
            </div>
            <div className='chart-buttons bottom-chart-buttons justify-content-between'>
                <Button variant="light" size="lg" className='me-3 fs-14'>Inflammation and innate immune responses</Button>
                <Button variant="light" size="lg" className='me-3 fs-14'>Innate antiviral defence</Button>
                <Button variant="light" size="lg" className='me-3 fs-14'>Lymphocyte proliferation and homeostasis</Button>
                <Button variant="light" size="lg" className='fs-14'>Erythropoiesis, myelopoiesis, and platelet production</Button>
            </div>
        </div>
    )
}

export default Chart