import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { MdOutlineGroup } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaMapSigns } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import Exploretravel from '../Components/Exploretravel';
import Partners from '../Components/Partners';

function Tourdetails() {
    return (
        <>
            <section className='breadcrumb-main' >
                <div className='section-shape section-shape1 top-inherit bottom-0'></div>
                <div className='breadcrumb-outer'>
                    <div className='about-section'>
                        <div className='breadcrumb-content text-center'>
                            <h1 className='page-title'>TOUR SINGLE</h1>
                            <nav className='d-block '>
                                <ul className='breadcrumb'>
                                    <li className='breadcrumb-item'><Link to="/">Home</Link></li>
                                    <li className='breadcrumb-item '>Tour Details</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <Container>
                <section className='trending pt-8 pb-0 bg-lgrey page-section'>
                    <div className='row'>
                        <div className='col-lg-8 col-md-12'>
                            <div className='single-content'>
                                <div id='highlight'>
                                    <div className='single-full-title border-b mb-2 pb-2'>
                                        <div className='single-title'>
                                            <h2 className='mb-1'>Adriatic Adventure–Zagreb to Athens</h2>
                                            <div className='rating-main d-md-flex align-items-center'>
                                                <p className='mb-0 me-2'><CiLocationOn /> Greater London, United Kingdom</p>
                                                <div className='rating me-2'>
                                                    <MdOutlineStarPurple500 color='gold' size={20} /><MdOutlineStarPurple500 color='gold' size={20} /><MdOutlineStarPurple500 color='gold' size={20} /><MdOutlineStarPurple500 color='gold' size={20} /><MdOutlineStarPurple500 color='gold' size={20} />
                                                </div>
                                                <span>(1,186 Reviews)</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='description-images mb-4'>
                                        <img src={require('../image/trending-large.jpg')} alt='tours' className='w-100 rounded' />
                                    </div>
                                    <div className='description mb-2'>
                                        <h4 className='des'>Description</h4>
                                        <p className=''>Experience an unforgettable journey through some of Europe’s most iconic
                                            cities and breathtaking landscapes. This thoughtfully designed tour takes
                                            you through vibrant cultural hubs, historic towns, and scenic countryside,
                                            offering the perfect balance of guided sightseeing and personal free time.</p>
                                        <p className='mb-0'>From comfortable accommodations and smooth transportation to knowledgeable
                                            tour guides, every detail is carefully planned to ensure a relaxing and
                                            enjoyable travel experience. Whether you are a first-time traveler or a
                                            seasoned explorer, this tour promises lasting memories and enriching
                                            discoveries.</p>
                                    </div>
                                    <div className='tour-includes mb-4'>
                                        <div className="table-responsive">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td><CiClock2 /> 5 Days</td>
                                                        <td><MdOutlineGroup /> Max People : 26</td>
                                                        <td><FaCalendar /> Jan 18 - Dec 21</td>
                                                    </tr>
                                                    <tr>
                                                        <td><FaUser /> Min Age : 10+</td>
                                                        <td><FaMapSigns /> Pickup : Airport</td>
                                                        <td><FaFileAlt /> Langauge - English, Thai</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className='description mb-2'>
                                        <div className='row'>
                                            <div className='col-lg-6 col-md-6 mb-2'>
                                                <div className='desc-box bg-grey p-4 rounded'>
                                                    <h5 className='mb-2'>Departure & Return Location</h5>
                                                    <p className='mb-0'>John F.K. International Airport(Google Map)</p>
                                                </div>
                                            </div>
                                            <div className='col-lg-6 col-md-6 mb-2'>
                                                <div className='desc-box bg-grey p-4 rounded'>
                                                    <h5 className='mb-2'>Bedroom</h5>
                                                    <p className='mb-0'>4 Bedrooms</p>
                                                </div>
                                            </div>
                                            <div className='col-lg-6 col-md-6 mb-2'>
                                                <div className='desc-box bg-grey p-4 rounded'>
                                                    <h5 className='mb-2'>Departure Time</h5>
                                                    <p className='mb-0'>3 Hours Before Flight Time</p>
                                                </div>
                                            </div>
                                            <div className='col-lg-6 col-md-6 mb-2'>
                                                <div className='desc-box bg-grey p-4 rounded'>
                                                    <h5 className='mb-2'>Departure Time</h5>
                                                    <p className='mb-0'>3 Hours Before Flight Time</p>
                                                </div>
                                            </div>
                                            <div className='col-lg-6 col-md-6 mb-2'>
                                                <div className='desc-box bg-grey p-4 rounded'>
                                                    <h5 className='mb-2'>Price Includes</h5>
                                                    <ul>
                                                        <li className='d-block pb-1'><FaCheck /> Air Fares</li>
                                                        <li className='d-block pb-1'><FaCheck /> 3 Nights Hotel Accomodation</li>
                                                        <li className='d-block pb-1'><FaCheck /> Tour Guide</li>
                                                        <li className='d-block pb-1'> <FaCheck /> Entrance Fees</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='col-lg-6 col-md-6 mb-2'>
                                                <div className='desc-box bg-grey p-4 rounded'>
                                                    <h5 className='mb-2'>Departure & Return Location</h5>
                                                    <ul>
                                                        <li className='d-block pb-1'>Guide Service Fee</li>
                                                        <li className='d-block pb-1'>Driver Service Fee</li>
                                                        <li className='d-block pb-1'>Any Private Expenses</li>
                                                        <li className='d-block pb-1'>Room Service Fees</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='description mb-4'>
                                                <h4 className='des'>What to Expect</h4>
                                                <p>This tour offers a perfect blend of culture, history, and scenic travel.
                                                    You can expect comfortable transportation, carefully planned sightseeing,
                                                    and ample free time to explore each destination at your own pace. From
                                                    vibrant cities to picturesque landscapes, every day brings a new and
                                                    memorable experience.</p>
                                                <p className='mb-0'>Our experienced guides will ensure a smooth journey while sharing local
                                                    insights and recommendations. Whether you are exploring historic landmarks,
                                                    enjoying regional cuisine, or relaxing during scenic drives, this tour is
                                                    designed to provide a hassle-free and enriching travel experience.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div id='iternary'  className='accrodion-grp faq-accrodion mb-4' data-grp-name="faq-accrodion">
                                    <div className='accrodion active' >
                                        <div className='accrodion-title rounded'>
                                            <h5 className='mb-0'><span>Day1</span> - Barcelona - Zaragoza - Madrid</h5>
                                        </div>
                                        <div className="accrodion-content" style={{ display: 'block' }}>

                                            <div className='inner'>
                                                <p className=''>Your journey begins in the vibrant city of Barcelona. After departure,
                                                    travel through the historic city of Zaragoza, where you’ll enjoy a short
                                                    sightseeing break and refreshments. Continue onward to Madrid, arriving
                                                    in the evening. Check in to your hotel and enjoy free time to explore the
                                                    city or relax after the day’s journey.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='accrodion '>
                                        <div className='accrodion-title rounded'>
                                            <h5 className='mb-0'><span>Day2</span> - Zurich - Biel/Bienne - Neuchatel - Geneva</h5>
                                        </div>
                                        <div className='accrodion-content'>
                                            <div className='inner'>
                                                <p className=''>After breakfast, depart from Zurich and travel through the scenic Swiss
                                                    countryside. Stop at Biel/Bienne, a charming bilingual town known for
                                                    its watchmaking heritage. Continue to Neuchâtel, beautifully located on
                                                    the shores of Lake Neuchâtel, where you can enjoy leisure time and
                                                    stunning lake views. Later, proceed to Geneva, arriving in the evening.
                                                    Check in to your hotel and enjoy an overnight stay in this elegant city.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div> */}

                                <div id="iternary" className='accrodion-grp faq-accrodion mb-4' data-grp-name="faq-accrodion">

                                    <div className="accordion-item active">
                                        <input type="radio" name="accordion" id="day1" defaultChecked />

                                        <label htmlFor="day1" className="accordion-header">
                                            Day 1 - Barcelona - Zaragoza - Madrid
                                            <span className="icon"></span>
                                        </label>

                                        <div className="accordion-body">
                                            <p>
                                            Barcelona – Zaragoza – Madrid is a major travel route in Spain connecting the Mediterranean city of Barcelona with the capital, Madrid, via the historic city of Zaragoza. It is well served by fast trains and links different regions of the country.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <input type="radio" name="accordion" id="day2" />
                                        <label htmlFor="day2" className="accordion-header">
                                            Day 2 - Zurich - Biel/Bienne - Neuchatel - Geneva
                                            <span className="icon"></span>
                                        </label>
                                        <div className="accordion-body">
                                            <p>
                                            Zurich – Biel/Bienne – Neuchâtel – Geneva is a scenic route across Switzerland that connects the country’s largest city with the French-speaking west. It passes through lakeside towns and bilingual regions, offering beautiful views, cultural diversity, and excellent rail connections.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <input type="radio" name="accordion" id="day3" />
                                        <label htmlFor="day3" className="accordion-header">
                                            Day 3 - Enchanting Engelberg
                                            <span className="icon"></span>
                                        </label>
                                        <div className="accordion-body">
                                            <p>
                                            Enchanting Engelberg is a beautiful mountain town in Switzerland, known for its snowy peaks, alpine scenery, and peaceful atmosphere. It is a popular destination for skiing, hiking, and enjoying nature all year round.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <input type="radio" name="accordion" id="day4" />
                                        <label htmlFor="day4" className="accordion-header">
                                            Day 4  - Barcelona - Zaragoza - Madrid
                                            <span className="icon"></span>
                                        </label>
                                        <div className="accordion-body">
                                            <p>
                                            Barcelona – Zaragoza – Madrid is a popular travel route in Spain that connects the coastal city of Barcelona with the capital, Madrid, passing through the historic city of Zaragoza. It is well known for fast train connections and links different regions of the country.
                                            </p>
                                        </div>
                                    </div>
                                </div>


                                <div className='single-map mb-4'>
                                    <h4 className='des' id='map'>Map</h4>
                                    {/* map */}
                                    <div className=' rounded overflow-hiddenb rounded mb-md-4'>
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
                                    <h4 className='des' id='reviews'>Average Reviews</h4>
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
                                                    <p class="mb-0">Cleanliness</p>
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
                                <div className='single-comments single-box mb-4'>
                                    <h4 className='mb-4 des' id='comments'>Showing 16 verified guest comments</h4>
                                    {/* comment 1 */}
                                    <div className='comment-box'>
                                        <div className='comment-image mt-2'>
                                            <img src={require('../image/blog1.jpg')} alt='author' />
                                        </div>
                                        <div className='comment-content rounded'>
                                            <div className='d-flex justify-content-between'>
                                                <h4 className='mb-1 Soldman Kell'>Soldman Kell</h4>
                                                <p className='comment-date'>April 25, 2019 at 10:46 am</p>
                                            </div>
                                            <div className='comment-rate'>
                                                <div className='rating'>
                                                    <MdOutlineStarPurple500 color='gold' size={20} /><MdOutlineStarPurple500 color='gold' size={20} /><MdOutlineStarPurple500 color='gold' size={20} /><MdOutlineStarPurple500 color='gold' size={20} /><MdOutlineStarPurple500 color='gold' size={20} />
                                                </div>
                                                <span className='comment-title'>"The worst hotel ever"</span>
                                            </div>
                                            <p className='comment'>Take in the iconic skyline and visit the neighbourhood hangouts that you've only ever seen on TV. Take in the iconic skyline and visit the neighbourhood.</p>
                                            <div className='comment-like'>
                                                <div className='like-title d-flex '>
                                                    <a href='#' className='nir-btn mr-2'>Reply</a>
                                                    <div className='like-btn pull-right'>
                                                        <a className='like'><AiFillLike /></a>
                                                        <a className='dislike'><AiFillDislike /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* comment 2 */}
                                    <div className='comment-box'>
                                        <div className='comment-image mt-2'>
                                            <img src={require('../image/blog2.jpg')} alt='author' />
                                        </div>
                                        <div className='comment-content rounded'>
                                            <div className='d-flex justify-content-between'>
                                                <h4 className='mb-1 Soldman Kell'>Burson Lesson</h4>
                                                <p className='comment-date'>April 25, 2019 at 10:46 am</p>
                                            </div>
                                            <div className='comment-rate'>
                                                <div className='rating'>
                                                    <MdOutlineStarPurple500 color='gold' size={20} /><MdOutlineStarPurple500 color='gold' size={20} /><MdOutlineStarPurple500 color='gold' size={20} /><MdOutlineStarPurple500 color='gold' size={20} /><MdOutlineStarPurple500 color='gold' size={20} />
                                                </div>
                                                <span className='comment-title'>"Was too noisy and not suitable for business meetings"</span>
                                            </div>
                                            <p className='comment'>Take in the iconic skyline and visit the neighbourhood hangouts that you've only ever seen on TV. Take in the iconic skyline and visit the neighbourhood.</p>
                                            <div className='comment-like'>
                                                <div className='like-title d-flex'>
                                                    <a href='#' className='nir-btn mr-2'>Reply</a>
                                                    <div className='like-btn pull-right'>
                                                        <a className='like'><AiFillLike /></a>
                                                        <a className='dislike'><AiFillDislike /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='single-add-review'>
                                    <h4 className='des' id='review'>Write a Review</h4>
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


                        <div className='col-lg-4 col-md-12'>
                            <div className='sidebar-sticky sticky1'>
                                <div className='tabs-navbar bg-lgrey mb-4 bordernone rounded overflow-hidden'>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <ul className='nav nav-tabs bordernone mb-0' id='tab'>
                                                <li className='active' data-toggle="tab"><a className='rounded box-shadow mb-2 border-all' href='#highlight'>Highlight</a></li>
                                                <li data-toggle="tab"><a className='rounded box-shadow mb-2 border-all' href='#iternary' data-toggle="tab">Iternary</a></li>
                                                <li data-toggle="tab"><a className='rounded box-shadow mb-2 border-all' href='#map'>Map</a></li>
                                                <li data-toggle="tab"><a className='rounded box-shadow mb-2 border-all' href='#reviews'>Reviews</a></li>
                                                <li data-toggle="tab"><a className='rounded box-shadow mb-2 border-all' href='#comments'>Comments</a></li>
                                                <li data-toggle="tab"><a className='rounded box-shadow mb-2 border-all' href='#review'>Add Reviews</a></li>
                                            </ul>
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

export default Tourdetails
