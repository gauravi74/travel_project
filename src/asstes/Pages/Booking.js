import React, { useState , useEffect  } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { MdOutlineStarPurple500 } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import Exploretravel from '../Components/Exploretravel'
import Partners from '../Components/Partners'
import { FaCreditCard } from "react-icons/fa";

function Booking() {
    const [formData, setFormData] = useState({
        title: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        gender: '',
        dob: '',
        country: '',
        city: '',
        address1: '',
        address2: '',
        cardHolder: '',
        cardNumber: '',
        expiry: '',
        cvv: ''
    })

    useEffect(() => {
        const savedData = localStorage.getItem('bookingData')
        if (savedData) {
            setFormData(JSON.parse(savedData))
        }
    }, [])

    
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    
        // ✅ Save data
        localStorage.setItem('bookingData', JSON.stringify(formData))
    
        alert('Booking confirmed & data saved!')
    
        // ✅ Clear form
        setFormData({
            title: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            gender: '',
            dob: '',
            country: '',
            city: '',
            address1: '',
            address2: '',
            cardHolder: '',
            cardNumber: '',
            expiry: '',
            cvv: ''
        })
    }
    
    




    return (
        <>
            <section className='breadcrumb-main' >
                <div className='section-shape section-shape1  bottom-0'></div>
                <div className='breadcrumb-outer'>
                    <div className='about-section'>
                        <div className='breadcrumb-content text-center'>
                            <h1 className='page-title'>BOOKING </h1>
                            <nav className='d-block '>
                                <ul className='breadcrumb'>
                                    <li className='breadcrumb-item'><Link to="/">Home</Link></li>
                                    <li className='breadcrumb-item '>Booking</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <Container>
                <section className='trending pt-6 pb-0 bg-lgrey page-section'>
                    <div className='row'>
                        <div className='col-lg-8 mb-4'>
                            <div className='payment-book'>
                                <div className='booking-box'>
                                    <div className="customer-information mb-4">
                                        <h3 className='border-b pb-2 mb-2'>Traveller Information</h3>
                                        <form className='mb-2'>
                                            <h5>Let us know who you are</h5>
                                            <div className='row'>
                                                <div className='col-md-2'>
                                                    <div className='form-group mb-2 mt-4'>
                                                        <label>Title</label>
                                                        <div className='input-box'>
                                                            <select className='niceselect' name="title" value={formData.title} onChange={handleChange}>
                                                                <option value="">Select</option>
                                                                <option value="Mr">Mr.</option>
                                                                <option value="Mrs">Mrs.</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-md-5'>
                                                    <div className='form-group mb-2 mt-4'>
                                                        <label>First Name</label>
                                                        <input type='text' placeholder='First Name' name="firstName" value={formData.firstName} onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className='col-md-5'>
                                                    <div className='form-group mb-2 mt-4'>
                                                        <label>Last Name</label>
                                                        <input type='text' placeholder='Last Name' name="lastName" value={formData.lastName} onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className='form-group mb-2'>
                                                        <label>Email</label>
                                                        <input type='email' placeholder='Email Address' name="email" value={formData.email} onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className='col-md-5'>
                                                    <div className='form-group mb-2'>
                                                        <label>Phone</label>
                                                        <input type='text' placeholder='Phone No.' name="phone" value={formData.phone} onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className='col-md-6 col-sm-6'>
                                                    <div className='form-group mb-2'>
                                                        <label>Gender</label>
                                                        <div className='input-box'>
                                                            <select className='niceselect' name="gender" value={formData.gender} onChange={handleChange} >
                                                                <option value=''>Select Gender</option>
                                                                <option value='Male'>Male</option>
                                                                <option value='Female'>Female</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-md-6 col-sm-6'>
                                                    <div className='form-group mb-2'>
                                                        <label>DOB</label>
                                                        <div className='input-box'>
                                                            <input type='date' id='date-time' name="dob" value={formData.dob} onChange={handleChange} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-md-6 col-sm-6'>
                                                    <div className='form-group mb-2'>
                                                        <label>Select Country</label>
                                                        <div className='input-box'>
                                                            <select className='niceselect' name="country" value={formData.country} onChange={handleChange} >
                                                                <option value="">Select Country</option>
                                                                <option value="Albania">Albania</option>
                                                                <option value="Malaysia">Malaysia</option>
                                                                <option value="Singapore">Singapore</option>
                                                                <option value="Japan">Japan</option>
                                                                <option value="Thailand">Thailand</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-md-6 col-sm-6'>
                                                    <div className='form-group mb-2'>
                                                        <label>Select City</label>
                                                        <div className='input-box'>
                                                            <select className='niceselect' name="city" value={formData.city} onChange={handleChange} >
                                                                <option value="">Select City</option>
                                                                <option value="Istanbul">Istanbul</option>
                                                                <option value="London">London</option>
                                                                <option value="Texas">Texas</option>
                                                                <option value="Tokyo">Tokyo</option>
                                                                <option value="Bangkok">Bangkok</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className='form-group mb-2 mt-4'>
                                                        <label>Address Line 1</label>
                                                        <input type='text' placeholder='Address Line 1' name="address1" value={formData.address1} onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className='form-group mb-2 mt-4'>
                                                        <label>Address Line 2</label>
                                                        <input type='text' placeholder='Address Line 2' name="address2" value={formData.address2} onChange={handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className='customer-information mb-4 d-flex align-items-center bg-grey rounded p-4'>
                                        <div className='customer-info ps-4'>
                                            <h6 className='mb-1'>Good To Know:</h6>
                                            <small>Free Cancellation until 14:00 pn 11 Feb 2022</small>
                                        </div>
                                    </div>
                                    <div className='customer-information card-information'>
                                        <h3 className='border-b pb-2 mb-2'>How do you want to pay?</h3>
                                        <div className='trending-topic-main'>
                                            <ul className='nav nav-tabs nav-pills nav-fill w-50'>
                                                <li className='nav-item me-2 ms-0' role='presentation'>
                                                    <button className='nav-link active' >Credit/Debit card</button>
                                                </li>
                                                {/* <li className='nav-item me-2 ms-0' role='presentation'>
                                                    <button className='nav-link active' >Credit/Debit card</button>
                                                </li> */}
                                            </ul>
                                            <div className='tab-content' >
                                                <div className='tab-pane fade active show' >
                                                    <form>
                                                        <h5 className='mb-4 border-b pb-2'><FaCreditCard /> Credit Card</h5>
                                                        <div className='row align-items-center'>
                                                            <div className='col-md-8'>
                                                                <div className='card-detail0'>
                                                                    <div className='row'>
                                                                        <div className='col-md-6'>
                                                                            <div className='form-group mb-2'>
                                                                                <label>Card Holder Number</label>
                                                                                <input type='text' placeholder='' name="cardHolder" value={formData.cardHolder} onChange={handleChange} />
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-md-6'>
                                                                            <div className='form-group mb-2'>
                                                                                <label>Card Number</label>
                                                                                <input type='text' placeholder='**** **** **** ****' name="cardNumber" value={formData.cardNumber} onChange={handleChange} />
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-md-6'>
                                                                            <div className='form-group mb-2'>
                                                                                <label>Expiry Date</label>
                                                                                <input type='text' placeholder='Expiry Date' name="expiry" value={formData.expiry} onChange={handleChange} />
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-md-6'>
                                                                            <div className='form-group mb-2'>
                                                                                <label>CVC/CVV</label>
                                                                                <input type='text' placeholder='CVC/CVV' name="cvv" value={formData.cvv} onChange={handleChange} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-4'>
                                                                <img src={require('../image/cc.png')} alt='credit card' />
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='booking-terms border-t pt-3 mt-3'>
                                            <form className='d-lg-flex align-items-center'>
                                                <div className='form-group mb-2 w-75'>
                                                    <input type='checkbox' /> By continuing, you agree to the <a>Terms and Conditions.</a>
                                                </div>
                                                <a className='nir-btn float-lg-end w-25' onClick={handleSubmit}>CONFIRM BOOKING</a>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4  mb-4'>
                            <div className='sidebar-sticky'>
                                <div className='sidebar-item bg-white rounded box-shadow overflow-hidden p-3 mb-4'>
                                    <h4>Your Booking Details</h4>
                                    <div className='trend-full border-b pb-2 mb-2'>
                                        <div className='row'>
                                            <div className='col-lg-4 col-md-4'>
                                                <div className='trend-item2 rounded'>
                                                    <img src={require('../image/destination17.jpg')} alt='destination' />
                                                </div>
                                            </div>
                                            <div className='col-lg-8 com-md-8'>
                                                <div className='trend-content position-relative'>
                                                    <div className='rating mb-1'>
                                                        <MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' /><MdOutlineStarPurple500 color='yellow' /><spam>200 Reviews</spam>
                                                    </div>
                                                    <h5 className='mb-2'>
                                                        <a>Adriatic Adventure–Zagreb To Athens</a>
                                                    </h5>
                                                    <h6 className='theme mb-0'><CiLocationOn /> Croatia</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='trend-check border-b pb-2'>
                                        <div className='row'>
                                            <div className='col-lg-6'>
                                                <div className='trend-check-item bg-grey rounded p-3 mb-2'>
                                                    <p className='mb-0'>Check In</p>
                                                    <h6 className='mb-0'>Thu 21 Feb 2022</h6>
                                                    <small>15:00 - 22:00</small>
                                                </div>
                                            </div>
                                            <div className='col-lg-6'>
                                                <div className='trend-check-item bg-grey rounded p-3 mb-2'>
                                                    <p className='mb-0'>Check Out</p>
                                                    <h6 className='mb-0'>Tue 24 Feb 2022</h6>
                                                    <small>1:00 - 10:00</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='trend-check border-b pb-2 mb-2'>
                                        <p className='mb-0'>Total Length of Stay:</p>
                                        <h6 className='mb-0'>8 Days | 7 Nights </h6>
                                        <small><a className='theme text-decoration-underline'>travelling on different dates?</a></small>
                                    </div>
                                    <div className='trend-check '>
                                        <p className='mb-0'>You Selected:</p>
                                        <h6 className='mb-0'>Superior Double Rooms <span className='float-end fw-normal'>1 room, 3 adults</span></h6>
                                        <small><a className='theme text-decoration-underline'>Change your selection</a></small>
                                    </div>
                                </div>
                                <div className='sidebar-item bg-white rounded box-shadow overflow-hidden p-3 mb-4'>
                                    <h4>Your Price Summary</h4>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Superior Twin</td>
                                                <td className='theme2'>$500.00</td>
                                            </tr>
                                            <tr>
                                                <td>Number of Travellers</td>
                                                <td className='theme2'>3</td>
                                            </tr>
                                            <tr>
                                                <td>Tax & fee</td>
                                                <td className='theme2'>$50.00</td>
                                            </tr>
                                            <tr>
                                                <td>Booking Fee</td>
                                                <td className='theme2'>Free</td>
                                            </tr>
                                            <tr>
                                                <td>Total</td>
                                                <td className='theme2'>$550.00</td>
                                            </tr>
                                        </tbody>
                                        <tfoot className='bg-title'>
                                            <tr>
                                                <th className='bg-content'>Amount</th>
                                                <th className='bg-content'>$550.00</th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div className='sidebar-item bg-white rounded box-shadow overflow-hidden p-3 mb-4'>
                                    <h4>Your Payment Schedule</h4>
                                    <p className='mb-0'>Before you stay you'll pay <span className='float-end'>$40.00 </span></p>
                                </div>
                                <div className='sidebar-item bg-white rounded box-shadow overflow-hidden p-3'>
                                    <h4>Do you have a promo code?</h4>
                                    <input type='text' name />
                                    <a className='nir-btn-black mt-2'>Apply </a>
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

export default Booking
