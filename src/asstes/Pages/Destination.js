import React from 'react'
import '../../App.css'
import Container from 'react-bootstrap/esm/Container'
import Exploretravel from '../Components/Exploretravel'
import Partners from '../Components/Partners'
import { Link } from 'react-router-dom'


function Destination() {
    return (
        <>

            {/* top-inherit */}
            <section className='breadcrumb-main' >
                <div className='section-shape section-shape1  bottom-0'></div>
                <div className='breadcrumb-outer'>
                    <div className='about-section'>
                        <div className='breadcrumb-content text-center'>
                            <h1 className='page-title'>DESTINATION</h1>
                            <nav className='d-block '>
                                <ul className='breadcrumb'>
                                    <li className='breadcrumb-item'><Link to="/">Home</Link></li>
                                    <li className='breadcrumb-item '>Destination</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <Container>
                <section className='page-section'>
                    <div className='steps-container'>
                        {/* Subtitle */}
                        <p className="subtitle">Top Destinations</p>

                        {/* Title */}
                        <h2 className="title">
                            Find <span>Explore Top Destinations</span>
                        </h2>

                        {/* Description destination-img */}
                        <p className="text">
                            Grab amazing travel offers and plan your dream getaway at unbeatable prices. Don’t miss out!
                        </p>
                        {/* row 1 */}
                        <div className='row mb-2'>
                            <div className='col-lg-4 col-md-6 col-sm-12 mb-2'>
                                <div className='card card-overlay trend-item1'>
                                    <div className='trend-image position-relative rounded'>
                                        <img
                                            src={require('../image/destination17.jpg')}
                                            alt='travel image'
                                            className='w-100'
                                        />

                                        {/* Overlay DIV */}
                                        <div className="overlay"></div>

                                        {/* Trend content stays the same */}
                                        <div className='trend-content1 d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100'>
                                            <div className='trend-content-title text-start'>
                                                <h5 className='theme1 mb-0'>Italy</h5>
                                                <h3 className='explore-title mb-0'>Caspian Valley</h3>
                                            </div>
                                            <div className='explore'><Link to='/Destinationdetail' className='exp-btn'>Read More</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-4 col-md-6 col-sm-12 mb-2'>
                                <div className='card card-overlay trend-item1'>
                                    <div className='trend-image position-relative rounded'>
                                        <img src={require('../image/destination14.jpg')} alt='travel image' className='' />
                                        <div className="overlay"></div>
                                        <div className='trend-content1 d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index'>
                                            <div className='trend-content-title text-start'>
                                                <h5 className='theme1 mb-0'>Tokyo</h5>
                                                <h3 className='explore-title mb-0'>Japan</h3>
                                            </div>
                                            <div className='explore'><Link to='/Destinationdetail' className='exp-btn'>Read More</Link></div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-12 mb-2'>
                                <div className='card card-overlay trend-item1'>
                                    <div className='trend-image position-relative rounded'>
                                        <img src={require('../image/destination15.jpg')} alt='travel image' className='' />
                                        <div className="overlay"></div>
                                        <div className='trend-content1 d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index'>
                                            <div className='trend-content-title text-start'>
                                                <h5 className='theme1 mb-0'>Moscow</h5>
                                                <h3 className='explore-title mb-0'>Russia</h3>
                                            </div>
                                            <div className='explore'><Link to='/Destinationdetail' className='exp-btn'>Read More</Link></div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* </div> */}

                            {/* row 2 */}
                            {/* <div className='row mb-2'> */}
                            <div className='col-lg-4 col-md-6 col-sm-12 mb-2'>
                                <div className='card card-overlay trend-item1'>
                                    <div className='trend-image position-relative rounded'>
                                        <img src={require('../image/destination5.jpg')} alt='travel image' className='' />
                                        <div className="overlay"></div>
                                        <div className='trend-content1 d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index'>
                                            <div className='trend-content-title text-start'>
                                                <h5 className='theme1 mb-0'>Bangkok</h5>
                                                <h3 className='explore-title mb-0'>Thailand</h3>
                                            </div>
                                            <div className='explore'><Link to='/Destinationdetail' className='exp-btn'>Read More</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-12 mb-2'>
                                <div className='card card-overlay trend-item1'>
                                    <div className='trend-image position-relative rounded'>
                                        <img src={require('../image/destination16.jpg')} alt='travel image' className='' />
                                        <div className="overlay"></div>
                                        <div className='trend-content1 d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index'>
                                            <div className='trend-content-title text-start'>
                                                <h5 className='theme1 mb-0'>Florida</h5>
                                                <h3 className='explore-title mb-0'>America</h3>
                                            </div>
                                            <div className='explore'><Link to='/Destinationdetail' className='exp-btn'>Read More</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-12 mb-2'>
                                <div className='card card-overlay trend-item1'>
                                    <div className='trend-image position-relative rounded'>
                                        <img src={require('../image/destination4.jpg')} alt='travel image' className='' />
                                        <div className="overlay"></div>
                                        <div className='trend-content1 d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index'>
                                            <div className='trend-content-title text-start'>
                                                <h5 className='theme1 mb-0'>Bali</h5>
                                                <h3 className='explore-title mb-0'>Indonesia</h3>
                                            </div>
                                            <div className='explore'><Link to='/Destinationdetail' className='exp-btn'>Read More</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* </div> */}

                            {/* row 3 */}
                            {/* <div className='row mb-2'> */}
                            <div className='col-lg-4 col-md-6 col-sm-12 mb-2'>
                                <div className='card card-overlay trend-item1'>
                                    <div className='trend-image position-relative rounded'>
                                        <img src={require('../image/destination10.jpg')} alt='travel image' className='' />
                                        <div className="overlay"></div>
                                        <div className='trend-content1 d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index'>
                                            <div className='trend-content-title text-start'>
                                                <h5 className='theme1 mb-0'>Italy</h5>
                                                <h3 className='explore-title mb-0'>Caspian Valley</h3>
                                            </div>
                                            <div className='explore'><Link to='/Destinationdetail' className='exp-btn'>Read More</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-12 mb-2'>
                                <div className='card card-overlay trend-item1'>
                                    <div className='trend-image position-relative rounded'>
                                        <img src={require('../image/destination11.jpg')} alt='travel image' className='' />
                                        <div className="overlay"></div>
                                        <div className='trend-content1 d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index'>
                                            <div className='trend-content-title text-start'>
                                                <h5 className='theme1 mb-0'>Tokyo</h5>
                                                <h3 className='explore-title mb-0'>Japan</h3>
                                            </div>
                                            <div className='explore'><Link to='/Destinationdetail' className='exp-btn'>Read More</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-12 mb-2'>
                                <div className='card card-overlay trend-item1'>
                                    <div className='trend-image position-relative rounded'>
                                        <img src={require('../image/destination7.jpg')} alt='travel image' className='' />
                                        <div className="overlay"></div>
                                        <div className='trend-content1 d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index'>
                                            <div className='trend-content-title text-start'>
                                                <h5 className='theme1 mb-0'>Moscow</h5>
                                                <h3 className='explore-title mb-0'>Russia</h3>
                                            </div>
                                            <div className='explore'><Link to='/Destinationdetail' className='exp-btn'>Read More</Link></div>
                                        </div></div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

            </Container>
            <Exploretravel />
            <Partners />


        </>
    )
}

export default Destination
