import React from 'react'
import { Container } from 'react-bootstrap'
import { FaPlay } from "react-icons/fa";

function Blogarticle() {
    return (
        <>
            <Container>
                <section className='page-section'>
                    <div className='steps-container'>
                        {/* subtitle */}
                        <p className="subtitle">Our Articles & Blogs</p>

                        {/* Title */}
                        <h2 className="title">
                            SOme Related <span> Posts </span>
                        </h2>

                        {/* Description */}
                        <p className="text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                        </p>
                        <div className='featured-video-main'>
                            <div className='row'>
                                <div className='col-lg-6 mb-4'>
                                    <div className='trend-item box-shadow bg-white rounded overflow-hidden'>
                                        <div className='trend-image position-relative'>
                                            <img src={require('../image/trending14.jpg')} alt='blogimage' />
                                            <div className='video-button text-center position-absolute top-50 w-100 mx-auto z-index3 start-50 translate-middle'>
                                                <div className='call-button text-center'>
                                                    <button className='play-btn js-video-button' type='button' data-video-id="152879427" data-channel="vimeo"><FaPlay size={20} color='white' /></button>
                                                </div>
                                                <div className='video-figure'></div>
                                            </div>
                                        </div>
                                        <div className='trend-content-main'>
                                            <div className='trend-content-main p-4 pb-2'>
                                                <div className='trend-content'>
                                                    <h5 className='theme mb-1 d-inline-block'>Inspiration</h5>
                                                    <h4><a href='#'>Our Main Inspire Runner with Autism Graces of Women's Running</a></h4>
                                                    <p className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                    <div className='entry-meta d-flex align-items-center justify-content-between'>
                                                        <div className='entry-author mb-2'>
                                                            <img src={require('../image/blog2.jpg')} alt='' className='rounded-circle me-1' />
                                                            <span>Sollmond Nell</span>
                                                        </div>
                                                        <div className='eentry-button d-flex align-items-center mb-2'>
                                                            <a className='nir-btn'>Read More</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-lg-6 mb-4'>
                                    <div className='row'>
                                        <div className='col-lg-6 mb-1'>
                                            <div className='trend-item2 box-shadow bg-white mb-4 rounded overflow-hidden'>
                                                <div className='trend-image'>
                                                    <img src={require('../image/trending10.jpg')} alt='blog image' className='' />
                                                </div>
                                                <div className='trend-content-main p-4 pb-2'>
                                                    <div className='trend-content'>
                                                        <h5 className='theme mb-1'>Design</h5>
                                                        <h4><a href='#'>Get Ready To Up Your Creative Game</a></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-6 mb-1'>
                                            <div className='trend-item2 box-shadow bg-white mb-4 rounded overflow-hidden'>
                                                <div className='trend-image'>
                                                    <img src={require('../image/trending11.jpg')} alt='blog image' className='' />
                                                </div>
                                                <div className='trend-content-main p-4 pb-2'>
                                                    <div className='trend-content'>
                                                        <h5 className='theme mb-1'>Health</h5>
                                                        <h4><a href='#'>Tradition design won’t save us in the COVID</a></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-6 mb-1'>
                                            <div className='trend-item2 box-shadow bg-white mb-4 rounded overflow-hidden'>
                                                <div className='trend-image'>
                                                    <img src={require('../image/trending13.jpg')} alt='blog image' className='' />
                                                </div>
                                                <div className='trend-content-main p-4 pb-2'>
                                                    <div className='trend-content'>
                                                        <h5 className='theme mb-1'>Foods</h5>
                                                        <h4><a href='#'>The 1 Food that helps remote teams</a></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-6 mb-1'>
                                            <div className='trend-item2 box-shadow bg-white mb-4 rounded overflow-hidden'>
                                                <div className='trend-image'>
                                                    <img src={require('../image/trending12.jpg')} alt='blog image' className='' />
                                                </div>
                                                <div className='trend-content-main p-4 pb-2'>
                                                    <div className='trend-content'>
                                                        <h5 className='theme mb-1'>Products</h5>
                                                        <h4><a href='#'>New: Freehand Templates, built for all</a></h4>
                                                    </div>
                                                </div>
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

export default Blogarticle
