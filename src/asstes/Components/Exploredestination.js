import React from 'react'
import { Container } from 'react-bootstrap'
import de1 from '../image/destination1.jpg'
import de2 from '../image/destination14.jpg'
import de3 from '../image/destination15.jpg'
import de4 from '../image/destination17.jpg'
import de5 from '../image/destination16.jpg'
import { Link } from 'react-router-dom'

function Exploredestination() {
  return (
    <>
    <Container>
         {/* Explore Destinations */}
         <section className='page-section'>
          <div className='steps-container'>
            {/* Subtitle */}
            <p className="subtitle">Top Destinations</p>

            {/* Title */}
            <h2 className="title">
              Find <span>Explore Top Destinations</span>
            </h2>

            {/* Description */}
            <p className="text">
            Discover the most popular travel spots around the world and plan your perfect adventure today.
            </p>

            <div className='row'>
              <div className='col-lg-5 mb-4'>
                <div className='card card-overlay trend-item1'>
                  <img src={de1} alt="image1" className='hover-img'/>
                  <div className="overlay"></div>
                  <div className='trend-content1 d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index'>
                    <div className='trend-content-title text-start'>
                      <h5 className='theme1 mb-0'>England</h5>
                      <h3 className='explore-title mb-0'>London</h3>
                    </div>
                    <div className='explore'><Link to='/tours' className='exp-btn'>Read More</Link></div>
                  </div>
                  
                </div>

              </div>
              <div className='col-lg-7'>
                <div className='row'>
                  <div className='col-lg-6 col-md-6 col-sm-6 mb-4'>
                    <div className='card card-overlay trend-item1'>
                      <img src={de4} alt="image2" className='hover-img explore-destiny'/>
                      <div className="overlay"></div>
                      <div className='trend-content1 d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index'>
                        <div className='trend-content-title text-start'>
                          <h5 className='theme1 mb-0'>Italy</h5>
                          <h3 className='explore-title mb-0'>Caspian Valley</h3>
                        </div>
                        <div className='explore'><Link to='/tours' className='exp-btn'>Read More</Link></div>
                      </div>
                      {/* <div className='color-overlay'></div> */}
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-6 mb-4'>
                    <div className='card card-overlay trend-item1'>
                      <img src={de2} alt="image3" className='hover-img explore-destiny' />
                      <div className="overlay"></div>
                      <div className='trend-content1 d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index'>
                        <div className='trend-content-title text-start'>
                          <h5 className='theme1 mb-0'>Tokyo</h5>
                          <h3 className='explore-title mb-0'>Japan</h3>
                        </div>
                        <div className='explore'><Link to='/tours' className='exp-btn'>Read More</Link></div>
                      </div>
                      {/* <div className='color-overlay'></div> */}
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-lg-6 col-md-6 col-sm-6 mb-4'>
                    <div className='card card-overlay trend-item1'>
                      <img src={de3} alt="image4" className='hover-img explore-destiny'/>
                      <div className="overlay"></div>
                      <div className='trend-content1 d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index'>
                        <div className='trend-content-title text-start'>
                          <h5 className='theme1 mb-0'>Moscow</h5>
                          <h3 className='explore-title mb-0'>Russia</h3>
                        </div>
                        <div className='explore'><Link to='/tours' className='exp-btn'>Read More</Link></div>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-6 mb-4'>
                    <div className='card card-overlay trend-item1'>
                      <img src={de5} alt="image5"  className='hover-img explore-destiny'/>
                      <div className="overlay"></div>
                      <div className='trend-content1 d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index'>
                        <div className='trend-content-title text-start'>
                          <h5 className='theme1 mb-0'>Florida</h5>
                          <h3 className='explore-title mb-0'>America</h3>
                        </div>
                        <div className='explore'><Link to='/tours' className='exp-btn'>Read More</Link></div>
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

export default Exploredestination
