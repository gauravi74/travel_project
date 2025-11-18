import React from 'react'
import '../../App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img from '../image/travel.png'
import Container from 'react-bootstrap/esm/Container';
import cycling from '../image/cycling.png'
import hiking from '../image/hiking-1.png'
import hiking1 from '../image/hiking.png'
import camping from '../image/camping-tent.png'
import tour from '../image/sunbed.png'
import safari from '../image/safari.png'
import surf from '../image/surf.png'
import de1 from '../image/destination1.jpg'
import de2 from '../image/destination14.jpg'
import de3 from '../image/destination15.jpg'
import de4 from '../image/destination17.jpg'
import de5 from '../image/destination16.jpg'
import travel2 from '../image/travel2.png'
import Card from 'react-slick';
import trending from '../image/trending1.jpg'
import trending2 from '../image/trending2.jpg'
import trending3 from '../image/trending3.jpg'
import trending4 from '../image/trending4.jpg'
import image1 from '../image/trendingb-2.jpg'

function Home() {

  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,

  };

  const cardsettings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <section>
      {/* first section */}
      <div className="app-container">
        <div className='row'>
          <header className="header-section">

            <div className='col-lg-6'>
              <div className="header-content">
                <p className="subtitle1">Explore The World</p>
                <h1 className="main-title">Start Planning Your Dream Trip Today!</h1>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                <form className="booking-form">
                  <div className="form-fields">
                    <select>
                      <option selected>Destination</option>
                      <option>Singapore</option>
                      <option>Mexico</option>
                      <option>Japan</option>
                    </select>
                    <input type='date' placeholder='dd-mm-yyyy' />
                    <select>
                      <option selected>Travel Type</option>
                      <option>City Tour</option>
                      <option>Family Tour</option>
                    </select>
                    <select>
                      <option selected>Tour Duration</option>
                      <option>5 Days</option>
                      <option>15 Days</option>
                    </select>
                  </div>
                  <button type="submit" className="search-button">Search Now</button>
                </form>
              </div>
            </div>


            <div className='col-lg-6'>
              <div className="header-image-section"> {/* Placeholder for the image and icons */}
                <div className="image-placeholder">
                  <img src={img} alt='logo' className='logo' />
                </div>
              </div>
            </div>



          </header>
        </div>
      </div>

      {/* <div></div> */}

      {/* slider */}
      <Container>
        <Slider {...settings}>
          {/* <div className='tour-card'>
            <div className='icon' style={{ textAlign: "center", padding: "20px" }}>
              <img src={cycling} alt='cycling' style={{ width: 50, height: 50 }} />
            </div>
            <h3>Cycling</h3>
          </div> */}
          <div className='tour-card' id='crd'>
            <div>
              <img src={cycling} alt='cycling' />
            </div>
            <h5>Cycling</h5>
          </div>
          <div className='tour-card' id='crd'>
            <div>
              <img src={hiking} alt='trekking' />
            </div>
            <h5>Trakking</h5>
          </div>
          <div className='tour-card' id='crd'>
            <div>
              <img src={camping} alt='camping' />
            </div>
            <h5>Camping</h5>
          </div>
          <div className='tour-card' id='crd'>
            <div>
              <img src={hiking1} alt='hiking' />
            </div>
            <h5>Hiking</h5>
          </div>
          <div className='tour-card' id='crd'>
            <div>
              <img src={tour} alt='Beach tour' />
            </div>
            <h5>Beach Tuor</h5>
          </div>
          <div className='tour-card' id='crd'>
            <div>
              <img src={surf} alt='surfing' />
            </div>
            <h5>Surfing</h5>
          </div>
          <div className='tour-card' id='crd'>
            <div>
              <img src={safari} alt='safari' />
            </div>
            <h5>Safari</h5>
          </div>
        </Slider>
      {/* </Container> */}

      {/* Travel Perfection */}
      <div className="steps-container">

        {/* Subtitle */}
        <p className="subtitle">3 Step Of The Perfect Tour</p>

        {/* Title */}
        <h2 className="title">
          Find <span>Travel Perfection</span>
        </h2>

        {/* Description */}
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
        </p>

        {/* Steps Grid */}
        <Container>
          <div className="steps-grid">
            <div className='row'>
              <div className='col-lg-3'>
                {/* Card 1 */}
                <div className="step-card">

                  <h3>Tell Us What You Want To Do</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                </div>
              </div>
              <div className='col-lg-3'>
                {/* Card 2 */}
                <div className="step-card">

                  <h3>Share Your Travel Locations</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                </div>
              </div>
              <div className='col-lg-3'>
                {/* Card 3 */}
                <div className="step-card">

                  <h3>Share Your Travel Preference</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                </div>
              </div>
              <div className='col-lg-3'>
                {/* Card 4 */}
                <div className="step-card">

                  <h3>We Are 100% Trusted Tour Agency</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>


      {/* Explore Destinations */}
      <div className='steps-container'>
        {/* Subtitle */}
        <p className="subtitle">Top Destinations</p>

        {/* Title */}
        <h2 className="title">
          Find <span>Explore Top Destinations</span>
        </h2>

        {/* Description */}
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
        {/* <Container> */}
          <div className='row'>
            <div className='col-lg-5'>
              <div>
                <img src={de1} alt="image" className='logo' />
                <h4>England</h4>
                <h3>London</h3>
              </div>

            </div>
            <div className='col-lg-7'>
              <div className='row'>
                <div className='col-lg-6 imgbox'>
                  <img src={de4} alt="image" className='logo' />
                </div>
                <div className='col-lg-6 imgbox'>
                  <img src={de2} alt="image" className='logo' />
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-6 imgbox'>
                  <img src={de3} alt="image" className='logo' />
                </div>
                <div className='col-lg-6 imgbox'>
                  <img src={de5} alt="image" className='logo' />
                </div>
              </div>
            </div>
          </div>
        {/* </Container> */}

      </div>


      {/* get to know */}
      {/* <Container> */}
        <div className=''>
          <div className='row'>
            <div className='col-lg-6'>
              <div className="header-image-section"> {/* Placeholder for the image and icons */}
                <div className="image-placeholder">
                  <img src={travel2} alt='travel' id='logo' />
                </div>
              </div>
            </div>
            <div className='col-lg-6 app-container'>
              <div className='header-content'>
                <h3 className='subtitle1'>Get To Know Us</h3>
                <h1 className='main-title'>Explore All Tour of the world with us.</h1>
                <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p className='description'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              {/* <hr></hr> */}
              <div className='row'>
                <div className='col-4'>
                  <h6>Tour Guide</h6>
                </div>
                <div className='col-4'>
                  <h6>Friendly Price</h6>
                </div>
                <div className='col-4'>
                  <h6>Reliable Tour Package</h6>
                </div>
              </div>

              <div className="stats-container">

                <div className="stat-box">
                  <h2 className="stat-number">20</h2>
                  <p className="stat-label">Years Experiences</p>
                </div>

                <div className="stat-box">
                  <h2 className="stat-number">530</h2>
                  <p className="stat-label">Tour Packages</p>
                </div>

                <div className="stat-box">
                  <h2 className="stat-number">850</h2>
                  <p className="stat-label">Happy Customers</p>
                </div>

                <div className="stat-box">
                  <h2 className="stat-number">320</h2>
                  <p className="stat-label">Award Winning</p>
                </div>

              </div>

            </div>
          </div>
        </div>
      {/* </Container> */}


      {/* Tour Packages */}
      {/* <Container> */}
        <div className='steps-container2'>
          <h3 className='subtitle'>Top Pick</h3>
          <h1 className='title'>Best <span> Tour Packages</span></h1>
          <p className='text1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        </div>

        {/* tourcard */}
        <div className="slider-container">
          <Card {...cardsettings}>
            <div>
              <div className="tourcard">
                <img src={trending} alt="Santorini" className="tourimg" />

                <div className="tour-content">
                  <p className="tour-country">Greece</p>
                  <h2 className="tour-title">Santorini, Oia</h2>

                  <div className="tour-rating">
                    <span>(38)</span>
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
                <img src={trending2} alt="Santorini" className="tourimg" />

                <div className="tour-content">
                  <p className="tour-country">Croatia</p>
                  <h2 className="tour-title">Piazza Castello</h2>

                  <div className="tour-rating">
                    <span>(12)</span>
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
                <img src={trending} alt="Santorini" className="tourimg" />

                <div className="tour-content">
                  <p className="tour-country">Greece</p>
                  <h2 className="tour-title">Santorini, Oia</h2>

                  <div className="tour-rating">
                    <span>(38)</span>
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
                <img src={trending4} alt="Santorini" className="tourimg" />

                <div className="tour-content">
                  <p className="tour-country">Maldives</p>
                  <h2 className="tour-title">Hurawalhi Island</h2>

                  <div className="tour-rating">
                    <span>(18)</span>
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


      {/* </Container> */}


      {/* Top Deals */}
      {/* <Container> */}
      <div className='steps-container'>
        {/* subtitle */}
        <p className="subtitle">Top Deals</p>

        {/* Title */}
        <h2 className="title">
          The Last <span> Minute Deals </span>
        </h2>

        {/* Description */}
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
        {/* <Container> */}
        <div className='row'>
          <div className='col-lg-5'>
            <div className='card'>
              <img src={image1} alt="Norway Lake" className="tour-img" />
            </div>
            <h4>Norway</h4>
          </div>
          <div className='col-lg-7'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className="tourcard">
                  <img src={trending4} alt="Santorini" className="tourimg" />

                  <div className="tour-content">
                    <p className="tour-country">Maldives</p>
                    <h2 className="tour-title">Hurawalhi Island</h2>

                    <div className="tour-rating">
                      <span>(18)</span>
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
              <div className='col-lg-6'>
                <div className="tourcard">
                  <img src={trending4} alt="Santorini" className="tourimg" />

                  <div className="tour-content">
                    <p className="tour-country">Maldives</p>
                    <h2 className="tour-title">Hurawalhi Island</h2>

                    <div className="tour-rating">
                      <span>(18)</span>
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
            </div>

          </div>
        </div>
        {/* </Container> */}



      </div>
      </Container>


    </section>



  )
}

export default Home
