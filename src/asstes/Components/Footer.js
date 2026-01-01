import React from 'react'
import Slider from "react-slick";
// import ins1 from '../image/ins-1.jpg'
import Container from 'react-bootstrap/esm/Container';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function Footer() {
  var settings = {
    // dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    autoplay: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,  // tablet large
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 992,   // tablet medium
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,   // small tablet / large phone
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 576,   // mobile
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 400,   // small mobile
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <>
      <footer className='footer-img '>
        <div className='footer-shape  top-0'></div>
        <Container className='footer-slider'>
          <Slider {...settings}>
            <div>
              <div className=''>
                <a href='#'><img src={require('../image/ins-1.jpg')} alt=' ' className='ins-img' /></a>
              </div>
            </div>
            <div>
              <div className=''>
                <a href='#'><img src={require('../image/ins-2.jpg')} alt=' ' className='ins-img' /></a>
              </div>
            </div>
            <div>
              <div className=''>
                <a href='#'><img src={require('../image/ins-3.jpg')} alt=' ' className='ins-img' /></a>
              </div>
            </div>
            <div>
              <div className=''>
                <a href='#'><img src={require('../image/ins-4.jpg')} alt=' ' className='ins-img' /></a>
              </div>
            </div>
            <div>
              <div className=''>
                <a href='#'><img src={require('../image/ins-5.jpg')} alt=' ' className='ins-img' /></a>
              </div>
            </div>
            <div>
              <div className=''>
                <a href='#'><img src={require('../image/ins-6.jpg')} alt=' ' className='ins-img' /></a>
              </div>
            </div>
            <div>
              <div className=''>
                <a href='#'><img src={require('../image/ins-7.jpg')} alt=' ' className='ins-img' /></a>
              </div>
            </div>
            <div>
              <div className=''>
                <a href='#'><img src={require('../image/ins-8.jpg')} alt=' ' className='ins-img' /></a>
              </div>
            </div>
            <div>
              <div className=''>
                <a href='#'><img src={require('../image/ins-9.jpg')} alt=' ' className='ins-img' /></a>
              </div>
            </div>
          </Slider>

          <div className='footer-upper pt-5 ' >
            <div className='row '>
              <div className='col-lg-4 col-md-6 col-sm-12 mb-3'>
                <div className='footer-about'>
                  <img src={require('../image/logo-white.png')} alt='' className='' />
                  <p className='mb-3 mt-3 footer-text'>Explore the world with us. We provide curated travel experiences, expert guidance, and unforgettable journeys for every adventurer.</p>
                  <ul>
                    <li className='white'><strong>PO Box: </strong>+47-252-254-2542</li>
                    <li className='white'><strong>Location: </strong>Collins Street, sydney, Australia</li>
                    <li className='white'><strong>Email: </strong>info@Travelin.com</li>
                    <li className='white'><strong>Website:  </strong>www.Travelin.com</li>
                  </ul>
                </div>
              </div>
              <div className='col-lg-2 col-md-6 col-sm-12 mb-3'>
                <div className='footer-links'>
                  <h3 className='white'>Quick link</h3>
                  <ul>
                    {/* <p className='white'><a href='#'>About us</a></p> */}
                    <li className='white'><Link to='/about'>About us</Link></li>
                    <li className='white'><Link to='/destination'>Destination</Link></li>
                    <li className='white'><Link to='/tours'>Tours</Link></li>
                    <li className='white'><Link to='/blogs'>Blog</Link></li>
                    <li className='white'><Link to='/contact'>Contact us</Link></li>
                    {/* <li className='white'><Link to='#'>Return Policy</Link></li> */}
                  </ul>
                </div>
              </div>
              <div className='col-lg-2 col-md-6 col-sm-12 mb-3'>
                <div className='footer-links'>
                  <h3 className='white'>Categories</h3>
                  <ul>
                    <li className='white'><a href='#'>Travel</a></li>
                    <li className='white'><a href='#'>Technology</a></li>
                    <li className='white'><a href='#'>Lifestyle</a></li>
                    <li className='white'><a href='#'>Destinations</a></li>
                    <li className='white'><a href='#'>Entertainment</a></li>
                    <li className='white'><a href='#'>Business</a></li>
                  </ul>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 col-sm-12 mb-3'>
                <div className='footer-links'>
                  <h3 className='white'>Newsletter</h3>
                  <div className='newsletter-form'>
                    <p className='mb-3 footer-text'>Jin our community of over 200,000 global readers who receives emails filled with news, promotions, and other good stuff.</p>
                    <form className='border-0 d-flex '>
                      {/* <div className='row'> */}
                      {/* <div className='col-lg-10 col-md-12 col-sm-12 mb-2'> */}
                      <input type='text' className='form-control newsletter-input' placeholder='Email Address' />
                      {/* </div> */}
                      {/* <div className='col-lg-2 col-md-12 col-sm-12 mb-2'> */}
                      <button className='nir-btn ms-2 newsletter-btn'>Subscribe</button>
                      {/* </div> */}
                      {/* </div> */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>



        </Container>
        <div className='footer-copyright'>
          <div className='copyright-inner rounded p-3 d-md-flex align-items-center justify-content-between'>
            <Container>
              <div className='d-flex align-items-center justify-content-between'>
                <div className='copyright-text'>
                  <p className='m-0 white'>2022 Travelin. All rights reserved.</p>
                </div>
                <div className='social-links '>
                  <ul className=''>
                    <li><a><FaFacebook size={22} color='white' /></a></li>
                    <li><a><FaTwitter size={22} color='white' /></a></li>
                    <li><a><FaInstagram size={22} color='white' /></a></li>
                    <li><a><FaLinkedin size={22} color='white' /></a></li>
                  </ul>
                </div>
              </div>
            </Container>
          </div>
        </div>

      </footer>
    </>
  )
}

export default Footer
