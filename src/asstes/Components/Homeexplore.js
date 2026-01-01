import React from 'react'
import { useRef,useEffect } from 'react'
import '../../App.css'
import { Container } from 'react-bootstrap'
import travel2 from '../image/travel2.png'
import { CiLocationOn } from "react-icons/ci";
import { SlBriefcase } from "react-icons/sl";
import { CiFolderOn } from "react-icons/ci";

function Homeexplore() {

  const statsRef = useRef(null);
  const originalValues = useRef([]);

  useEffect(() => {
    const counters = statsRef.current.querySelectorAll(".stat-number");

    // store original numbers once
    originalValues.current = Array.from(counters).map(
      (counter) => parseInt(counter.innerText, 10)
    );

    // reset numbers
    counters.forEach((counter) => (counter.innerText = "0"));

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCount();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  const startCount = () => {
    const counters = statsRef.current.querySelectorAll(".stat-number");

    counters.forEach((counter, index) => {
      let count = 0;
      const target = originalValues.current[index];
      const speed = 200;

      const updateCount = () => {
        const increment = Math.ceil(target / speed);

        if (count < target) {
          count += increment;
          counter.innerText = count > target ? target : count;
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  };
  return (
    <>
     
        {/* get to know explore-world*/}
        <section className=' page-section explore-world pt-0'>
        <Container>
          <div className='explorepage'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className="header-image-section"> {/* Placeholder for the image and icons */}
                  <div className="image-placeholder">
                    <img src={travel2} alt='travel' id='logo' />
                  </div>
                </div>
              </div>
              <div className='col-lg-6 app-container'>
                <div className='header-content'>
                  <h3 className='subtitle1'>Get To Know Us</h3>
                  <h1 className='main-title'>Explore All Tour of the world with us.</h1>
                  <p className='description'>Travel the globe with unforgettable experiences! From the sun-kissed beaches of Bali to the historic streets of Rome, we offer curated tours for every kind of traveler. Discover hidden gems, enjoy local cuisines, and make memories that last a lifetime.
                    Our tours are designed to provide comfort, adventure, and cultural immersion. Whether you're seeking a relaxing getaway or an adrenaline-packed adventure, we have the perfect itinerary for you.</p>
                  <p className='description'>Join us to explore breathtaking landscapes, vibrant cities, and rich cultures around the world. Let your journey begin here and create stories you'll cherish forever.</p>
                </div>
                {/* <hr></hr> */}
                {/* <div className='row'>
                  <div className='col-4'>
                    <h6><CiLocationOn size={20} /> Tour Guide</h6>

                  </div>
                  <div className='col-4'>
                    <h6><SlBriefcase size={20} />  Friendly Price</h6>
                  </div>
                  <div className='col-4'>
                    <h6><CiFolderOn size={20} />  Reliable Tour Package</h6>
                  </div>
                </div> */}


              </div>

              <div className='col-lg-12'>
                <div className='counter-main w-75 float-end z-index3 position-relative'>
                  <div className='counter p-4 pb-0 box-shadow bg-white rounded mt-minus'>
                    <div className="" ref={statsRef}>
                      <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                          <div className='counter-item border-end pe-4'>
                            <div className="counter-content">
                              <h2 className="stat-number" >9</h2>
                              <p className="stat-label">Years Experiences</p>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                          <div className='counter-item border-end pe-4'>
                            <div className="counter-content">
                              <h2 className="stat-number" >890</h2>
                              <p className="stat-label">Tour Packages</p>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                          <div className='counter-item border-end pe-4'>
                            <div className="counter-content">
                              <h2 className="stat-number" >850</h2>
                              <p className="stat-label">Happy Customers</p>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                          <div className='counter-item border-end pe-4'>
                            <div className="counter-content">
                              <h2 className="stat-number" >320</h2>
                              <p className="stat-label">Award Winning</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
          </Container>
        </section>
      





    </>
  )
}

export default Homeexplore
