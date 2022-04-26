import React from 'react'

const Events = () => {
    return (
        <div className="events px-4 py-5">
            <h2 className='color-green-dark fw-bold'>Galapagos at EULAR</h2>
            <p className='mb-4'>We look forward to seeing you at the following events</p>
            <div className='row'>
                <div className='col-md-6'>
                    <h2 className="color-green-dark fw-bold">June 2022</h2>
                    <hr />
                    <div className='row'>
                        <div className='col-md-2'>
                            <h1 className='color-green-dark fw-bold mb-0'>01</h1>
                            <span className='color-warning fw-bold'>WED</span>
                        </div>
                        <div className='col-md-10'>
                            <h4 className='fw-bold color-warning'>15:45 - 16:15 CEST</h4>
                            <h4 className='color-green-dark fw-bold'>Patient-centred care in RA: cutting through the jargon</h4>
                            <p><span className='fw-bold color-warning'>Dr Lars Erik Kristensen</span> The Parker Institute, Copenhagen University Hospital, Copenhagen, Denmark</p>
                            <h6 className='color-green-dark'>Learning objectives</h6>
                            <ul className='bullet-warning'>
                                <li>Review the <span className='fw-bold color-warning'>unmet needs</span> experienced by patients with RA and the importance of a comprehensive approach to care</li>
                                <li>Explore the role of <span className='fw-bold color-warning'>JAK inhibitors</span>  in addressing unmet needs for patients with RA</li>
                                <li>Consider how to facilitate a <span className='fw-bold color-warning'>comprehensive approach to patient care</span>  and discuss any potential barriers to clinical implementation</li>
                                <li >Discuss how to integrate concrete steps towards <span className='fw-bold'>shared decision-making</span>  in RA</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <h2 className="color-green-dark fw-bold">June 2022</h2>
                    <hr />
                    <div className='row'>
                        <div className='col-md-2'>
                            <h1 className='color-green-dark fw-bold mb-0'>02</h1>
                            <span className='color-warning fw-bold'>THURS</span>
                        </div>
                        <div className='col-md-10'>
                            <h4 className='fw-bold color-warning'>17:30 - 18:45 CEST</h4>
                            <h4 className='color-green-dark fw-bold'>Evolving patient care in RA: can JAK inhibitors meet patient and physician expectations for RA therapy with</h4>
                            <p className='mb-0'><span className='fw-bold color-warning'>Prof. Roberto Caporali</span> University of Milan, Milan, Italy</p>
                            <p className='mb-0'><span className='fw-bold color-warning'>Prof. Bruno Feutrel</span> Pitié-Salpêtrière Hospital, Paris, France</p>
                            <p><span className='fw-bold color-warning'>Dr James Galloway</span> King’s College London, London, UK</p>
                            <h6 className='color-green-dark'>Learning objectives</h6>
                            <ul className='bullet-warning'>
                                <li>Explore <span className='fw-bold color-warning'>efficacy and safety goals</span> patients and physicians in the treatment of RA</li>
                                <li>Explore the <span className='fw-bold color-warning'>efficacy and safety profiles of JAK inhibitors</span>  , including data from the filgotinib clinical trial programme</li>
                                <li>Review the importance of a <span className='fw-bold color-warning'>comprehensive management approach</span>  for patients with RA</li>
                                <li >Discuss how to optimally <span className='fw-bold'>align patient and physician treatment goals</span>  to achieve favourable outcomes in RA</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Events