import React from 'react'
import '../../App.css'
// import { Link } from 'react-router-dom'
import img from '../image/travel.png'
import { Container } from 'react-bootstrap'
import cycling from '../image/cycling.png'
import hiking from '../image/hiking-1.png'
import hiking1 from '../image/hiking.png'
import camping from '../image/camping-tent.png'
import tour from '../image/sunbed.png'
import safari from '../image/safari.png'
import surf from '../image/surf.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Hero() {
    // tour slider
    var settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1200,  // Laptop smaller screens
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 992,   // Tablet landscape
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 768,   // Tablet portrait / large mobiles
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 576,   // Small mobile devices
              settings: {
                slidesToShow: 1,
              },
            },
          ],

    };
    return (
        <>
           
                <section className='testimonial page-section'>
                    {/* first section className="form-fields"*/}
                    <Container>
                    <div className="app-container ">

                        <header className="header-section">
                            <div className='row'>
                                <div className='col-lg-6 col-sm-12 col-md-6 mb-4'>
                                    <div className="header-content">
                                        <p className="subtitle1">Explore The World</p>
                                        <h1 className="main-title">Start Planning Your Dream Trip Today!</h1>
                                        <p className="description">Embark on a journey to the most breathtaking destinations across the globe. From serene beaches and majestic mountains to vibrant cities and historic landmarks, we make it easy to create unforgettable memories. </p>
                                        <form className="booking-form">
                                            <div >
                                                <div className='row'>
                                                    <div className='col-lg-6 col-sm-6 col-md-6 mb-1'>
                                                        <select className='form-control'>
                                                            <option selected>Destination</option>
                                                            <option>Singapore</option>
                                                            <option>Mexico</option>
                                                            <option>Japan</option>
                                                        </select>
                                                    </div>
                                                    <div className='col-lg-6 col-sm-6 col-md-6 mb-1'>
                                                        <input type='date' placeholder='dd-mm-yyyy' className='form-control' />
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='col-lg-6 col-sm-6 col-md-6 mb-1'>
                                                        <select className='form-control'>
                                                            <option selected>Travel Type</option>
                                                            <option>City Tour</option>
                                                            <option>Family Tour</option>
                                                        </select>
                                                    </div>
                                                    <div className='col-lg-6 col-sm-6 col-md-6 mb-1'>
                                                        <select className='form-control'>
                                                            <option selected>Tour Duration</option>
                                                            <option>5 Days</option>
                                                            <option>15 Days</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='col-lg-12 col-sm-12 col-md-6 mb-1'>
                                                        <button type="submit" className="btn search-button form-control"> Search</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>


                                <div className='col-lg-6 col-sm-12 col-md-6'>
                                    <div className="header-image-section"> {/* Placeholder for the image and icons */}
                                        <div className="image-placeholder">
                                            <img src={img} alt='logo' className='logo' />
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </header>

                    </div>
                    </Container>
                </section>


                {/* slider */}
                <section className='page-section'>
                    <Container>
                    <Slider {...settings}>
                        
                        <div className='tour-card' id='card'>
                            <div>
                                <img src={cycling} alt='cycling' />
                            </div>
                            <h5>Cycling</h5>
                        </div>
                        <div className='tour-card' id='card'>
                            <div>
                                <img src={hiking} alt='trekking' />
                            </div>
                            <h5>Trakking</h5>
                        </div>
                        <div className='tour-card' id='card'>
                            <div>
                                <img src={camping} alt='camping' />
                            </div>
                            <h5>Camping</h5>
                        </div>
                        <div className='tour-card' id='card'>
                            <div>
                                <img src={hiking1} alt='hiking' />
                            </div>
                            <h5>Hiking</h5>
                        </div>
                        <div className='tour-card' id='card'>
                            <div>
                                <img src={tour} alt='Beach tour' />
                            </div>
                            <h5>Beach Tuor</h5>
                        </div>
                        <div className='tour-card' id='card'>
                            <div>
                                <img src={surf} alt='surfing' />
                            </div>
                            <h5>Surfing</h5>
                        </div>
                        <div className='tour-card' id='card'>
                            <div>
                                <img src={safari} alt='safari' />
                            </div>
                            <h5>Safari</h5>
                        </div>
                    </Slider>
                    </Container>
                </section>
            



        </>
    )
}

export default Hero
