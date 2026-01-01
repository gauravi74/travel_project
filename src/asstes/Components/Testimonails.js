import React from 'react'
import '../../App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";
import travel from '../image/travel3.png'
import client from '../image/client1.jpg'
// import cl1 from '../image/cl-1.png'
// import cl2 from '../image/cl-2.png'
// import cl3 from '../image/cl-3.png'
// import cl4 from '../image/cl-4.png'
// import cl5 from '../image/cl-5.png'
import Container from 'react-bootstrap/esm/Container';

function Testimonails() {
  // Testimonails
  var setting = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
  };
  return (
    <>
      {/* Testimonails */}
      
        <section className='page-section testimonial'>
        <Container>
          <div className='steps-container '>
            {/* subtitle */}
            <p className="subtitle">Our Testimonails</p>

            {/* Title */}
            <h2 className="title">
              Good Reviews By <span> Clients </span>
            </h2>

            {/* Description */}
            <p className="text">
            Hear what our travelers have to say about their unforgettable journeys and experiences with us.
            </p>
            <div className='Testimonails'>
              <div className='row'>
                <div className='col-lg-5 mb-4'>
                  <div className="header-image-section"> {/* Placeholder for the image and icons */}
                    <div className="image-placeholder">
                      <img src={travel} alt='travel' className='Testimonails-img' />
                    </div>
                  </div>
                </div>
                <div className='col-lg-7 mb-4 ps-7'>

                  <Slider {...setting}>
                    <div>
                      <div className='client-review'>
                        <div className='client-info mb-3'>
                          <img src={client} alt='' className='client-img' />
                          <div className='client-title '>
                            <h5 className='m-0 client-name'>Jared Erondu</h5>
                            <span>Supervisor</span>
                          </div>
                        </div>
                        <div className='<FaQuoteLeft />'>
                          <p className='m-0'>
                          <FaQuoteLeft size={40}/> "I had an amazing experience with this travel agency! The tour was perfectly organized, and the guides were knowledgeable and friendly. I can't wait for my next adventure!"</p>
                        </div>
                      </div>
                    </div>
                    <div>
                    <div className='client-review'>
                        <div className='client-info mb-3'>
                          <img src={client} alt='' className='client-img' />
                          <div className='client-title '>
                            <h5 className='m-0 client-name'>Jared Erondu</h5>
                            <span>Supervisor</span>
                          </div>
                        </div>
                        <div className='<FaQuoteLeft />'>
                          <p className='m-0'>
                          <FaQuoteLeft size={40}/> "I had an amazing experience with this travel agency! The tour was perfectly organized, and the guides were knowledgeable and friendly. I can't wait for my next adventure!"</p>
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
          {/* <div className='container'>
            <div className='partners_inner '>
              <ul>
                <li>
                  <img src={cl5} alt='' className='' />
                </li>
                <li>
                  <img src={cl1} alt='' className='' />
                </li>
                <li>
                  <img src={cl2} alt='' className='' />
                </li>
                <li>
                  <img src={cl1} alt='' className='' />
                </li>
                <li>
                  <img src={cl2} alt='' className='' />
                </li>
                <li>
                  <img src={cl3} alt='' className='' />
                </li>
                <li>
                  <img src={cl4} alt='' className='' />
                </li>
                <li>
                  <img src={cl5} alt='' className='' />
                </li>
              </ul>
            </div>
          </div> */}
          </Container>
        </section>
      

    </>
  )
}

export default Testimonails
