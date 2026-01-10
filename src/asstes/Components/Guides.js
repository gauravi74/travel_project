import React from 'react'
import '../../App.css'
import { Container } from 'react-bootstrap'
import guides1 from '../image/guides1.jpg'
import guides2 from '../image/Guides2.jpg'
import guides3 from '../image/Guides3.jpg'
import guides4 from '../image/Guides4.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Guides() {
    // Guides slider
  var settingss = {
    // dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992, // Tablet
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480, // Small Mobile
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  return (
    <Container>
        {/* Tour Guides */}
        <section className='page-section'>
          <div className='steps-container'>
            {/* subtitle */}
            <p className="subtitle">Tour Guides</p>

            {/* Title */}
            <h2 className="title">
              Meet Our <span> Excellent Guides</span>
            </h2>

            {/* Description */}
            <p className="text">
            Our experienced tour guides ensure you have a safe, enjoyable, and unforgettable travel experience.
            </p>
            <div>
              <Slider {...settingss}>
                <div className='guides-card'>
                  <div className='guides-slider'>
                    <div className='team'>
                      <img src={guides1} alt='guide-1'></img>
                    </div>
                    <div className='guides-text'>
                      <h3>Solden Kalos</h3>
                      <p>Supervisor</p>
                    </div>
                  </div>
                </div>

                <div className='guides-card'>
                  <div className='guides-slider'>
                    <div className='team'>
                      <img src={guides4} alt='guide-2'></img>
                    </div>
                    <div className='guides-text'>
                      <h3>Nelson Bam</h3>
                      <p>Quality Assurance</p>
                    </div>
                  </div>
                </div>
                <div className='guides-card'>
                  <div className='guides-slider'>
                    <div className='team'>
                      <img src={guides2} alt='guide-3'></img>
                    </div>
                    <div className='guides-text'>
                      <h3>Horke Pels</h3>
                      <p>Head Officer</p>
                    </div>
                  </div>
                </div>
                <div className='guides-card'>
                  <div className='guides-slider'>
                    <div className='team'>
                      <img src={guides3} alt='guide-4'></img>
                    </div>
                    <div className='guides-text'>
                      <h3>Salmon Thuir</h3>
                      <p>Senior Agent</p>
                    </div>
                  </div>
                </div>
                <div className='guides-card'>
                  <div className='guides-slider'>
                    <div className='team'>
                      <img src={guides4} alt=''></img>
                    </div>
                    <div className='guides-text'>
                      <h3>Nelson Bam</h3>
                      <p>Quality Assurance</p>
                    </div>
                  </div>
                </div>
                {/* <div>
                <h3>6</h3>
              </div> */}
              </Slider>
            </div>
          </div>




        </section>

    </Container>
  )
}

export default Guides
