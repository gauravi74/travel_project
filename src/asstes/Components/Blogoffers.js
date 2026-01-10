import React from 'react'
import post1 from '../image/trending10.jpg'
import b1 from '../image/blog2.jpg'
import b2 from '../image/blog1.jpg'
import post2 from '../image/trending12.jpg'
import b3 from '../image/blog3.jpg'
import post3 from '../image/trending13.jpg'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Slider from "react-slick";

function Blogoffers() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <>
            {/* Blogs Offers */}
            <Container>
                <section className='page-section'>
                    <div className='steps-container'>
                        {/* subtitle */}
                        <p className="subtitle">Our Blogs Offers</p>

                        {/* Title */}
                        <h2 className="title">
                            Recent <span> Articles & Posts </span>
                        </h2>

                        {/* Description */}
                        <p className="text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                        </p>
                        <div>

                            {/* <Slider {...settings}>

                                CARD 1
                                <div className='mb-4'>
                                    <div className='card-Offers'>
                                        <div className='card-body post-info'>
                                            <img src={post1} alt="Santorini" className="card-image" />
                                            <div className="tourcontent">
                                                <p className="tourcountry">Technology</p>
                                                <Link to='' className="nav-link" id='posttitle'>
                                                    How a developer duo at Deutsche Bank keep remote alive.
                                                </Link>
                                                <p className="tourdesc">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                </p>
                                                <div className='d-flex justify-content-between'>
                                                    <div className='blog-info'>
                                                        <img src={b1} alt='blog' className='blog-img' />
                                                        <h6 className='b-name'>Sollmond Nell</h6>
                                                    </div>
                                                    <a href='Home.js' className='nir-btn'>Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                CARD 2
                                <div className='mb-4'>
                                    <div className='card-Offers'>
                                        <div className='card-body post-info'>
                                            <img src={post2} alt="Santorini" className="card-image" />
                                            <div className="tourcontent">
                                                <p className="tourcountry">Inspiration</p>
                                                <Link to='' className="nav-link" id='posttitle'>
                                                    Inspire Runner with Autism Graces of Women's Running
                                                </Link>
                                                <p className="tourdesc">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                </p>
                                                <div className='d-flex justify-content-between'>
                                                    <div className='blog-info'>
                                                        <img src={b2} alt='blog' className='blog-img' />
                                                        <h6 className='b-name'>David Scott</h6>
                                                    </div>
                                                    <a href='Home.js' className='nir-btn'>Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                CARD 3
                                <div className='mb-4'>
                                    <div className='card-Offers'>
                                        <div className='card-body post-info'>
                                            <img src={post3} alt="Santorini" className="card-image" />
                                            <div className="tourcontent">
                                                <p className="tourcountry">Public</p>
                                                <Link to='' className="nav-link" id='posttitle'>
                                                    Services To Grow Your Business Sell Affiliate Products
                                                </Link>
                                                <p className="tourdesc">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                </p>
                                                <div className='d-flex justify-content-between'>
                                                    <div className='blog-info'>
                                                        <img src={b3} alt='blog' className='blog-img' />
                                                        <h6 className='b-name'>John Bolden</h6>
                                                    </div>
                                                    <a href='Home.js' className='nir-btn'>Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                card 4
                                <div className='mb-4'>
                                    <div className='card-Offers'>
                                        <div className='card-body post-info'>
                                            <img src={post2} alt="Santorini" className="card-image" />
                                            <div className="tourcontent">
                                                <p className="tourcountry">Inspiration</p>
                                                <Link to='' className="nav-link" id='posttitle'>
                                                    Inspire Runner with Autism Graces of Women's Running
                                                </Link>
                                                <p className="tourdesc">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                </p>
                                                <div className='d-flex justify-content-between'>
                                                    <div className='blog-info'>
                                                        <img src={b2} alt='blog' className='blog-img' />
                                                        <h6 className='b-name'>David Scott</h6>
                                                    </div>
                                                    <a href='Home.js' className='nir-btn'>Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider> */}


                            <div className='row'>
                                <div className='col-lg-4 col-md-6 col-sm-6 mb-4'>
                                    <div className='card-Offers'>
                                        <div className='card-body post-info'>
                                            <div>
                                                <img src={post1} alt="Santorini" className="card-image" />
                                            </div>
                                            <div className="tourcontent">
                                                <p className="tourcountry">Technology</p>
                                                <Link to='' className="nav-link" id='posttitle'>How a developer duo at Deutsche Bank keep remote alive.</Link>

                                                <p className="tourdesc">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                </p>
                                                <div className='d-flex justify-content-between'>
                                                    <div className='blog-info'>
                                                        <img src={b1} alt='bolg' className='blog-img' />
                                                        <h6 className='b-name'>Sollmond Nell</h6>
                                                    </div>

                                                    <Link to='#' className='nir-btn'>Read More</Link>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-6 col-sm-6 mb-4'>
                                    <div className='card-Offers'>
                                        <div className='card-body post-info'>
                                            <div>
                                                <img src={post2} alt="Santorini" className="card-image" />
                                            </div>
                                            <div className="tourcontent">
                                                <p className="tourcountry">Inspiration</p>
                                                <Link to='' className="nav-link" id='posttitle'>Inspire Runner with Autism Graces of Women's Running</Link>

                                                <p className="tourdesc">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                </p>
                                                <div className='d-flex justify-content-between'>
                                                    <div className='blog-info'>
                                                        <img src={b2} alt='bolg' className='blog-img' />
                                                        <h6 className='b-name'>David Scott</h6>
                                                    </div>

                                                    <Link to='#' className='nir-btn'>Read More</Link>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-6 col-sm-6 mb-4'>
                                    <div className='card-Offers'>
                                        <div className='card-body post-info'>
                                            <div>
                                                <img src={post3} alt="Santorini" className="card-image" />
                                            </div>
                                            <div className="tourcontent">
                                                <p className="tourcountry">Public</p>
                                                <Link to='' className="nav-link" id='posttitle'>Services To Grow Your Business Sell Affiliate Products</Link>

                                                <p className="tourdesc">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                </p>
                                                <div className='d-flex justify-content-between'>
                                                    <div className='blog-info'>
                                                        <img src={b3} alt='bolg' className='blog-img' />
                                                        <h6 className='b-name'>John Bolden</h6>
                                                    </div>

                                                    <Link to='#' className='nir-btn'>Read More</Link>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}

                </section>
            </Container>







        </>
    )
}

export default Blogoffers
