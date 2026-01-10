
import './App.css';
import Header from './asstes/Components/Header';
import Home from './asstes/Pages/Home';
import About from './asstes/Pages/About';
import { Route, Routes } from 'react-router-dom';
import Footer from './asstes/Components/Footer';
import Destination from './asstes/Pages/Destination';
import Destinationdetail from './asstes/Pages/Destinationdetail';
import Tours from './asstes/Pages/Tours';
import Blog from './asstes/Pages/Blog';
import Blogdetail from './asstes/Pages/Blogdetail';
import Tourdetails from './asstes/Pages/Tourdetails';
import Contact from './asstes/Pages/Contact';
import Booking from './asstes/Pages/Booking';
import Login from './asstes/Pages/Login';
import Pagenotfound from './asstes/Pages/Pagenotfound';
import Formlogin from './asstes/Pages/Formlogin';
import Formregister from './asstes/Pages/Formregister';
import LoginModal from './asstes/Pages/LoginModal';
// import RegisterModal from './asstes/Pages/RegisterModal';



function App() {

  return (
    <>

      <Header />
      <LoginModal/>
      <Login/>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/destination' element={<Destination/>}></Route>
        <Route path='/destinationdetail' element={<Destinationdetail/>}></Route>
        <Route path='/tours' element={<Tours/>}></Route>
        <Route path='/tourdetails' element={<Tourdetails/>}></Route>
        <Route path='/blogs' element={<Blog/>}></Route>
        <Route path='/blogdetail' element={<Blogdetail/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/booking' element={<Booking/>}></Route>
        <Route path='/pagenotfound' element={<Pagenotfound/>}></Route>
        <Route path='/login' element={<Formlogin/>}></Route>
        <Route path='/register' element={<Formregister/>}></Route>
      </Routes>
      
      <Footer />

      
      {/* <Footer/> */}
    </>
  );
}

export default App;
