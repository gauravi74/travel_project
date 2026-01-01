import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { MdOutlineStarPurple500 } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import Exploretravel from '../Components/Exploretravel';
import Partners from '../Components/Partners';
import { Link } from 'react-router-dom';

function Destinationdetail() {
    return (
        <>
            <section className='breadcrumb-main' >
                <div className='section-shape section-shape1  bottom-0'></div>
                <div className='breadcrumb-outer'>
                    <div className='about-section'>
                        <div className='breadcrumb-content text-center'>
                            <h1 className='page-title'>BANGKOK - THAILAND </h1>
                            <nav className='d-block '>
                                <ul className='breadcrumb'>
                                    <li className='breadcrumb-item'><Link to="/">Home</Link></li>
                                    <li className='breadcrumb-item '>Destination Detail</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <Container>
                <section className='page-section'>
                    <div className='trending pt-6 pb-0 bg-lgrey'>
                        <div className='row'>
                            <div className='col-lg-8'>
                                <div className='single-content'>
                                    <div className='mb-4'>
                                        <div className='single-full-title border-b mb-2 pb-2'>
                                            <div className='single-title'>
                                                <h2 className='mb-1'>Bangkok Thailand</h2>
                                                <div className='rating-main d-flex align-items-center'>
                                                    <p className='mb-0 me-2'><CiLocationOn size={20} className='' /> Greater London, United Kingdom</p>
                                                    <div className='rating me-2'><MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' />(1,186 Reviews)</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='description-images mb-4'>
                                            <img src={require('../image/trending-large.jpg')} alt='description image' className='w-100 rounded' />
                                        </div>
                                        <div className='description mb-2'>
                                            <h4 className='des'>Description</h4>
                                            <p>Discover the vibrant energy of Bangkok, Thailand’s bustling capital city
                                                known for its rich culture, historic temples, and lively street life. From
                                                the majestic Grand Palace and Wat Arun to colorful floating markets and
                                                modern shopping districts, Bangkok offers a unique blend of tradition and
                                                modernity.</p>
                                            <p className='mb-0'>
                                                This tour provides comfortable travel, guided sightseeing, and plenty of
                                                free time to explore local cuisine, nightlife, and cultural landmarks.
                                                Whether you are visiting for the first time or returning to explore more,
                                                Bangkok promises an unforgettable travel experience.
                                            </p>
                                        </div>
                                        <div className='description d-md-flex'>
                                            <div className='desc-box bg-grey p-4 rounded me-md-2 mb-2'>
                                                <h4 className='mb-4'>Price Includes</h4>
                                                <ul>
                                                    <li className='d-block pb-1'> Air Fares</li>
                                                    <li className='d-block pb-1'> 3 Nights Hotel Accomodation</li>
                                                    <li className='d-block pb-1'> Tour Guide</li>
                                                    <li className='d-block pb-1'> Entrance Fees</li>
                                                </ul>
                                            </div>
                                            <div className='desc-box bg-grey p-4 rounded me-md-2 mb-2'>
                                                <h4 className='mb-4'>Departure & Return Location</h4>
                                                <ul>
                                                    <li className='d-block pb-1'>Guide Service Fee</li>
                                                    <li className='d-block pb-1'>Driver Service Fee</li>
                                                    <li className='d-block pb-1'>Any Private Expenses</li>
                                                    <li className='d-block pb-1'>Room Service Fees</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='description mb-1'>
                                        <h4 className='des'>Gallery</h4>
                                        <div className='services-image d-md-flex'>
                                            <div className='me-md-2 rounded overflow-hidden mb-2'>
                                                <img src={require('../image/trending5.jpg')} alt='description image2' className='' />
                                            </div>
                                            <div className='me-md-2 rounded overflow-hidden mb-2'>
                                                <img src={require('../image/trending6.jpg')} alt='description image2' className='' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='single-map mb-4'>
                                        <h4 className='des'>Map</h4>
                                        <div className='map rounded overflow-hidden mb-md-4'>
                                            <div style={{ width: 100 }}>
                                                <iframe
                                                    src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=+(mangal%20bazar)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                                                    width="850"
                                                    height="300"
                                                    title="Example Iframe"
                                                ></iframe>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='single-review mb-4'>
                                        <h4 className='des'>Average Reviews</h4>
                                        <div className='row d-flex align-items-center'>
                                            <div className='col-lg-4 col-md-4'>
                                                <div className='review-box bg-title text-center py-4 p-2 rounded'>
                                                    <h2 className='mb-2 white'>2.2/5</h2>
                                                    <h4 className='mb-1 white'>"Feel so much worst than thinking"</h4>
                                                    <p className='mb-0 white'>From 40 Reviews</p>
                                                </div>
                                            </div>
                                            <div className='col-lg-8 col-md-8'>
                                                <div className='review-progress'>
                                                    <div className='progress-item mb-1'>
                                                        <p className="mb-0">Cleanliness</p>
                                                        <div className='progress rounded'>
                                                            <div className="progress-bar bg-theme" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ width: '40%' }}>
                                                                {/* <span>40% Complete</span> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='progress-item mb-1'>
                                                        <p class="mb-0">Facilities</p>
                                                        <div className='progress rounded'>
                                                            <div className="progress-bar bg-theme" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style={{ width: '30%' }}>
                                                                {/* <span>30% Complete</span> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='progress-item mb-1'>
                                                        <p class="mb-0">Value for money</p>
                                                        <div className='progress rounded'>
                                                            <div className="progress-bar bg-theme" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: '60%' }}>
                                                                {/* <span>60% Complete</span> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='progress-item mb-1'>
                                                        <p class="mb-0">Service</p>
                                                        <div className='progress rounded'>
                                                            <div className="progress-bar bg-theme" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{ width: '20%' }}>
                                                                {/* <span>20% Complete</span> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='progress-item'>
                                                        <p class="mb-0">Location</p>
                                                        <div className='progress rounded'>
                                                            <div className="progress-bar bg-theme" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={{ width: '45%' }}>
                                                                {/* <span>45% Complete</span> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='single-add-review'>
                                        <h4 className='des'>Write a Review</h4>
                                        <form>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <div className='form-group mb-2'>
                                                        <input type='text' placeholder='Name' />
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className='form-group mb-2'>
                                                        <input type='email' placeholder='Email' />
                                                    </div>
                                                </div>
                                                <div className='col-md-12'>
                                                    <div className='form-group mb-2'>
                                                        <textarea placeholder='Comment'></textarea>
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className='form-btn mb-2'>
                                                        <a href='#' className='nir-btn'>Submit Review</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>


                            <div className='col-lg-4 col-md-12 '>
                                <div className='sidebar-sticky'>
                                    <div className='list-sidebar'>
                                        <div className='author-news mb-4 border-all box-shadow p-5 text-center rounded'>
                                            <div className='author-news-content'>
                                                <div className='author-thumb mb-1'>
                                                    <img src={require('../image/Guides2.jpg')} alt='author image' className='author-img' />
                                                </div>
                                                <div className='author-content'>
                                                    <h3 className='title mb-1'><a href='#'>Relson Dulux</a></h3>
                                                    <p className='mb-2'>Hello, We’re content writer who is fascinated by content fashion, celebrity and lifestyle. We helps clients bring the right content to the right people.</p>
                                                    {/* <div className='header-social'>
                                                        <ul>
                                                            <li></li>
                                                        </ul>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='sidebar-item mb-4'>
                                            <h4>All Categories</h4>
                                            <ul className='sidebar-category'>
                                                <li><a href='#'>Travelling</a></li>
                                                <li><a href='#'>Tour Position</a></li>
                                                <li><a href='#'>Trip Landmark</a></li>
                                                <li className='active'><a href='#'>Adventurous</a></li>
                                                <li><a href='#'>Address and Map</a></li>
                                                <li><a href='#'>Booking Requests</a></li>
                                                <li><a href='#'>Wildlife Reservation</a></li>
                                                <li><a href='#'>Top Destination</a></li>
                                            </ul>
                                        </div>
                                        <div className='sidebar-item mb-4'>
                                            <h4>Tags</h4>
                                            <ul className='sidebar-tags'>
                                                <li><a href='#'>Tour</a></li>
                                                <li><a href='#'>Rental</a></li>
                                                <li><a href='#'>City</a></li>
                                                <li><a href='#'>Yatch</a></li>
                                                <li><a href='#'>Activity</a></li>
                                                <li><a href='#'>Museum</a></li>
                                                <li><a href='#'>Beauty</a></li>
                                                <li><a href='#'>Classic</a></li>
                                                <li><a href='#'>Creative</a></li>
                                                <li><a href='#'>Designs</a></li>
                                                <li><a href='#'>Featured</a></li>
                                                <li><a href='#'>Free Style</a></li>
                                                <li><a href='#'>Programs</a></li>
                                                <li><a href='#'>Travel</a></li>
                                            </ul>
                                        </div>
                                        <div className='sidebar-item mb-4'>
                                            <div className='sidebar-image rounded overflow-hidden'>
                                                <img src={require('../image/destination4.jpg')} alt='sidebar-image' className='' />
                                            </div>
                                        </div>
                                    </div>
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

export default Destinationdetail
