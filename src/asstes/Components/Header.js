import '../../App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import logo from '../image/logo.png'
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";



function Header() {

    return (
        <>
            <div className='topbar'>
                <div className='container'>
                    <div className='topbar-left'>
                        <span><FaCalendarAlt size={15} /> Thursday, Mar 26, 2021</span>
                        <span><FaLocationDot size={15} /> Hollywood, America</span>
                        <span><MdAccessTime size={15} /> Mon-Fri: 10 AM - 5 AM </span>
                    </div>

                </div>
            </div>
            <Navbar expand="lg" className="bg-body-tertiary main_header_area sticky-top">

                <Container className='main-header'>
                    <Link to='/'><img src={logo} alt='logo' /></Link>

                    {/* <Navbar.Brand href="#home">TRAVELIN</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {/* <Nav className="ms-auto" id='navlink'>
                            <Link to="/" className='nav-link'>HOME</Link>
                            <Link to="/about" className='nav-link'>ABOUT</Link>
                            <Link to="/destination" className='nav-link'>DESTINATIONS</Link>
                            <Link to="/tours" className='nav-link'>TOUR</Link>
                            <Link to="/blogs" className='nav-link'>BLOGS</Link>
                            <Link to="/contact" className='nav-link'>CONTACT</Link>
                        </Nav> */}
                        <Nav className="ms-auto" id='navlink'>
                            <NavLink to="/" className="nav-link">HOME</NavLink>
                            <NavLink to="/about" className="nav-link">ABOUT</NavLink>
                            <NavLink to="/destination" className="nav-link">DESTINATIONS</NavLink>
                            <NavLink to="/tours" className="nav-link">TOUR</NavLink>
                            <NavLink to="/blogs" className="nav-link">BLOGS</NavLink>
                            <NavLink to="/contact" className="nav-link">CONTACT</NavLink>
                        </Nav>
{/* 
                        <Link
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#loginModal"
                        >
                            Login
                        </Link>

                        <Link
                            className="btn btn-secondary"
                            data-bs-toggle="modal"
                            data-bs-target="#registerModal"
                        >
                            Register
                        </Link> */}


                        <Link
                            href="#"
                            className="nav-link"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                        >
                            LOGIN/REGISTER
                        </Link>
                        {/* <Link to='/login' className='nav-link'>Login</Link> */}
                        {/* <Link to='/register' className='nav-link'>Register</Link> */}
                        <Link to='/booking' className='btn nir-btn' id='book-btn'>BOOK NOW</Link>
                    </Navbar.Collapse>
                    <nav>

                    </nav>
                </Container>
            </Navbar>



        </>
    );
}

export default Header