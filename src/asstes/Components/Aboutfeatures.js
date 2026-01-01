import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { CiFlag1 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { SlDirections } from "react-icons/sl";
import { SlCompass } from "react-icons/sl";

function Aboutfeatures({subtitle, title, description, cardtitle1, desc1, cardtitle2, desc2, cardtitle3, desc3, cardtitle4, desc4}) {
    return (
        <>
            <Container>
                <section className='page-section'>
                    <div className="steps-container">

                        {/* Subtitle */}
                        <p className="subtitle">{subtitle}</p>

                        {/* Title */}
                        <h2 className="title">
                           {title}
                        </h2>

                        {/* Description */}
                        <p className="text">
                            {description}
                        </p>

                        {/* Steps Grid */}

                        <div className="steps-grid">
                            <div className='row'>
                                <div className='col-lg-3 col-sm-6 col-md-6 mb-4'>
                                    {/* Card 1 */}
                                    <div className="step-card">
                                        <CiFlag1 size={70} className='mb-3' />
                                        <h3 style={{ fontSize: '22px' }}>{cardtitle1}</h3>
                                        <p style={{ fontSize: '20px' }}>{desc1}</p>
                                        <p className='theme mb-0 text-start'>100+ Reviews</p>
                                    </div>
                                </div>
                                <div className='col-lg-3 col-sm-6 col-md-6 mb-4'>
                                    {/* Card 2 */}
                                    <div className="step-card">
                                        <CiLocationOn size={70} className='mb-3' />
                                        <h3 style={{ fontSize: '22px' }}>{cardtitle2}</h3>
                                        <p style={{ fontSize: '20px' }}>{desc2}</p>
                                        <p className='theme mb-0 text-start'>100+ Reviews</p>
                                    </div>
                                </div>
                                <div className='col-lg-3 col-sm-6 col-md-6 mb-4'>
                                    {/* Card 3 */}
                                    <div className="step-card">
                                        <SlDirections size={70} className='mb-3' />
                                        <h3 style={{ fontSize: '22px' }}>{cardtitle3}</h3>
                                        <p style={{ fontSize: '20px' }}>{desc3}</p>
                                        <p className='theme mb-0 text-start'>100+ Reviews</p>
                                    </div>
                                </div>
                                <div className='col-lg-3 col-sm-6 col-md-6 mb-4'>
                                    {/* Card 4 */}
                                    <div className="step-card">
                                        <SlCompass size={70} className='mb-3' />
                                        <h3 style={{ fontSize: '22px' }}>{cardtitle4}</h3>
                                        <p style={{ fontSize: '20px' }}>{desc4}</p>
                                        <p className='theme mb-0 text-start'>100+ Reviews</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </Container>



        </>
    )
}

export default Aboutfeatures
