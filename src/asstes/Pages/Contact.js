import React, { useRef, useState } from 'react';
import { Container, Alert, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function Contact() {

    const form = useRef();

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const validateForm = (formData) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9+\s()-]{7,}$/;

        if (!formData.first_name.value.trim()) {
            return "First name is required";
        }
        if (!formData.last_name.value.trim()) {
            return "Last name is required";
        }
        if (!emailRegex.test(formData.email.value)) {
            return "Enter a valid email address";
        }
        if (formData.phone.value && !phoneRegex.test(formData.phone.value)) {
            return "Enter a valid phone number";
        }
        if (!formData.message.value.trim()) {
            return "Message cannot be empty";
        }
        return null;
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setSuccess('');
        setError('');

        const validationError = validateForm(e.target);
        if (validationError) {
            setError(validationError);
            return;
        }

        setLoading(true);

        emailjs.sendForm(
            'service_pqs4ein',
            'template_bgwv6pu',
            form.current,
            '9F_qp_cMkixaJyrzI'
        )
        .then(() => {
            setSuccess('Message sent successfully!');
            form.current.reset();
        })
        .catch(() => {
            setError('Failed to send message. Please try again.');
        })
        .finally(() => {
            setLoading(false);
        });
    };

    return (
        <>
            {/* BREADCRUMB */}
            <section className='breadcrumb-main' >
                <div className='section-shape section-shape1 bottom-0'></div> 
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
                <section className="contact-main py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">

                            {/* INFO CARDS */}
                            {/* <div className="row text-center mb-4">
                                <div className="col-md-4 mb-3">
                                    <div className="p-4 bg-light rounded h-100">
                                        <FaLocationDot color="#029e9d" size={24} />
                                        <h6 className="mt-2">Office Location</h6>
                                        <p className="mb-0 small">
                                            445 Mount Eden Road, Mangal Bazar, Vadodara
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-3">
                                    <div className="p-4 bg-light rounded h-100">
                                        <FaPhone color="#029e9d" size={24} />
                                        <h6 className="mt-2">Phone Number</h6>
                                        <p className="mb-0 small">977-444-666-888</p>
                                        <p className="mb-0 small">977-444-222-000</p>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-3">
                                    <div className="p-4 bg-light rounded h-100">
                                        <IoMdMail color="#029e9d" size={24} />
                                        <h6 className="mt-2">Email Address</h6>
                                        <p className="mb-0 small">info@realshield.com</p>
                                        <p className="mb-0 small">help@realshield.com</p>
                                    </div>
                                </div>
                            </div> */}
                            <div className='contact-info bg-white'>
                                <div className='contact-info-title text-center mb-4 px-5'>
                                    <h3 className='mb-1'>INFORMATION ABOUT US</h3>
                                    <p className='mb-0'>Sagittis posuere id nam quis vestibulum vestibulum a facilisi at elit hendrerit scelerisque sodales nam dis orci.</p>
                                </div>
                                <div className='contact-info-content row mb-1'> 
                                {/* card 1 */} 
                                <div className='col-lg-4 col-md-6 mb-4'>
                                    <div className='info-item bg-lgrey px-4 py-5 border-all text-center rounded'>
                                        <div className='info-icon mb-2'> <FaLocationDot color='#029e9d' size={20} /> </div>
                                        <div className='info-content'>
                                            <h3>Office Location</h3>
                                            <p className='m-0'>445 Mount Eden Road, Mangal Bazar, Vadodara, Gujarat</p>
                                            </div>
                                        </div>
                                    </div> 
                                    {/* card 2 */} 
                                    <div className='col-lg-4 col-md-6 mb-4'>
                                        <div className='info-item bg-lgrey px-4 py-5 border-all text-center rounded'>
                                            <div className='info-icon mb-2'> <FaPhone color='#029e9d' size={20} /> </div>
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
                                            <div className='info-icon mb-2'> <IoMdMail color='#029e9d' size={20} /> </div>
                                            <div className='info-content'>
                                                <h3>Email Address</h3>
                                                <p className='m-0'>info@realshield.com</p>
                                                <p className='m-0'>help@realshield.com</p>
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                

                            {/* MAP + FORM */}
                            <div className="row">

                                {/* MAP */}
                                <div className="col-lg-6 mb-4">
                                    <iframe
                                        src="https://maps.google.com/maps?hl=en&q=mangal%20bazar&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                                        title="Google Map"
                                        className="w-100 rounded"
                                        style={{ border: 0, minHeight: "350px" }}
                                        loading="lazy"
                                    ></iframe>
                                </div>

                                {/* FORM */}
                                <div className="col-lg-6 mb-4">
                                    <form ref={form} onSubmit={sendEmail} noValidate>

                                        {success && <Alert variant="success">{success}</Alert>}
                                        {error && <Alert variant="danger">{error}</Alert>}

                                        <div className="row">
                                            <div className="col-sm-6 mb-2">
                                                <input
                                                    type="text"
                                                    name="first_name"
                                                    className="form-control"
                                                    placeholder="First Name"
                                                />
                                            </div>
                                            <div className="col-sm-6 mb-2">
                                                <input
                                                    type="text"
                                                    name="last_name"
                                                    className="form-control"
                                                    placeholder="Last Name"
                                                />
                                            </div>
                                        </div>

                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control mb-2"
                                            placeholder="Email Address"
                                        />

                                        <input
                                            type="text"
                                            name="phone"
                                            className="form-control mb-2"
                                            placeholder="Phone (optional)"
                                        />

                                        <textarea
                                            name="message"
                                            className="form-control mb-3"
                                            rows="4"
                                            placeholder="Enter your message"
                                        ></textarea>

                                        <button
                                            type="submit"
                                            className="nir-btn w-100"
                                            disabled={loading}
                                        >
                                            {loading ? (
                                                <>
                                                    <Spinner size="sm" animation="border" /> Sending...
                                                </>
                                            ) : (
                                                "Send Message"
                                            )}
                                        </button>

                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </>
    );
}

export default Contact;
