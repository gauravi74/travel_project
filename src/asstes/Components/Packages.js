import React from 'react'
import '../../App.css'
import { Container } from 'react-bootstrap'
import { MdOutlineStarPurple500 } from "react-icons/md";
import Card from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import trending from '../image/trending1.jpg'
import trending2 from '../image/trending2.jpg'
import trending3 from '../image/trending3.jpg'
import trending4 from '../image/trending4.jpg'

function Packages() {
    // Packages slider
    const cardsettings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1200, // laptop / smaller desktops
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 992, // tablet landscape
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768, // tablet portrait / large mobile
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576, // small mobile
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
        // centerPadding: "20px", 
    };
    return (
        <>
            <section className='page-section'>
                <Container>
                    {/* Tour Packages */}

                    <div className='steps-container2'>
                        <h3 className='subtitle'>Top Pick</h3>
                        <h1 className='title'>Best <span> Tour Packages</span></h1>
                        <p className='text1'>Explore our curated tour packages for unforgettable experiences at amazing destinations.</p>
                    </div>



                    {/* tourcard */}
                    <section className=''>
                        <div className="slider-container">
                            <Card {...cardsettings}>
                                <div>
                                    <div className="tourcard">
                                        <div className='card'>
                                            <img src={trending} alt="Santorini" className="tourimg hover-img" />

                                        </div>

                                        <div className="tour-content">
                                            <p className="tour-country">Greece</p>
                                            <h2 className="tour-title">Santorini, Oia</h2>

                                            <div className="tour-rating">
                                                <MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' /> <span>(38)</span>
                                            </div>

                                            <p className="tour-desc">
                                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                            </p>

                                            <p className="tour-price">
                                                $180.00 <span> | Per person</span>
                                            </p>
                                        </div>
                                    </div>

                                </div>
                                <div>
                                    <div className="tourcard">
                                        <div className='card'>
                                            <img src={trending2} alt="Santorini" className="tourimg hover-img" />
                                        </div>

                                        <div className="tour-content">
                                            <p className="tour-country">Croatia</p>
                                            <h2 className="tour-title">Piazza Castello</h2>

                                            <div className="tour-rating">
                                                <MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' /> <span>(12)</span>
                                            </div>

                                            <p className="tour-desc">
                                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                            </p>

                                            <p className="tour-price">
                                                $170.00 <span> | Per person</span>
                                            </p>
                                        </div>
                                    </div>

                                </div>
                                <div>
                                    <div className="tourcard">
                                        <div className='card'>
                                            <img src={trending3} alt="Santorini" className="tourimg hover-img" />
                                        </div>

                                        <div className="tour-content">
                                            <p className="tour-country">Greece</p>
                                            <h2 className="tour-title">Santorini, Oia</h2>

                                            <div className="tour-rating">
                                                <MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' /> <span>(38)</span>
                                            </div>

                                            <p className="tour-desc">
                                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                            </p>

                                            <p className="tour-price">
                                                $180.00 <span> | Per person</span>
                                            </p>
                                        </div>
                                    </div>


                                </div>
                                <div>
                                    <div className="tourcard">
                                        <div className='card'>
                                            <img src={trending4} alt="Santorini" className="tourimg hover-img" />
                                        </div>

                                        <div className="tour-content">
                                            <p className="tour-country">Maldives</p>
                                            <h2 className="tour-title">Hurawalhi Island</h2>

                                            <div className="tour-rating">
                                                <MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' /> <span>(18)</span>
                                            </div>

                                            <p className="tour-desc">
                                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                            </p>

                                            <p className="tour-price">
                                                $260.00 <span> | Per person</span>
                                            </p>
                                        </div>
                                    </div>

                                </div>

                                {/* <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div> */}
                            </Card>
                        </div>
                    </section>
                </Container>
            </section>


        </>
    )
}

export default Packages
