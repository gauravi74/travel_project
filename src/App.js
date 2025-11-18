
import './App.css';
import Header from './asstes/Components/Header';
import Home from './asstes/Pages/Home';
// import Footer from './asstes/Components/Footer';
import About from './asstes/Pages/About';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
      
      
      
      {/* <Footer/> */}
    </>
  );
}

export default App;
