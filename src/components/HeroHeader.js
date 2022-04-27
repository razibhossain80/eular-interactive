import React from 'react'
import {Link} from 'gatsby'
import { Button } from 'react-bootstrap'
import HeroImage from '../images/lion-dt.jpg'
import TitleImage from '../images/title.png'
import ArrowNextImage from '../images/arrow-next.png'

const HeroHeader = () => {
  return (
    <div className='hero-header' style={{backgroundImage: `url(${HeroImage})`}}>
        <div className='container-fluid hero-header__inner'>
            <div className='row aligin-items-center'>
                <div className='col-md-12 col-xl-6 offset-xl-6'>
                    <div className='hero-header__content'>
                      <img src={TitleImage} alt="title"/>
                        {/* <h1>STRENGTH <em className='fw-normal'>of</em> BALANCE</h1> */}
                        <p className='fw-bold fs-22'>Strong RA therapy with a proven safety profile</p>
                        <p className='fw-500'>JYSELECA is indicated for the treatment of moderate to severe active rheumatoid arthritis in adult patients who have responded inadequately to, or who are intolerant to one or more disease-modifying antirheumatic drugs (DMARDs). JYSELECA may be used as monotherapy or in combination with methotrexate (MTX).1</p>
                        <p className='fw-500'>Reporting suspected adverse reactions after authorisation of the medicinal product is important. It allows continued monitoring of the benefit/risk balance of the medicinal product. Healthcare professionals are asked to report any suspected adverse reactions via the national reporting systems and to DrugSafety.Global@glpg.com.</p>
                        <Link to="/explore" className='w-100 btn btn-secondary btn-lg'>EXPLORE HOW JYSELECA HELP YOUR PATIENTS</Link>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <p className='fw-500 fs-12 mb-0'>RA, rheumatoid arthritis.</p>
                    <p className='fw-500 fs-12 mb-0'>* The most frequently reported adverse reactions were nausea (3.5%), upper respiratory tract infection (3.3%), urinary tract infection (1.7%), and dizziness (1.2%).1 Reference: 1. JYSELECA (filgotinib) Summary of Product Characteristics. Galapagos NV; 2022.</p>
                    <p className='fw-500 fs-12 mb-0'>Materials have been prepared for an international audience and are intended for healthcare professionals, excluding those from France. JYSELECA is approved but not reimbursed in Denmark. Data are correct as of 01/06/2022.</p>
                </div>
            </div>
        </div>
            <Link className='arrow-next-wrap' to="/">
                <img src={ArrowNextImage}></img>
            </Link>
    </div>
  )
}

export default HeroHeader