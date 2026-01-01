import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function Contact() {
    return (
        <>
            <section className='breadcrumb-main' >
                <div className='section-shape section-shape1  bottom-0'></div>
                <div className='breadcrumb-outer'>
                    <div className='about-section'>
                        <div className='breadcrumb-content text-center'>
                            <h1 className='page-title'>CONTACT US </h1>
                            <nav className='d-block '>
                                <ul className='breadcrumb'>
                                    <li className='breadcrumb-item'><Link to="/">Home</Link></li>
                                    <li className='breadcrumb-item '>Contact Us</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <Container>
                <section className='contact-main pt-6 pb-60 page-section'>
                    <div className='contact-info-main mt-0'>
                        <div className='row'>
                            <div className='col-lg-10 col-offset-lg-1 mx-auto'>
                                <div className='contact-info bg-white'>
                                    <div className='contact-info-title text-center mb-4 px-5'>
                                        <h3 className='mb-1'>INFORMATION ABOUT US</h3>
                                        <p className='mb-0'>Sagittis posuere id nam quis vestibulum vestibulum a facilisi at elit hendrerit scelerisque sodales nam dis orci.</p>
                                    </div>
                                    <div className='contact-info-content row mb-1'>
                                        {/* card 1 */}
                                        <div className='col-lg-4 col-md-6 mb-4'>
                                            <div className='info-item bg-lgrey px-4 py-5 border-all text-center rounded'>
                                                <div className='info-icon mb-2'>
                                                    <FaLocationDot color='#029e9d' size={20} />
                                                </div>
                                                <div className='info-content'>
                                                    <h3>Office Location</h3>
                                                    <p className='m-0'>445 Mount Eden Road, Mangal Bazar, Vadodara, Gujarat</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* card 2 */}
                                        <div className='col-lg-4 col-md-6 mb-4'>
                                            <div className='info-item bg-lgrey px-4 py-5 border-all text-center rounded'>
                                                <div className='info-icon mb-2'>
                                                    <FaPhone color='#029e9d'  size={20}/>
                                                </div>
                                                <div className='info-content'>
                                                    <h3>Phone Number</h3>
                                                    <p className='m-0'>977-444-666-888</p>
                                                    <p className='m-0'>977-444-222-000</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* card 3 */}
                                        <div className='col-lg-4 col-md-6 mb-4'>
                                            <div className='info-item bg-lgrey px-4 py-5 border-all text-center rounded'>
                                                <div className='info-icon mb-2'>
                                                    <IoMdMail color='#029e9d' size={20} />
                                                </div>
                                                <div className='info-content'>
                                                    <h3>Email Address</h3>
                                                    <p className='m-0'>info@realshield.com</p>
                                                    <p className='m-0'>help@realshield.com</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='contact-form'>
                                        <div className='row'>
                                            <div className='col-lg-6 col-md-6 col-sm-12 mb-2'>
                                                <div className='map rounded overflow-hiddenb rounded mb-md-4'>
                                                    <div style={{ width: 100 }}>
                                                        <iframe
                                                            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=+(mangal%20bazar)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                                                            width="520"
                                                            height="600"
                                                            title="Example Iframe"
                                                        ></iframe>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-lg-6 col-md-6 col-sm-12 mb-2'>
                                                <div id='contactform-error-msg'></div>
                                                <form>
                                                    <div className='form-group mb-2'>
                                                        <input type='text' className="form-control" placeholder='First Name'/>
                                                    </div>
                                                    <div className='form-group mb-2'>
                                                        <input type='text' className="form-control" placeholder='Last Name'/>
                                                    </div>
                                                    <div className='form-group mb-2'>
                                                        <input type='email' className="form-control" placeholder='Email'/>
                                                    </div>
                                                    <div className='form-group mb-2'>
                                                        <input type='text' className="form-control" placeholder='Phone'/>
                                                    </div>
                                                    <div className='textarea mb-2'>
                                                        <textarea placeholder='Enter a message' name='comment'></textarea>
                                                    </div>
                                                    <div className='comment-btn text-center'>
                                                        <button type='submit' className='nir-btn' value='Send Message'>Send Message</button>
                                                    </div>
                                                </form>
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

export default Contact
