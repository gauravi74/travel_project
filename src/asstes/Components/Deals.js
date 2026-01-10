import React from 'react'
import '../../App.css'
import { Container } from 'react-bootstrap'
import image1 from '../image/trendingb-2.jpg'
import image2 from '../image/trending-large.jpg'
import image3 from '../image/trendingb-1.jpg'
import { Link } from 'react-router-dom'
import { MdOutlineStarPurple500 } from "react-icons/md";
import trending from '../image/trending1.jpg'
import trending2 from '../image/trending2.jpg'
import trending3 from '../image/trending3.jpg'
import trending4 from '../image/trending4.jpg'

function Deals() {
    return (
        <>
            <Container>
                {/* Top Deals */}
                <section className='page-section'>
                    <div className='steps-container'>
                        {/* subtitle */}
                        <p className="subtitle">Top Deals</p>

                        {/* Title */}
                        <h2 className="title">
                            The Last <span> Minute Deals </span>
                        </h2>

                        {/* Description */}
                        <p className="text">
                        Grab amazing travel offers and plan your dream getaway at unbeatable prices. Don’t miss out!
                        </p>
                        {/* <Container> */}
                        <div className='row'>
                            <div className='col-lg-5'>
                                <div className='card position-relative mb-4 overflow-hidden card-overlay trend-item1'>

                                    {/* Image */}
                                    <img src={image1} alt="Norway Lake" className="tour-img " />
                                    <div className="overlay"></div>
                                    {/* Content on Image */}
                                    <div className='trend-content position-absolute bottom-0 start-0 w-100 p-4 z-10'>

                                        <h5 className='theme1 mb-1 text-start'>Norway</h5>

                                        <h3 className='mb-2 white text-start'>
                                            <Link to='/tours' className='white text-decoration-none'>Norway Lake</Link>
                                        </h3>

                                        <div className='rating-main pb-2'>

                                            {/* Rating */}
                                            <div className='rating d-flex align-items-center'>
                                                <MdOutlineStarPurple500 color='yellow' />
                                                <MdOutlineStarPurple500 color='yellow' />
                                                <MdOutlineStarPurple500 color='yellow' />
                                                <MdOutlineStarPurple500 color='yellow' />
                                                <MdOutlineStarPurple500 color='yellow' />
                                                <span className='ms-2 white'>(16)</span>
                                            </div>

                                            {/* Price */}
                                            <div className='entry-meta mt-2'>
                                                <div className='entry-author d-flex align-items-center'>
                                                    <p className='mb-0 white'>
                                                        <span className='theme1 fw-bold fs-5'>$180.00</span> | Per person
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                                {/* <h4>Norway</h4> */}
                                <div className='card position-relative mb-4 overflow-hidden card-overlay trend-item1'>
                                    <img src={image2} alt="Norway Lake" className="tour-img" />
                                    <div className="overlay"></div>
                                    <div className='trend-content position-absolute bottom-0 start-0 w-100 p-4 z-10'>

                                        <h5 className='theme1 mb-1 text-start'>Egpyt</h5>

                                        <h3 className='mb-2 white text-start'>
                                            <Link to='/tours' className='white text-decoration-none'>Pyramid Land</Link>
                                        </h3>

                                        <div className='rating-main pb-2'>

                                            {/* Rating */}
                                            <div className='rating d-flex align-items-center'>
                                                <MdOutlineStarPurple500 color='yellow' />
                                                <MdOutlineStarPurple500 color='yellow' />
                                                <MdOutlineStarPurple500 color='yellow' />
                                                <MdOutlineStarPurple500 color='yellow' />
                                                <MdOutlineStarPurple500 color='yellow' />
                                                <span className='ms-2 white'>(16)</span>
                                            </div>

                                            {/* Price */}
                                            <div className='entry-meta mt-2'>
                                                <div className='entry-author d-flex align-items-center'>
                                                    <p className='mb-0 white'>
                                                        <span className='theme1 fw-bold fs-5'>$180.00</span> | Per person
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className='card position-relative mb-4 overflow-hidden card-overlay trend-item1'>
                                    <img src={image3} alt="Norway Lake" className="tour-img" />
                                    <div className="overlay"></div>
                                    <div className='trend-content position-absolute bottom-0 start-0 w-100 p-4 z-10'>

                                        <h5 className='theme1 mb-1 text-start'>Usa</h5>

                                        <h3 className='mb-2 white text-start'>
                                            <Link to='/tours' className='white text-decoration-none'>New York City</Link>
                                        </h3>

                                        <div className='rating-main pb-2'>

                                            {/* Rating */}
                                            <div className='rating d-flex align-items-center'>
                                                <MdOutlineStarPurple500 color='yellow' />
                                                <MdOutlineStarPurple500 color='yellow' />
                                                <MdOutlineStarPurple500 color='yellow' />
                                                <MdOutlineStarPurple500 color='yellow' />
                                                <MdOutlineStarPurple500 color='yellow' />
                                                <span className='ms-2 white'>(12)</span>
                                            </div>

                                            {/* Price */}
                                            <div className='entry-meta mt-2'>
                                                <div className='entry-author d-flex align-items-center'>
                                                    <p className='mb-0 white'>
                                                        <span className='theme1 fw-bold fs-5'>$140.00</span> | Per person
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-7 p-12'>
                                <div className='row'>
                                    <div className='col-lg-6 col-md-6 mb-4'>
                                        <div className='tour-card tour-cd deal-card' id='card'>
                                            <div className='deal-img'>
                                                <img src={trending2} alt="Santorini" className="tourimage" />
                                            </div>
                                            <div className="tourcontent">
                                                <p className="tourcountry">Spain</p>
                                                <Link to='/tours' id='tourtitle'>Barcelona city beach</Link>

                                                <div className="tourrating">
                                                    <MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /> <span>(21)</span>
                                                </div>

                                                <p className="tourdesc">
                                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                                </p>

                                                <p className="tourprice">
                                                    $220.00 <span> | Per person</span>
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-6 mb-4'>
                                        <div className='tour-card tour-cd deal-card' id='card'>
                                            <div>
                                                <img src={trending4} alt="Santorini" className="tourimage" />
                                            </div>
                                            <div className="tourcontent">
                                                <p className="tourcountry">Indonesia</p>
                                                <Link to='/tours' id='tourtitle'>Bali Province</Link>

                                                <div className="tourrating">
                                                    <MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /> <span>(11)</span>
                                                </div>

                                                <p className="tourdesc">
                                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                                </p>

                                                <p className="tourprice">
                                                    $210.00<span> | Per person</span>
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-6 mb-4'>
                                        <div className='tour-card tour-cd deal-card' id='card'>
                                            <div>
                                                <img src={trending} alt="Santorini" className="tourimage" />
                                            </div>
                                            <div className="tourcontent">
                                                <p className="tourcountry">Russia</p>
                                                <Link to='/tours'id='tourtitle'>Red City Land</Link>

                                                <div className="tourrating">
                                                    <MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /> <span>(25)</span>
                                                </div>

                                                <p className="tourdesc">
                                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                                </p>

                                                <p className="tourprice">
                                                    $120.00  <span> | Per person</span>
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-6 mb-4'>
                                        <div className='tour-card tour-cd deal-card' id='card'>
                                            <div>
                                                <img src={trending3} alt="Santorini" className="tourimage" />
                                            </div>
                                            <div className="tourcontent">
                                                <p className="tourcountry">Bangladesh</p>
                                                <Link to='/tours' id='tourtitle'>Cox's bazar Beach</Link>

                                                <div className="tourrating">
                                                    <MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /> <span>(38)</span>
                                                </div>

                                                <p className="tourdesc">
                                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                                </p>

                                                <p className="tourprice">
                                                    $100.00 <span> | Per person</span>
                                                </p>
                                            </div>

                                        </div>
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

export default Deals
