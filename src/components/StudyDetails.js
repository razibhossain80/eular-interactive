import React from 'react'
import {Tabs, Tab } from 'react-bootstrap'
import Card from './Card'
import StudyImage1 from '../images/study1.svg'
import StudyImage2 from '../images/study2.svg'
import StudyImage3 from '../images/study3.svg'
import Finch from '../images/finch.png'

const StudyDetails = () => {
  return (
    <Tabs defaultActiveKey="studyDetails" id="galapagosEventModal" className="mb-3">
                        <Tab eventKey="studyDetails" title="Clinical Trial Programme">
                            <h3 className='text-secondary fw-bold'>Evaluated across a comprehensive clinical trial programme</h3>
                            <p>A solid foundation of clinical evidence in RA<sup>1-5</sup></p>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <Card>
                                        <h3 className='card__number'>3</h3>
                                        <p className='card__content'>Phase 3 trials1 FINCH 1-3</p>
                                    </Card>
                                </div>
                                <div className='col-md-4'>
                                    <Card>
                                        <h3 className='card__number'>2</h3>
                                        <p className='card__content'>Phase 2b trials2,3 DARWIN 1 and 2</p>
                                    </Card>
                                </div>
                                <div className='col-md-4'>
                                    <Card>
                                        <h3 className='card__number'>2</h3>
                                        <p className='card__content'>Long-term  DARWIN 3 and FINCH 4</p>
                                    </Card>
                                </div>
                            </div>
                            <div className='row align-items-center mt-4'>
                                <div className='col-md-8'>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <h6 className='text-secondary'>FINCH 1-3<sup>3</sup></h6>
                                            <p>Three Phase 3, randomised, double-blind,placebo-controlled studies in patients with
                                                moderate to severe active RA.</p>
                                        </div>
                                        <div className='col-md-6'>
                                            <h6 className='text-secondary'>DARWIN 3<sup>4</sup></h6>
                                            <p>Ongoing open-label extension trial of DARWIN 1 and 2 studies.</p>
                                        </div>
                                        <div className='col-md-6'>
                                            <h6 className='text-secondary'>DARWIN 1 and 2<sup>2,3</sup></h6>
                                            <p>Two Phase 2b, randomised, double-blind, placebo-controlled, dose-ranging studies in patients with moderate to severe active RA.</p>
                                        </div>
                                        <div className='col-md-6'>
                                            <h6 className='text-secondary'>FINCH 4<sup>5</sup></h6>
                                            <p>Ongoing double-blind extension trial of FINCH 1-3.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <Card cardType="overflow-number">
                                        <h3 className='card__number'>8000</h3>
                                        <p className='card__content'>patient-years of exposure6</p>
                                    </Card>
                                </div>
                            </div>
                            <p className='fs-12'>RA, rheumatoid arthritis.</p>
                            <p className='fs-12'><strong>References: 1</strong>. JYSELECA (filgotinib) Summary of Product Characteristics. Galapagos NV; 2022. 2. Westhovens R, Taylor PC, Alten R, et al. Ann Rheum Dis. 2017;76(6):998-1008. 3. Kavanaugh A, Kremer J, Ponce L, et al. Ann Rheum Dis. 2017;76(6):1009-1019. 4. Kavanaugh A, Westhovens R, Winthrop K, et al. J Rheumatol. 2021;48(8):1230-1238. 5. Long term extension study to assess the safety and efficacy of filgotinib in adults with rheumatoid arthritis (FINCH 4). Clinical trials identifier: NCT03025308. Updated January 14, 2021. Accessed January 20, 2022. https://www.clinicaltrials.gov/ct2/show/NCT03025308. 6. Winthrop K, Tanaka Y, Takeuchi T, et al. Arthritis Rheumatol. 2021;73(suppl 10).</p>
                        </Tab>
                        <Tab eventKey="studyDesign" title="Study Design">
                            <h3 className='text-secondary fw-bold'>Study design</h3>
                            <p>Three Phase 3, randomised, double-blind, placebo-controlled trials in adult patients with moderate to severe active RA.<sup>1</sup></p>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <img src={StudyImage1} alt="study details"></img>
                                    <p>Patients with inadequate response to MTX (<span>MTX-IR</span>) randomised to1:</p>
                                    <ul>
                                        <li>JYSELECA 200 mg + MTX</li>
                                        <li>JYSELECA 100 mg + MTX</li>
                                        <li>Adalimumab + MTX</li>
                                        <li>Placebo + MTX</li>
                                    </ul>
                                </div>
                                <div className='col-md-4'>
                                    <img src={StudyImage2} alt="study details"></img>
                                    <p>Patients with inadequate response to bDMARDs (<span>Biologic-IR</span>) randomised to1:</p>
                                    <ul>
                                        <li>JYSELECA 200 mg + MTX</li>
                                        <li>JYSELECA 100 mg + csDMARD</li>
                                        <li>Placebo + csDMARD</li>
                                    </ul>
                                </div>
                                <div className='col-md-4'>
                                    <img src={StudyImage3} alt="study details"></img>
                                    <p>Patients naïve to MTX therapy (<span>MTX-Naïve*</span>) randomised to1:</p>
                                    <ul>
                                        <li>JYSELECA 200 mg + MTX</li>
                                        <li>JYSELECA 100 mg + MTX</li>
                                        <li>JYSELECA 200 mg monotherapy</li>
                                        <li>MTX alone</li>

                                    </ul>
                                </div>
                            </div>
                            <p className='fs-12'>ACR, American College of Rheumatology; bDMARD, biologic disease-modifying antirheumatic drug; csDMARD, conventional synthetic disease-modifying antirheumatic drug; DMARD, disease-modifying antirheumatic drug; IR, intolerance or inadequate response; MTX, methotrexate; RA, rheumatoid arthritis.</p>
                            <p className='fs-12'>* JYSELECA is not indicated for use in DMARD-naïve patients.</p>
                            <p className='fs-12'><strong>Reference:</strong> 1. JYSELECA (filgotinib) Summary of Product Characteristics. Galapagos NV; 2022.</p>
                        </Tab>
                        <Tab eventKey="primaryEndpoint" title="Primary Endpoint">
                            <h3 className='text-secondary fw-bold'>JYSELECA met its primary endpoint of ACR20 across all Phase 3 trials1</h3>
                            <p>Across all Phase 3 trials, JYSELECA demonstrated significant ACR20 response at Week 12 (FINCH 1 and FINCH 2) and Week 24 (FINCH 3) vs placebo + MTX, placebo + csDMARD, or MTX alone.1</p>
                            {/* <div className='row'>
                                <div className='col-md-4'>
                                    <img src={Finch1} alt="finch1"></img>
                                </div>
                                <div className='col-md-4'>
                                    <img src={Finch2} alt="finch2"></img>
                                </div>
                                <div className='col-md-4'>
                                    <img src={Finch3} alt="finch3"></img>
                                </div>
                            </div> */}
                             <img src={Finch} alt="finch"></img>
                            <p className='fs-12 mt-3'>a JYSELECA is not indicated for use in DMARD-naïve patients.</p>
                            <p className='fs-12'>*** P ≤ .001 vs placebo + MTX, placebo + csDMARD, or MTX alone.</p>
                            <p className='fs-12'>ACR, American College of Rheumatology; bDMARD, biologic disease-modifying antirheumatic drug; csDMARD, conventional synthetic disease-modifying antirheumatic drug; DMARD, disease-modifying antirheumatic drug; IR, intolerance or inadequate response; MTX, methotrexate; RA, rheumatoid arthritis.</p>
                            <p className='fs-12'><strong>Reference: 1.</strong> JYSELECA (filgotinib) Summary of Product Characteristics. Galapagos NV; 2022.</p>
                        </Tab>
                    </Tabs>
  )
}

export default StudyDetails