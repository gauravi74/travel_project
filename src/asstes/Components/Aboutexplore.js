import React from 'react'
import { useEffect, useRef } from 'react'
import Container from 'react-bootstrap/esm/Container'
// import img from '../image/travel.png'
import { SlBriefcase } from "react-icons/sl";
import { CiFolderOn } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

function Aboutexplore({ smalltitle, maintitle, desc1, desc2 }) {
    // 


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
        // stats-container
        <>
            <Container>
                <section className='page-section'>
                    <div className="app-container mt-6">
                        <div className='header-section'>
                            <div className='row d-flex align-items-center justify-content-between'>
                                <div className='col-lg-6 col-sm-12 col-md-6 mb-4 ps-4'>
                                    <div className="about-header-content">
                                        <p className="about-subtitle1">{smalltitle}</p>
                                        <h1 className="main-title">{maintitle}</h1>
                                        <p className="description">{desc1}</p>
                                        <p className="description">{desc2}</p>
                                    </div>

                                    {/* <div className='row'>
                                        <div className='col-4'>
                                            <h6><CiLocationOn size={20} /> Tour Guide</h6>

                                        </div>
                                        <div className='col-4'>
                                            <h6><SlBriefcase size={20} /> Friendly Price</h6>
                                        </div>
                                        <div className='col-4'>
                                            <h6><CiFolderOn size={20} /> Reliable Tour Package</h6>
                                        </div>
                                    </div> */}

                                </div>


                                <div className='col-lg-6 col-sm-12 col-md-6'>
                                    <div className="header-image-section"> {/* Placeholder for the image and icons */}
                                        <div className="image-placeholder">
                                            <img src={require('../image/travel.png')} alt='logo' className='logo' />
                                        </div>
                                    </div>
                                </div>



                                <div className='col-lg-12'>
                                    <div className='counter-main w-75 float-start z-index3 position-relative'>
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
                                                        <div className='counter-item pe-4'>
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

                    </div>


                </section>

            </Container>

        </>
    )
}

export default Aboutexplore
