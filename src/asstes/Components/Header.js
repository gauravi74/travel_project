import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../image/logo.png'

function Header() {
    return (
        <>
            <div className='topbar'>
                <div className='container'>
                    <div className='topbar-left'>
                        <span>Thursday, Mar 26, 2021</span>
                        <span>Hollywood, America</span>
                        <span>Mon-Fri: 10 AM - 5 AM </span>
                    </div>

                </div>
            </div>
            <Navbar expand="lg" className="bg-body-tertiary">

                <Container className='main-header'>
                    <img src={logo} alt='logo' />
                    {/* <Navbar.Brand href="#home">TRAVELIN</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto" id='navlink'>
                            <Link to="/" className='nav-link'>HOME</Link>
                            <Link to="/about" className='nav-link'>ABOUT</Link>
                            <Link to="" className='nav-link'>DESTINATIONS</Link>
                            <Link to="" className='nav-link'>TOUR</Link>
                            <Link to="" className='nav-link'>BLOGS</Link>
                        </Nav>

                        <Link to="" className='nav-link' id='login-link'>LOGIN/REGISTER</Link>
                        <a href='Home.js' className='btn' id='book-btn'>BOOK NOW</a>
                    </Navbar.Collapse>
                    <nav>

                    </nav>
                </Container>
            </Navbar>



        </>
    );
}

export default Header