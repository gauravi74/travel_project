import React, { useRef, useState } from 'react'
import { Container } from 'react-bootstrap'
import { FaRegEye } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
// import { FaPlay } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLeftArrowAlt } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
import { MdOutlineStarPurple500 } from "react-icons/md";
import Blog from '../Components/Blog';
import Partners from '../Components/Partners';
import { FaPlay, FaTimes } from "react-icons/fa";
import sampleVideo2 from "../video/sampleVideo2.mp4";

function Blogdetail() {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handlePlay = () => {
        setIsOpen(true); // open modal
        setTimeout(() => {
            videoRef.current.play();
            setIsPlaying(true);
        }, 100); // slight delay to ensure video loads
    };

    const handleClose = () => {
        videoRef.current.pause();
        setIsPlaying(false);
        setIsOpen(false);
    };
    return (
        <>
            <Container>
                {/* <section > */}
                <div className='page-cover pt-10 pb-10 bg-lgrey border-b'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6 mb-4'>
                            <div className='cover-content text-center text-md-start'>
                                <div className='author-detail mb-2'>
                                    <a className='tag white bg-theme py-1 px-3 me-2 rounded'>#Technology</a>
                                    <a className='tag py-1 px-3'><FaRegEye /> 2500</a>
                                </div>
                                <h1 className='blog-title1'>Apple honors eight developers with annual Apple Design Awards.</h1>
                                <div className='author-detail d-flex align-items-center'>
                                    <span className='me-3'><a><FaClock /> Posted On : 12 May 2021 </a></span>
                                    <span className='me-3'><a><FaUser /> Jack Richard</a></span>
                                    <span className='me-3'><a><FaComments /> 50</a></span>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 mb-4'>
                            <div className='box-shadow p-3 position-relative'>
                                <img alt='blog detail' src={require('../image/trending6.jpg')} className='w-100 rounded img-fluid' />
                                <div className='video-button text-center position-absolute top-50 w-100 mx-auto z-index3 start-50 translate-middle'>
                                    <div className="call-button text-center">
                                        <button
                                            type="button"
                                            className="play-btn"
                                            onClick={handlePlay}
                                        >
                                            <FaPlay color="white" size={25}/>
                                            {/* Play Video */}
                                        </button>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </section> */}


                <section className='blog blog-left pt-10 page-section'>
                    <div className='row'>
                        <div className='col-lg-8 col-md-12 col-sm-12'>
                            <div className='blog-single'>
                                <div className='blog-single-in d-md-flex align-items-center mb-4 text-center text-md-start'>
                                    <div className='class="blog-date me-4"'>
                                        <div className='date text-center bg-theme p-5 py-4 rounded'>
                                            <h2 className='day mb-0 white'>11</h2>
                                            <div className='month white'>May</div>
                                        </div>
                                    </div>
                                    <div className='blog-single-in-cont col-md-9 col-sm-12'>
                                        <div className='blog-content'>
                                            <h2 className='blog-title mb-0'><a>Winners are recognized for outstanding app design</a></h2>
                                        </div>
                                    </div>
                                </div>
                                <div className='blog-wrapper'>
                                    <div className='blog-content'>
                                        <div className='blog-imagelist mb-3'>
                                            <img src={require('../image/bg3.jpg')} alt="image" className="rounded img-fluid" />
                                        </div>
                                        <p className='mb-3'>The tech world is constantly evolving, and Apple continues to set the bar for innovative app design. Each year, developers push the boundaries of creativity, crafting apps that not only function flawlessly but also deliver an exceptional user experience. <br></br>
                                            <br></br>In this article, we explore some of the standout apps recognized by the Apple Design Awards. These apps demonstrate a perfect balance of performance, usability, and design aesthetics, making them not just tools but experiences that enrich users' daily lives. Whether you're a designer, developer, or simply a tech enthusiast, these stories of innovation provide inspiration for the future of digital creativity. </p>
                                    </div>
                                    <div className='blog-quote mb-4 rounded'>
                                        <FaQuoteLeft size={50} color='white' />
                                        <p className='white'>“To take a trivial example, which ever undertakes laborious physical work exercise, except obtain some advantage blinded”</p>
                                        <span className='text-white'>By Michael Delwell  </span>
                                    </div>
                                    <div className='blog-imagelist mb-4'>
                                        <div className='row'>
                                            <div className='col-md-6 col-sm-6 col-xs-12 mb-2'>
                                                <img src={require('../image/trending4.jpg')} alt='img' className='rounded' />
                                            </div>
                                            <div className='col-md-6 col-sm-6 col-xs-12 mb-2'>
                                                <img src={require('../image/trending2.jpg')} alt='img' className='rounded' />
                                            </div>
                                        </div>
                                    </div>
                                    <p className='mb-4 tx'>
                                        as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
                                        packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                                    </p>
                                    <div className='blog-share d-flex justify-content-between align-items-center mb-4 bg-lgrey border rounded'>
                                        <div className='blog-share-tag'>
                                            <ul className='inline m-0'>
                                                <li><strong>Posted In:</strong></li>
                                                <li><a>Fashion,</a></li>
                                                <li><a>Beauty,</a></li>
                                                <li><a>Vacation,</a></li>
                                                <li><a>Travel,</a></li>
                                                <li><a>News</a></li>
                                            </ul>
                                        </div>
                                        <div className='header-social'>
                                            <ul className='inline m-0'>
                                                <li><a><FaFacebookF /></a></li>
                                                <li><a><FaGooglePlusG /></a></li>
                                                <li><a><FaTwitter /></a></li>
                                                <li><a><FaLinkedinIn /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='blog-author mb-4 bg-grey border rounded'>
                                        <div className='blog-author-item'>
                                            <div className='row d-flex justify-content-between align-items-center'>
                                                <div className='col-md-3 col-sm-3 col-xs-12'>
                                                    <div className='blog-thumb text-center position-relative'>
                                                        <img src={require('../image/blog1.jpg')} alt='author' />
                                                    </div>
                                                </div>
                                                <div className='col-md-9 col-sm-9 col-xs-12'>
                                                    <h3 className='title pink'><a>About Author </a><span>Graphic Designer</span></h3>
                                                    <p className='m-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sceler neque in euismod. Nam vitae urnasodales neque in faucibus.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-next mb-4 row g-0 rounded overflow-hidden">

                                        {/* Previous */}
                                        <a className="col-12 col-sm-6 bg-theme text-decoration-none">
                                            <div className="p-4 h-100 d-flex align-items-center">
                                                <BiLeftArrowAlt size={30} color="white" />
                                                <div className="ms-3">
                                                    <p className="m-0 text-white">Previous Post</p>
                                                    <p className="m-0 text-white">The bedding was hardly able</p>
                                                </div>
                                            </div>
                                        </a>

                                        {/* Next */}
                                        <a className="col-12 col-sm-6 bg-grey text-decoration-none">
                                            <div className="p-4 h-100 d-flex align-items-center justify-content-sm-end text-sm-end">
                                                <div className="me-3">
                                                    <p className="m-0 text-dark">Next Post</p>
                                                    <p className="m-0 text-dark">The bedding was hardly able</p>
                                                </div>
                                                <BiRightArrowAlt size={30} color="black" />
                                            </div>
                                        </a>

                                    </div>

                                    <div className='single-comments single-box mb-4'>
                                        <h4 className='mb-4'>Showing 16 verified guest comments</h4>
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
                                                    <div className='like-title float-left'>
                                                        <a href='#' className='nir-btn mr-2'>Reply</a>
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
                                                    <div className='like-title float-left'>
                                                        <a href='#' className='nir-btn mr-2'>Reply</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='single-add-review'>
                                        <h4>Write a Review</h4>
                                        <foem>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <div className='form-group mb-2'>
                                                        <input type='text' placeholder='Name' className='form-control w-100' />
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className='form-group mb-2'>
                                                        <input type='email' placeholder='Email' className='form-control w-100' />
                                                    </div>
                                                </div>
                                                <div className='col-md-12'>
                                                    <div className='form-group mb-2'>
                                                        <textarea placeholder='Comment' className='form-control w-100'></textarea>
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className='form-btn mb-2'>
                                                        <button type='submit' className='nir-btn'>Submit Review</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </foem>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='col-lg-4 col-md-12 col-sm-12 mb-4'>
                            <div className='sidebar-sticky'>
                                <div className='list-sidebar'>
                                    {/* <div className='sidebar-item'>
                                            <h4>Search Here</h4>
                                            <div className='newsletter-form rounded overflow-hidden position-relative'>
                                                <form>
                                                    <input type='text' placeholder='Search your keyword here..' />
                                                    <input type='submit' className='nir-btn bordernone rounded-0 position-absolute end-0' value='Search' />
                                                </form>
                                            </div>
                                        </div> */}
                                    <div className='author-news mb-4 box-shadow p-5 text-center rounded overflow-hidden border-all'>
                                        <div className='author-news-content'>
                                            <div className='author-thumb mb-1'>
                                                <img src={require('../image/Guides2.jpg')} alt='author imahe' className='author-img img-fluid rounded-circle' />
                                            </div>
                                            <div className='author-content'>
                                                <h3 className='title mb-1'><a href='#'>Relson Dulux</a></h3>
                                                <p className='mb-2'>Hello, We’re content writer who is fascinated by content fashion, celebrity and lifestyle. We helps clients bring the right content to the right people.</p>
                                                <div className='header-social'>
                                                    <ul>
                                                        <li></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='sidebar-item mb-4'>
                                        <h4>All Categories</h4>
                                        <ul className='sidebar-category'>
                                            <li><a href='#'>All</a></li>
                                            <li><a href='#'>Featured</a></li>
                                            <li><a href='#'>Sliders</a></li>
                                            <li className='active'><a href='#'>Manage Listings</a></li>
                                            <li><a href='#'>Address and Map</a></li>
                                            <li><a href='#'>Reservation Requests</a></li>
                                            <li><a href='#'>Your Reservation</a></li>
                                            <li><a href='#'>Search Results</a></li>
                                        </ul>
                                    </div>

                                    <div className='popular-post sidebar-item mb-4'>
                                        <div className='sidebar-tabs'>
                                            <div className='post-tabs'>
                                                <ul className='nav nav-tabs nav-pills nav-fill' id='postsTab1' role='tablist'>
                                                    <li className='nav-item d-inline-block' role='presentation'>
                                                        <button
                                                            aria-selected="true"
                                                            data-bs-target="#popular"
                                                            data-bs-toggle="tab"
                                                            id="popular-tab"
                                                            className='nav-link active'
                                                            type='button'
                                                        >
                                                            Popular
                                                        </button>
                                                    </li>
                                                    <li className='nav-item d-inline-block' role='presentation'>
                                                        <button
                                                            aria-selected="false"
                                                            data-bs-target="#recent"
                                                            data-bs-toggle="tab"
                                                            id="recent-tab"
                                                            className='nav-link'
                                                            type='button'
                                                        >
                                                            Recent
                                                        </button>
                                                    </li>
                                                </ul>

                                                <div className='tab-content' id='postsTabContent1'>

                                                    {/* Popular Tab Content */}
                                                    <div className='tab-pane fade show active' aria-labelledby="popular-tab" id="popular" role="tabpanel">
                                                        <article className='post mb-2 border-b pb-2'>
                                                            <div className='s-content d-flex align-items-center justify-space-between'>
                                                                <div className='sidebar-image w-25 me-3 rounded'>
                                                                    <a><img src={require('../image/trending1.jpg')} alt='blog1' /></a>
                                                                </div>
                                                                <div className='content-list w-75'>
                                                                    <h5 className='mb-1'><a>An Incredibly Easy Method That Works For All</a></h5>
                                                                    <div className='date'>10 Apr 2021</div>
                                                                </div>
                                                            </div>
                                                        </article>
                                                        <article className='post mb-2 border-b pb-2'>
                                                            <div className='s-content d-flex align-items-center justify-space-between'>
                                                                <div className='sidebar-image w-25 me-3 rounded'>
                                                                    <a><img src={require('../image/trending2.jpg')} alt='blog2' /></a>
                                                                </div>
                                                                <div className='content-list w-75'>
                                                                    <h5 className='mb-1'><a>15 Unheard Ways To Achieve Greater Walker</a></h5>
                                                                    <div className='date'>29 Mar 2021</div>
                                                                </div>
                                                            </div>
                                                        </article>
                                                        <article className='post mb-2 border-b pb-2'>
                                                            <div className='s-content d-flex align-items-center justify-space-between'>
                                                                <div className='sidebar-image w-25 me-3 rounded'>
                                                                    <a><img src={require('../image/trending1.jpg')} alt='blog3' /></a>
                                                                </div>
                                                                <div className='content-list w-75'>
                                                                    <h5 className='mb-1'><a>An Incredibly Easy Method That Works For All</a></h5>
                                                                    <div className='date'>10 Apr 2021</div>
                                                                </div>
                                                            </div>
                                                        </article>
                                                        {/* <article className='post mb-2 border-b pb-2'>
                                                                <div className='s-content d-flex align-items-center justify-space-between'>
                                                                    <div className='sidebar-image w-25 me-3 rounded'>
                                                                        <a><img src={require('../image/trending4.jpg')} alt='blog4' /></a>
                                                                    </div>
                                                                    <div className='content-list w-75'>
                                                                        <h5 className='mb-1'><a>15 Unheard Ways To Achieve Greater Walker</a></h5>
                                                                        <div className='date'>29 Mar 2021</div>
                                                                    </div>
                                                                </div>
                                                            </article> */}
                                                    </div>

                                                    {/* Recent Tab Content */}
                                                    <div className='tab-pane fade' aria-labelledby="recent-tab" id="recent" role="tabpanel">
                                                        <article className='post mb-2 border-b pb-2'>
                                                            <div className='s-content d-flex align-items-center justify-space-between'>
                                                                <div className='sidebar-image w-25 me-3 rounded'>
                                                                    <a><img src={require('../image/trending5.jpg')} alt='blog5' /></a>
                                                                </div>
                                                                <div className='content-list w-75'>
                                                                    <h5 className='mb-1'><a>10 Ways To Immediately Start Selling Furniture</a></h5>
                                                                    <div className='date'>08 Mar 2021</div>
                                                                </div>
                                                            </div>
                                                        </article>
                                                        <article className='post mb-2 border-b pb-2'>
                                                            <div className='s-content d-flex align-items-center justify-space-between'>
                                                                <div className='sidebar-image w-25 me-3 rounded'>
                                                                    <a><img src={require('../image/trending6.jpg')} alt='blog6' /></a>
                                                                </div>
                                                                <div className='content-list w-75'>
                                                                    <h5 className='mb-1'><a>Photography Photo modify and Beautiful Walker</a></h5>
                                                                    <div className='date'>18 Jan 2021</div>
                                                                </div>
                                                            </div>
                                                        </article>
                                                        <article className='post mb-2 border-b pb-2'>
                                                            <div className='s-content d-flex align-items-center justify-space-between'>
                                                                <div className='sidebar-image w-25 me-3 rounded'>
                                                                    <a><img src={require('../image/trending1.jpg')} alt='blog7' /></a>
                                                                </div>
                                                                <div className='content-list w-75'>
                                                                    <h5 className='mb-1'><a>An Incredibly Easy Method That Works For All</a></h5>
                                                                    <div className='date'>10 Apr 2021</div>
                                                                </div>
                                                            </div>
                                                        </article>
                                                        {/* <article className='post mb-2 border-b pb-2'>
                                                                <div className='s-content d-flex align-items-center justify-space-between'>
                                                                    <div className='sidebar-image w-25 me-3 rounded'>
                                                                        <a><img src={require('../image/trending3.jpg')} alt='blog8' /></a>
                                                                    </div>
                                                                    <div className='content-list w-75'>
                                                                        <h5 className='mb-1'><a>1Certified Graphic Design with Free Project Course</a></h5>
                                                                        <div className='date'>12 Feb 2021</div>
                                                                    </div>
                                                                </div>
                                                            </article> */}
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='sidebar-item mb-4'>
                                        <h4>Tags</h4>
                                        <ul className='sidebar-tags'>
                                            <li><a href='#'>Tour</a></li>
                                            <li><a href='#'>Rental</a></li>
                                            <li><a href='#'>City</a></li>
                                            <li><a href='#'>Yatch</a></li>
                                            <li><a href='#'>Activity</a></li>
                                            <li><a href='#'>Museum</a></li>
                                            <li><a href='#'>Beauty</a></li>
                                            <li><a href='#'>Classic</a></li>
                                            <li><a href='#'>Creative</a></li>
                                            <li><a href='#'>Designs</a></li>
                                            <li><a href='#'>Featured</a></li>
                                            <li><a href='#'>Free Style</a></li>
                                            <li><a href='#'>Programs</a></li>
                                            <li><a href='#'>Travel</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>


            <Blog />
            <Partners />

            {/* video modal */}
            {isOpen && (
                <div className="video-modal">
                    <div className="video-wrapper">
                        
                        <video ref={videoRef} src={sampleVideo2} controls width="100%" />
                        <button className="close-btn" onClick={handleClose}>
                            <FaTimes size={25} color="#fff" />
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Blogdetail
