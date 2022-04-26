import React from 'react'
import ImgPatient from '../images/patient.png'

const PatientCard = () => {
    return (
        <div className='patient-card'>
            <div className='row align-items-end'>
                <div className='col-md-12 col-lg-8'>
                    <div className='patient-card__content'>
                        <h4 className='text-secondary fw-bold'>Once-daily dosing <sup>1</sup></h4>
                        <ul className='list-blue-arrow'>
                            <li>Recommended dose: 200 mg daily* with MTX or as monotherapy</li>
                            <li>100 mg available for patients with moderate or severe renal impairment (CrCl 15 to 60 mL/min)† and as a starting dose for patients ≥75 years</li>
                        </ul>
                        <h4 className='text-secondary fw-bold'>Low risk of drug-drug interactions <sup>1</sup></h4>
                        <ul>
                            <li>JYSELECA is the <strong>only JAK inhibitor</strong> that is not metabolised through CYP450 <sup>1,3-5</sup></li>
                        </ul>
                        <h4 className='text-secondary fw-bold'>Easy-to-open bottle cap<sup>6</sup></h4>
                    </div>
                </div>
                <div className='col-md-12 col-lg-4'>
                    <img src={ImgPatient} alt="patient" />
                </div>
            </div>
        </div>
    )
}

export default PatientCard