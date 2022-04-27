import React from 'react'
import { Button } from 'react-bootstrap'
import Chart from './Chart'
import VideoImg from '../images/video1.png'
import Balance from '../images/balance.png'
import Diseases from '../images/diseases.png'
import GraphImage from '../images/graph2.png'

const Moa = () => {
    return (
        <div className='moa'>
            <div className='video-card-group section-pad bg-gray-light'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='video-card'>
                            <img className='w-100' src={VideoImg} alt="video" />
                            <p className='fw-bold mt-3 fs-20 mb-0'>JYSELECA: Mechanism of Action</p>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='video-card'>
                            <img className='w-100' src={VideoImg} alt="video" />
                            <p className=' mt-3 fs-20 mb-0'><span className='fw-bold'>Striking a Balance in JAK Inhibition Featuring Dr Paqui Gonzalez Traves </span> Research Scientist, United States</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='balance section-pad'>
                <h2 className='fw-bold text-secondary text-center mb-3'>What is the role of JAK1 in RA?</h2>
                <p className='fw-bold text-center fs-18'>Balancing inhibition of proinflammatory cytokine signalling via JAK1 and limiting impact on JAK2- and JAK3-related physiological functions2,*</p>
                <img src={Balance} alt="balance" />
                <p className='fs-12 mt-3'>Image is illustrative and based on in vitro findings; clinical relevance is unknown. There are currently no head-to-head trials between JAK inhibitors.</p>
                <p className='fs-12'>* The role of JAK1 is not limited to proinflammatory cytokine signalling. These cytokines signal via JAK pairs, though they may depend predominantly on one JAK more than another for signalling. For example, IL-6 and IFN-γ both signal through JAK1/JAK2, but IL-6 may predominantly signal through JAK1, whereas IFN-γ is more dependent on JAK2.2</p>
            </div>
            <div className='diseases section-pad  bg-gray-light'>
                <h2 className='fw-bold text-secondary text-center mb-3'>JYSELECA is a JAK1-preferential inhibitor1</h2>
                <p className='fw-bold text-center fs-18'>JYSELECA has a 5-fold potency for JAK1 vs JAK2, JAK3, and TYK2 in biochemical assays1</p>
                <img src={Diseases} alt="diseases" />
                <p className='fs-12 mt-3'>The relevance of inhibition of specific JAK isoforms to therapeutic effectiveness or safety is not currently known.</p>
            </div>
            <div className='graph  section-pad'>
                <h2 className='fw-bold text-secondary text-center mb-3'>Differential cytokine impact of JAK inhibitors</h2>
                <p className='fw-bold text-center fs-18'>JYSELECA’s inhibition of JAK1-dependent cytokines IFN-α and IL-6 is comparable to other JAK inhibitors, but with less inhibition of JAK2- and JAK3-dependent cytokines2</p>
                <Button className='w-100 mb-3' variant='secondary' size="lg">Fold-increase in IC50 a across JAK-associated cytokines2</Button>
                <img src={GraphImage} alt="graph"/>
                {/* <Chart/> */}
                <p className='fs-12 mt-3'>Adapted from Traves et al.2</p>
                <p className='fs-12'>Data are based on in vitro whole-blood assays; clinical relevance is unknown. There are currently no head-to-head trials between JAK inhibitors. a IC50 indicates how much of a specific pharmacologic agent is required to inhibit a given biological activity by half.</p>
                <p className='fs-12'>b Data are normalised against IFN-α.</p>
                <p className='fs-12'><strong>References: 1.</strong> JYSELECA (filgotinib) Summary of Product Characteristics. Galapagos NV; 2022. 2. Traves PG, Murray B, Campigotto F, Galien R, Meng A, Di Paolo JA. Ann Rheum Dis. 2021;80(7):865-875. 3. Malemud CJ. Int J Mol Sci. 2017;18(3):1-9.</p>
                <p className='fs-12'><strong>4.</strong> Tan S, Xu J, Lai A, et al. Mol Med Rep. 2019;19(3):2057-2064. 5. Clark JD, Flanagan ME, Telliez JB. J Med Chem. 2014;57(12):5023-5038. 6. Schwartz DM, Kanno Y, Villarino A,
                    Ward M, Gadina M, O’Shea JJ. Nat Rev Drug Discov. 2017;16(12):843-862.</p>
                <p className='fs-12'><strong>7.</strong> Virtanen AT, Haikarainen T, Raivola J, Silvennoinen O. BioDrugs. 2019;33(1):15-32.</p>
            </div>
        </div>
    )
}

export default Moa