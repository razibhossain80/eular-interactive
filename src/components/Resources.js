import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import TabVertical from './TabVertical'
import PatientCard from './PatientCard'
import Card from './Card'
import HeroImage from '../images/lion-dt.jpg'

const Resources = () => {
  return (
    <div className='carousel-wrap'>
    <Carousel variant="dark" interval={null}>
        <Carousel.Item>
          <div className='carousel-item__inner first-slide'>
            <h3 className='fw-bold text-secondary'>Strong RA therapy across all key clinical outcomes<sup>1,2</sup></h3>
            <p>With JYSELECA 200 mg + MTX at Week 24<sup>1:</sup></p>
            <div className='card-group'>
              <div className='row'>
                <div className='col-md-6'>
                  <Card cardType="overflow-number">
                    <h3 className='card__number'>58%</h3>
                    <p className='card__content'>of patients achieved <strong>ACR50</strong> vs 52% with adalimumab + MTX</p>
                  </Card>
                </div>
                <div className='col-md-6'>
                  <Card cardType="overflow-number">
                    <h3 className='card__number'>36% <sup>$</sup></h3>
                    <p className='card__content'>of patients achieved <strong>ACR70</strong> vs 30% with adalimumab + MTX</p>
                  </Card>
                </div>
                <div className='col-md-6'>
                  <Card cardType="overflow-number">
                    <h3 className='card__number'>88%</h3>
                    <p className='card__content'>of patients had <strong>no radiographic progression</strong> vs 86% with adalimumab + MTX</p>
                  </Card>
                </div>
                <div className='col-md-6'>
                  <Card cardType="overflow-number">
                    <h3 className='card__number'>48% <sup>$$$</sup></h3>
                    <p className='card__content'>of patients achieved <strong>remission</strong>  (DAS28-CRP 2.6) vs 36% with adalimumab + MTX</p>
                  </Card>
                </div>
              </div>
            </div>
            <h3 className='fw-bold mt-5'>JYSELECA achieved nominally significant improvements vs adalimumab across key clinical outcomes<sup>1</sup>,*</h3>
            <p className='fs-12 mb-0'>ACR, American College of Rheumatology; CRP, C-reactive protein; DAS28, Disease Activity Score 28 joints; IR, inadequate response; MTX, methotrexate; RA, rheumatoid arthritis.
              § P ≤ .05, §§§ P ≤ .001 vs adalimumab + MTX (nominal P values).</p>
            <p className='fs-12 mb-0'>* Patients in the study were MTX-IR. The FINCH 1 trial was not powered to detect superiority of JYSELECA vs adalimumab for ACR responses, radiographic progression, or remission.</p>
            <p className='fs-12 mb-0'><strong>References: 1.</strong> JYSELECA (filgotinib) Summary of Product Characteristics. Galapagos NV; 2022. 2. Combe B, Kivitz A, Tanaka Y, et al. Ann Rheum Dis. 2021;80(7):848-858.</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='carousel-item__inner second-slide'>
            <h3 className='fw-bold text-secondary'>JAK1-preferential inhibitor with a proven safety profile<sup>1-5,*</sup></h3>
            <ul className='list-blue-arrow'>
              <li>Generally well tolerated1</li>
              <li>Low rates of JAKi-associated AEs, including serious infections,</li>
              <li>herpes zoster, and VTE, similar to adalimumab2,4,*</li>
              <li>Consistent safety profile up to 6.8 years5</li>
            </ul>
            <p>Throughout 1 year of treatment with JYSELECA6:</p>
            <div className='row'>
              <div className='col-md-6 col-xl-4'>
                <Card cardType="overflow-number">
                  <h3 className='card__number'>3.0/100py</h3>
                  <p className='card__contet'>Serious infections EAIR vs 3.4/100 PY adalimumab + MTX</p>
                </Card>
              </div>
              <div className='col-md-6 col-xl-4'>
                <Card cardType="overflow-number">
                  <h3 className='card__number'>1.2/100py</h3>
                  <p className='card__contet'>Herpes zoster EAIR vs 0.7/100 PY adalimumab + MTX</p>
                </Card>
              </div>
              <div className='col-md-6 col-xl-4'>
                <Card cardType="overflow-number">
                  <h3 className='card__number'>0.2/100py</h3>
                  <p className='card__contet'>VTE EAIR vs 0.3/100 PY adalimumab + MTX</p>
                </Card>
              </div>
            </div>
            <p className='fs-12 mt-5'>AE, adverse event; EAIR, exposure-adjusted incidence rate; JAK, Janus kinase; JAKi, Janus kinase inhibitor; MTX, methotrexate; PY, patient-years; VTE, venous thromboembolism. * The most frequently reported adverse reactions were nausea (3.5%), upper respiratory tract infection (3.3%), urinary tract infection (1.7%), and dizziness (1.2%).1</p>
            <p className='fs-12'><strong>References: 1.</strong> JYSELECA (filgotinib) Summary of Product Characteristics. Galapagos NV; 2022. 2. Combe B, Kivitz A, Tanaka Y, et al. Ann Rheum Dis. 2021;80(7):848-858. 3. Committee for Medicinal Products for Human Use (CHMP). Jyseleca Assessment Report. European Medicines Agency; 2020:1-170.4. Genovese MC, Winthrop K, Tanaka Y, et al. Ann Rheum Dis. 2020;79:324-325. 5. Winthrop K, Tanaka Y, Takeuchi T, et al. Arthritis Rheumatol. 2021;73(suppl 10). 6. Data on file. Galapagos NV; 2019.
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='carousel-item__inner third-slide'>
            <h3 className='text-secondary fw-bold mb-5'>A convenient dosing regimen <sup>1,2</sup></h3>
            <PatientCard/>
            <p className='fs-12 mt-5'>Combining JYSELECA with other potent immunosuppressants such as ciclosporin, tacrolimus, biologics, or other JAK inhibitors is not recommended, as a risk of additive immunosuppression cannot be excluded.1 * No dose adjustment required in patients with mild renal impairment or mild or moderate hepatic impairment (Child-Pugh A or B). † JYSELECA has not been studied in patients with end-stage renal disease (CrCl 15 mL/min) or in patients with severe hepatic impairment</p>
            <p className='fs-12'><strong>References: 1.</strong> JYSELECA (filgotinib) Summary of Product Characteristics. Galapagos NV; 2022. 2. Taylor PC, Betteridge N, Brown TM, et al. Patient Prefer Adherence. 2020;14:119-131. 3. RINVOQ (upadacitinib) Summary of Product Characteristics. AbbVie Inc.; 2021. 4. XELJANZ (tofacitinib) Summary of Product Characteristics. Pfizer Inc.; 2021. 5. OLUMIANT (baricitinib) Summary of Product Characteristics. Eli Lilly and Company; 2021. 6. Data on file. Galapagos NV; 2019.</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='carousel-item__inner forth-slide' style={{ backgroundImage: `url(${HeroImage})` }}>
            <div className='hero-header'>
              <div className='container-fluid hero-header__inner w-100'>
                <div className='row aligin-items-center'>
                  <div className='col-md-12 col-xl-6 offset-xl-6'>
                    <div className='hero-header__content'>
                      <h1>STRENGTH <em className='fw-normal'>of</em> BALANCE</h1>
                      <ul className='list-blue-arrow arrow-large'>
                        <li>Second-generation, JAK1-preferential inhibitor<sup>1</sup></li>
                        <li>Strong RA therapy <sup>1,2</sup></li>
                        <li>Proven safety profile <sup>1-5,*</sup></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-12'>
                    <p className='fw-500 fs-12 mb-0'>JAK, Janus kinase; RA, rheumatoid arthritis.</p>
                    <p className='fw-500 fs-12 mb-0'>* The most frequently reported adverse reactions were nausea (3.5%), upper respiratory tract infection (3.3%), urinary tract infection (1.7%), and dizziness (1.2%).1</p>
                    <p className='fw-500 fs-12 mb-0'><strong>Reference 1.</strong> JYSELECA (filgotinib) Summary of Product Characteristics. Galapagos NV; 2022. 2. Combe B, Kivitz A, Tanaka Y, et al. Ann Rheum Dis. 2021;80(7):848-858. 3. Committee for Medicinal Products for Human Use (CHMP). Jyseleca Assessment Report. European Medicines Agency; 2020:1-170. 4. Genovese MC, Winthrop K, Tanaka Y, et al. Ann Rheum Dis. 2020;79:324-325. 5. Winthrop K, Tanaka Y, Takeuchi T, et al. Arthritis Rheumatol. 2021;73(suppl 10).</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='carousel-item__inner fifth-slide'>
            <TabVertical/>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Resources