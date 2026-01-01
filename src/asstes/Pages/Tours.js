import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineStarPurple500 } from "react-icons/md";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import Exploretravel from '../Components/Exploretravel';
import Partners from '../Components/Partners';

function Tours() {
    var settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <section className='breadcrumb-main' >
                <div className='section-shape section-shape1  bottom-0'></div>
                <div className='breadcrumb-outer'>
                    <div className='about-section'>
                        <div className='breadcrumb-content text-center'>
                            <h1 className='page-title'>TOURS </h1>
                            <nav className='d-block '>
                                <ul className='breadcrumb'>
                                    <li className='breadcrumb-item'><Link to="/">Home</Link></li>
                                    <li className='breadcrumb-item '>Tours</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <Container>
                <section className='trending pt-6 pb-0 bg-lgrey page-section'>
                    <div className='row'>
                        <div className='col-lg-8 mb-4'>
                            <div className='list-results d-flex align-items-center justify-content-between'>
                                <div className='list-results-sort'>
                                    <p className='m-0'>Showing 1-5 of 80 results</p>

                                </div>
                            </div>
                            <div className='destination-list'>
                                {/*  card 1 */}
                                <div className='trend-full bg-white rounded box-shadow overflow-hidden p-4 mb-4'>
                                    <div className='row'>
                                        <div className='col-lg-4 col-md-3'>
                                            <div className='trend-item2 rounded'>
                                                <img src={require('../image/destination17.jpg')} alt='tour image1' />
                                            </div>
                                        </div>
                                        <div className='col-lg-5 col-md-6'>
                                            <div className='trend-content position-relative text-md-start text-center'>
                                                <small>6+ Hours | Full Day Tours</small>
                                                <h3 className='mb-1'><Link to='/Tourdetails'>Leeds Castle, Cliffs Of Dover</Link></h3>
                                                <h6><CiLocationOn size={20} className='' /> Croatia</h6>
                                                <p className='mt-4 mb-0'>Taking Safety Measures <br></br> <a><span className='theme'> Free cancellation</span></a> </p>
                                            </div>
                                        </div>
                                        <div className='col-lg-3 col-md-3'>
                                            <div className='trend-content text-md-end text-center'>
                                                <div className='rating'>
                                                    <MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' />
                                                </div>
                                                <small>200 Reviews</small>
                                                <div className='trend-price my-2'>
                                                    <span className='mb-0'>From</span>
                                                    <h3 className='mb-0'>$125</h3>
                                                    <small>Per Adult</small>
                                                </div>
                                                {/* <div className='explore'><Link to='/booking' className='exp-btn'>Book Now</Link></div> */}
                                                <a href='#' className='nir-btn'>View Detail</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* card 2 */}
                                <div className='trend-full bg-white rounded box-shadow overflow-hidden p-4 mb-4'>
                                    <div className='row'>
                                        <div className='col-lg-4 col-md-3'>
                                            <div className='trend-item2 rounded'>
                                                <img src={require('../image/destination15.jpg')} alt='tour image2' />
                                            </div>
                                        </div>
                                        <div className='col-lg-5 col-md-6'>
                                            <div className='trend-content position-relative text-md-start text-center'>
                                                <small>6+ Hours | Full Day Tours</small>
                                                <h3 className='mb-1'><Link to='/Tourdetails'>Adriatic Adventure–Zagreb To Athens</Link></h3>
                                                <h6><CiLocationOn size={20} className='' />  Greece</h6>
                                                <p className='mt-4 mb-0'>Taking Safety Measures  <br></br> <a><span className='theme'> Free cancellation</span></a> </p>
                                            </div>
                                        </div>
                                        <div className='col-lg-3 col-md-3'>
                                            <div className='trend-content text-md-end text-center'>
                                                <div className='rating'>
                                                    <MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' />
                                                </div>
                                                <small>200 Reviews</small>
                                                <div className='trend-price my-2'>
                                                    <span className='mb-0'>From</span>
                                                    <h3 className='mb-0'>$160</h3>
                                                    <small>Per Adult</small>
                                                </div>
                                                <a href='#' className='nir-btn'>View Detail</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* card 3 */}
                                <div className='trend-full bg-white rounded box-shadow overflow-hidden p-4 mb-4'>
                                    <div className='row'>
                                        <div className='col-lg-4 col-md-3'>
                                            <div className='trend-item2 rounded'>
                                                <img src={require('../image/destination11.jpg')} alt='tour image3' />
                                            </div>
                                        </div>
                                        <div className='col-lg-5 col-md-6'>
                                            <div className='trend-content position-relative text-md-start text-center'>
                                                <small>6+ Hours | Full Day Tours</small>
                                                <h3 className='mb-1'><Link to='/Tourdetails'>The Spanish Riviera Cost Bay</Link></h3>
                                                <h6><CiLocationOn size={20} className='' />   Spain</h6>
                                                <p className='mt-4 mb-0'>Taking Safety Measures  <br></br> <a><span className='theme'> Free cancellation</span></a> </p>
                                            </div>
                                        </div>
                                        <div className='col-lg-3 col-md-3'>
                                            <div className='trend-content text-md-end text-center'>
                                                <div className='rating'>
                                                    <MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' />
                                                </div>
                                                <small>200 Reviews</small>
                                                <div className='trend-price my-2'>
                                                    <span className='mb-0'>From</span>
                                                    <h3 className='mb-0'>$160</h3>
                                                    <small>Per Adult</small>
                                                </div>
                                                <a href='#' className='nir-btn'>View Detail</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* card 4 */}
                                <div className='trend-full bg-white rounded box-shadow overflow-hidden p-4 mb-4'>
                                    <div className='row'>
                                        <div className='col-lg-4 col-md-3'>
                                            <div className='trend-item2 rounded'>
                                                <img src={require('../image/destination12.jpg')} alt='tour image4' />
                                            </div>
                                        </div>
                                        <div className='col-lg-5 col-md-6'>
                                            <div className='trend-content position-relative text-md-start text-center'>
                                                <small>6+ Hours | Full Day Tours</small>
                                                <h3 className='mb-1'><Link to='/Tourdetails'>Adriatic Adventure–Zagreb To Athens</Link></h3>
                                                <h6><CiLocationOn size={20} className='' />   Greece</h6>
                                                <p className='mt-4 mb-0'>Taking Safety Measures  <br></br> <a><span className='theme'> Free cancellation</span></a> </p>
                                            </div>
                                        </div>
                                        <div className='col-lg-3 col-md-3'>
                                            <div className='trend-content text-md-end text-center'>
                                                <div className='rating'>
                                                    <MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' />
                                                </div>
                                                <small>200 Reviews</small>
                                                <div className='trend-price my-2'>
                                                    <span className='mb-0'>From</span>
                                                    <h3 className='mb-0'>$160</h3>
                                                    <small>Per Adult</small>
                                                </div>
                                                <a href='#' className='nir-btn'>View Detail</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* card 5 */}
                                <div className='trend-full bg-white rounded box-shadow overflow-hidden p-4 mb-4'>
                                    <div className='row'>
                                        <div className='col-lg-4 col-md-3'>
                                            <div className='trend-item2 rounded'>
                                                <img src={require('../image/destination13.jpg')} alt='tour image5' />
                                            </div>
                                        </div>
                                        <div className='col-lg-5 col-md-6'>
                                            <div className='trend-content position-relative text-md-start text-center'>
                                                <small>6+ Hours | Full Day Tours</small>
                                                <h3 className='mb-1'><Link to='/Tourdetails'>Highlights scenery of Vietnam</Link></h3>
                                                <h6><CiLocationOn size={20} className='' />    Vietnam</h6>
                                                <p className='mt-4 mb-0'>Taking Safety Measures  <br></br> <a><span className='theme'> Free cancellation</span></a> </p>
                                            </div>
                                        </div>
                                        <div className='col-lg-3 col-md-3'>
                                            <div className='trend-content text-md-end text-center'>
                                                <div className='rating'>
                                                    <MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' />
                                                </div>
                                                <small>200 Reviews</small>
                                                <div className='trend-price my-2'>
                                                    <span className='mb-0'>From</span>
                                                    <h3 className='mb-0'>$160</h3>
                                                    <small>Per Adult</small>
                                                </div>
                                                <a href='#' className='nir-btn'>View Detail</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* card 6 */}
                                <div className='trend-full bg-white rounded box-shadow overflow-hidden p-4 mb-4'>
                                    <div className='row'>
                                        <div className='col-lg-4 col-md-3'>
                                            <div className='trend-item2 rounded'>
                                                <img src={require('../image/destination10.jpg')} alt='tour image6' />
                                            </div>
                                        </div>
                                        <div className='col-lg-5 col-md-6'>
                                            <div className='trend-content position-relative text-md-start text-center'>
                                                <small>6+ Hours | Full Day Tours</small>
                                                <h3 className='mb-1'><Link to='/Tourdetails'>The Spanish Riviera Cost Bay</Link></h3>
                                                <h6><CiLocationOn size={20} className='' />    Spain</h6>
                                                <p className='mt-4 mb-0'>Taking Safety Measures  <br></br> <a><span className='theme'> Free cancellation</span></a> </p>
                                            </div>
                                        </div>
                                        <div className='col-lg-3 col-md-3'>
                                            <div className='trend-content text-md-end text-center'>
                                                <div className='rating'>
                                                    <MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' />
                                                </div>
                                                <small>200 Reviews</small>
                                                <div className='trend-price my-2'>
                                                    <span className='mb-0'>From</span>
                                                    <h3 className='mb-0'>$160</h3>
                                                    <small>Per Adult</small>
                                                </div>
                                                <a href='#' className='nir-btn'>View Detail</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* card 7 */}
                                <div className='trend-full bg-white rounded box-shadow overflow-hidden p-4 mb-4'>
                                    <div className='row'>
                                        <div className='col-lg-4 col-md-3'>
                                            <div className='trend-item2 rounded'>
                                                <img src={require('../image/destination14.jpg')} alt='tour image7' />
                                            </div>
                                        </div>
                                        <div className='col-lg-5 col-md-6'>
                                            <div className='trend-content position-relative text-md-start text-center'>
                                                <small>6+ Hours | Full Day Tours</small>
                                                <h3 className='mb-1'><Link to='/Tourdetails'>Empire Prestige Causeway Bay</Link></h3>
                                                <h6><CiLocationOn size={20} className='' />     Egypt</h6>
                                                <p className='mt-4 mb-0'>Taking Safety Measures  <br></br> <a><span className='theme'> Free cancellation</span></a> </p>
                                            </div>
                                        </div>
                                        <div className='col-lg-3 col-md-3'>
                                            <div className='trend-content text-md-end text-center'>
                                                <div className='rating'>
                                                    <MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' />
                                                </div>
                                                <small>200 Reviews</small>
                                                <div className='trend-price my-2'>
                                                    <span className='mb-0'>From</span>
                                                    <h3 className='mb-0'>$160</h3>
                                                    <small>Per Adult</small>
                                                </div>
                                                <a href='#' className='nir-btn'>View Detail</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <Link to='/pagenotfound' className='nir-btn'>
                                        Load More
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4 mb-4'>
                            <div className='sidebar-sticky'>
                                <div className='list-sidebar'>
                                    <div className='sidebar-item mb-4'>
                                        <h3>Categories Type</h3>
                                        <ul className='sidebar-category1'>
                                            <li><input type='checkbox' checked /> Tours<span className='float-end '>92</span></li>
                                            <li><input type='checkbox' /> Attractions<span className='float-end '>22</span></li>
                                            <li><input type='checkbox' /> Day Trips<span className='float-end '>35</span></li>
                                            <li><input type='checkbox' /> Outdoor Activities<span className='float-end '>41</span></li>
                                            <li><input type='checkbox' /> Concert & Show<span className='float-end '>11</span></li>
                                            <li><input type='checkbox' />  Indoor<span className='float-end '>61</span></li>
                                            <li><input type='checkbox' />  Sight Seeing<span className='float-end '>18</span></li>
                                            <li><input type='checkbox' />  Travels<span className='float-end '>88</span></li>
                                        </ul>
                                    </div>
                                    <div className='sidebar-item mb-4'>
                                        <h3>Duration Type</h3>
                                        <ul className='sidebar-category1'>
                                            <li><input type='checkbox' checked /> Up to 1 hour <span className='float-end'>92</span></li>
                                            <li><input type='checkbox' />  1 to 2 hour <span className='float-end'>22</span></li>
                                            <li><input type='checkbox' /> 2 to 4 hour <span className='float-end'>35</span></li>
                                            <li><input type='checkbox' /> 4 to 8 hour <span className='float-end'>41</span></li>
                                            <li><input type='checkbox' />  8 to 1 Day <span className='float-end'>11</span></li>
                                            <li><input type='checkbox' /> 1 Day to 2 Days <span className='float-end'>61</span></li>
                                        </ul>
                                    </div>
                                    {/* <div className='sidebar-item mb-4'>
                                        <h3>Duration Type</h3>
                                        <div className='range-slider mt-0'>
                                            <p className='text-start mb-2'>Price Range</p>

                                        </div>
                                    </div> */}
                                    <div className='sidebar-item'>
                                        <h3>Related Destinations</h3>
                                        <div className='sidebar-destination'>
                                            <div className='row about-slider slick-initialized slick-slider'>
                                                <Slider {...settings}>
                                                    <div>
                                                        <div className='card'>
                                                            <img src={require('../image/destination17.jpg')} alt='travel1' className='' />
                                                            <div className='trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index'>
                                                                <div className='trend-content-title text-start'>
                                                                    <h5><Link to='/Destinationdetail' className='theme1 mb-0'>Italy</Link></h5>
                                                                    <h3 className='explore-title mb-0'>Caspian Valley</h3>
                                                                </div>
                                                                <div className='explore'><a href='Home.js' className='exp-btn'>18 Tours</a></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className='card'>
                                                            <img src={require('../image/destination14.jpg')} alt='travel image8' className='' />
                                                            <div className='trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index'>
                                                                <div className='trend-content-title text-start'>
                                                                    <h5><Link to='' className='theme1 mb-0'>Tokyo</Link></h5>
                                                                    <h3 className='explore-title mb-0'>Japan</h3>
                                                                </div>
                                                                <div className='explore'><a href='Home.js' className='exp-btn'>21 Tours</a></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <div>
                                                        <h3>3</h3>
                                                    </div>
                                                    <div>
                                                        <h3>4</h3>
                                                    </div>
                                                    <div>
                                                        <h3>5</h3>
                                                    </div>
                                                    <div>
                                                        <h3>6</h3>
                                                    </div> */}
                                                </Slider>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

              
            </Container>
            
            <Exploretravel/>
                <Partners/>

        </>
    )
}

export default Tours
