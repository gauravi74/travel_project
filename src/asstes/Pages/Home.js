import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CiFlag1 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { SlDirections } from "react-icons/sl";
import { SlCompass } from "react-icons/sl";
import { MdOutlineStarPurple500 } from "react-icons/md";



import Exploretravel from '../Components/Exploretravel';
import Hero from '../Components/Hero';
import Exploredestination from '../Components/Exploredestination';
import Homeexplore from '../Components/Homeexplore';
import Packages from '../Components/Packages';
import Deals from '../Components/Deals';
import Offers from '../Components/Offers';
import Guides from '../Components/Guides';
import Testimonails from '../Components/Testimonails';
import Blog from '../Components/Blog';



function Home() {

  return (
    <>
        <Hero/>
        {/* Travel Perfection */}
        <section className='page-section'>
          <div className="steps-container">

            {/* Subtitle */}
            <p className="subtitle">3 Step Of The Perfect Tour</p>

            {/* Title */}
            <h2 className="title">
              Find <span>Travel Perfection</span>
            </h2>

            {/* Description */}
            <p className="text">
            Choose your destination, plan your itinerary, and enjoy unforgettable adventures.
            </p>

            {/* Steps Grid */}

            <div className="steps-grid">
              <div className='row'>
                <div className='col-lg-3 col-sm-6 col-md-6 mb-4'>
                  {/* Card 1 */}
                  <div className="step-card">
                    <CiFlag1 size={70} className='mb-3' />
                    <h3>Tell Us What You Want To Do</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                  </div>
                </div>
                <div className='col-lg-3 col-sm-6 col-md-6 mb-4'>
                  {/* Card 2 */}
                  <div className="step-card">
                    <CiLocationOn size={70} className='mb-3' />
                    <h3>Share Your Travel Locations</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                  </div>
                </div>
                <div className='col-lg-3 col-sm-6 col-md-6 mb-4'>
                  {/* Card 3 */}
                  <div className="step-card">
                    <SlDirections size={70} className='mb-3' />
                    <h3>Share Your Travel Preference</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                  </div>
                </div>
                <div className='col-lg-3 col-sm-6 col-md-6 mb-4'>
                  {/* Card 4 */}
                  <div className="step-card">
                    <SlCompass size={70} className='mb-3' />
                    <h3>We Are 100% Trusted Tour Agency</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <Exploredestination/>
        <Homeexplore/>
       <Packages/>
        <Deals/>
        {/* Love Where Your're Going */}
        {/* <section>
          <div className='steps-container'>
            subtitle
            <p className="subtitle">Love Where Your're Going</p>

            Title
            <h2 className="title">
              Explore Your Life, <span> Travel Where <br></br> You Want! </span>
            </h2>

            Description
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br></br> dolore magna aliqua.
            </p>

          </div>
        </section> */}
        <Exploretravel/>
        <Offers/>
        <Guides/>
        <Testimonails/>
        <Blog/>
    </>


  )
}

export default Home
