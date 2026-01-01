import React from 'react'
import Tourguides from '../Components/Tourguides'
import Container from 'react-bootstrap/esm/Container'
import Testimonails from '../Components/Testimonails'
import Aboutexplore from '../Components/Aboutexplore'
import Aboutfeatures from '../Components/Aboutfeatures'
import { Link } from 'react-router-dom'


function About() {
  var explore = [
    {smalltitle:'Get To Know Us',
      maintitle:'Explore All Tour of the world with us.',
      desc1:'We are passionate about helping you discover the world’s most incredible destinations. Our dedicated team works tirelessly to curate unique travel experiences tailored to your preferences. Join us on a journey filled with unforgettable memories and adventures.',
      desc2:'At our core, we believe travel is more than just visiting places it’s about creating lasting connections and meaningful moments. Whether you seek relaxation, adventure, or cultural immersion, we have the perfect tour for you.'}
  ]


  var features = [
    {
      subtitle:'Core Features',
      title:'Find Travel Perfection',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      cardtitle1:'Tell Us What You want To Do',
      desc1:'Share your travel preferences and let us create the perfect itinerary for you.',
      cardtitle2:'Share Your Travel Locations',
      desc2:'Let us know the destinations you wish to explore so we can plan accordingly.',
      cardtitle3:'Share Your Travel Preference',
      desc3:'Share your interests and favorite activities to customize your perfect journey.',
      cardtitle4:'Here 100% Trusted Tour Agency',
      desc4:'We are a fully trusted tour agency committed to making your travels safe and unforgettable.'
    }
  ]
  return (
    
    <>
      {/* pb-20 pt-14 */}

      
      <section className='breadcrumb-main' >
        <div className='section-shape section-shape1 top-inherit bottom-0'></div>
        <div className='breadcrumb-outer'>
          <div className='about-section'>
            <div className='breadcrumb-content text-center'>
              <h1 className='page-title'>ABOUT US</h1>
              <nav className='d-block '>
                <ul className='breadcrumb'>
                  <li className='breadcrumb-item'><Link to="/">Home</Link></li>
                  <li className='breadcrumb-item '>About Us</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <Container>
{/* Explore All Tour */}
      {explore.map((item) => (
        <Aboutexplore 
          smalltitle={item.smalltitle} 
          maintitle={item.maintitle} 
          desc1={item.desc1} 
          desc2={item.desc2}
        />
      ))}
       
{/* Find Travel Perfection */}

        {features.map((item) => (
          <Aboutfeatures
            subtitle={item.subtitle}
            title={item.title}
            description={item.description}
            cardtitle1={item.cardtitle1}
            desc1={item.desc1}
            cardtitle2={item.cardtitle2}
            desc2={item.desc2}
            cardtitle3={item.cardtitle3}
            desc3={item.desc3}
            cardtitle4={item.cardtitle4}
            desc4={item.desc4}/>
        ))}
       

       
      </Container>
      <Tourguides />
        <Testimonails/>
    </>



  )
}

export default About
