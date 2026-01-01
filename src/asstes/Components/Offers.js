import React from 'react'
import '../../App.css'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { MdOutlineStarPurple500 } from "react-icons/md";
// import trending from '../image/trending1.jpg'
import trending2 from '../image/trending2.jpg'
import trending3 from '../image/trending3.jpg'
import trending4 from '../image/trending4.jpg'


function Offers() {
  return (
    <>
    <Container>
        {/* Top Offers */}
        <section className='page-section'>
          <div className='steps-container'>
            {/* subtitle */}
            <p className="subtitle">Top Offers</p>

            {/* Title */}
            <h2 className="title">
                Special <span> Offers & Discount </span> Packages 
            </h2>

            {/* Description */}
            <p className="text">
            Enjoy exclusive deals on our tours and travel packages. Book now and save on your dream vacation!
            </p>
            {/* <Container> */}
              <div className='row'>
                {/* card 1 */}
                <div className='col-lg-4 col-md-6 col-sm-6 mb-4'>
                  <div className='card-Offers'>
                    <div className='card-body'>
                      <div className='image-wrapper'>
                        <img src={trending2} alt="Santorini" className="card-image" />
                      </div>
                      <div className="tourcontent">
                        <p className="tourcountry">Croatia</p>
                        <Link to='' className="nav-link" id='tourtitle'>Piazza Castello</Link>

                        <div className="tourrating">
                          <MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /> <span>(12)</span>
                        </div>

                        <p className="tourdesc">
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        </p>

                        <p className="tourprice">
                          $170.00 <span> | Per person</span>
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
                {/* card 2 */}
                <div className='col-lg-4 col-md-6 col-sm-6 mb-4'>
                  <div className='card-Offers'>
                    <div className='card-body'>
                      <div className='image-wrapper'>
                        <img src={trending3} alt="Santorini" className="card-image" />
                      </div>
                      <div className="tourcontent">
                        <p className="tourcountry">Greece</p>
                        <Link to='' className="nav-link" id='tourtitle'>Santorini, Oia</Link>

                        <div className="tourrating">
                          <MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /> <span>(38)</span>
                        </div>

                        <p className="tourdesc">
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        </p>

                        <p className="tourprice">
                          $180.00  <span> | Per person</span>
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
                {/* card 3 */}
                <div className='col-lg-4 col-md-6 col-sm-6 mb-4'>
                  <div className='card-Offers'>
                    <div className='card-body'>
                      <div className='image-wrapper'>
                        <img src={trending4} alt="Santorini" className="card-image" />
                      </div>
                      <div className="tourcontent">
                        <p className="tourcountry">Maldives</p>
                        <Link to='' className="nav-link" id='tourtitle'>Hurawalhi Island</Link>

                        <div className="tourrating">
                          <MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /> <span>(18)</span>
                        </div>

                        <p className="tourdesc">
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        </p>

                        <p className="tourprice">
                          $260.00  <span> | Per person</span>
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            {/* </Container> */}

          </div>
        </section>
    </Container>
    
    
    </>
  )
}

export default Offers
