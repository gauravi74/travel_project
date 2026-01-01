import React from 'react'
import '../../App.css'
import Container from 'react-bootstrap/esm/Container';
import Slider from "react-slick";

function Partners() {

  var settings = {
    // dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
  };




  return (
    <>
      <Container>
        <section className='page-section '>
          <div className='steps-container  '>
            {/* subtitle */}
            <p className="subtitle">Our Partners</p>

            {/* Title */}
            <h2 className="title">
              Our Awesome <span> partners </span>
            </h2>

            {/* Description */}
            <p className="text">
              We collaborate with top travel agencies, airlines, and tour operators to bring you the best travel experiences worldwide.
            </p>


            {/* <div className="row">
                            <Slider {...settings}>

                                <div className="col-md-3 col-sm-6">
                                    <div className="partners-card">
                                        <img src={require("../image/cl-1.png")} alt="" />
                                    </div>
                                </div>

                                <div className="col-md-3 col-sm-6">
                                    <div className="partners-card">
                                        <img src={require("../image/cl-2.png")} alt="" />
                                    </div>
                                </div>

                                <div className="col-md-3 col-sm-6">
                                    <div className="partners-card">
                                        <img src={require("../image/cl-3.png")} alt="" />
                                    </div>
                                </div>

                                <div className="col-md-3 col-sm-6">
                                    <div className="partners-card">
                                        <img src={require("../image/cl-4.png")} alt="" />
                                    </div>
                                </div>

                                <div className="col-md-3 col-sm-6">
                                    <div className="partners-card">
                                        <img src={require("../image/cl-5.png")} alt="" />
                                    </div>
                                </div>

                                <div className="col-md-3 col-sm-6">
                                    <div className="partners-card">
                                        <img src={require("../image/cl-3.png")} alt="" />
                                    </div>
                                </div>

                            </Slider>
                        </div>  */}





          </div>
        </section>





        <section className="partnerships-section">
          {/* <h2 className="section-title">Why Our Partnerships Matter To You</h2>
          <div className="partnerships-grid">
            <div className="partnership-card">
              <h3 className="card-title">Exclusive Rates</h3>
              <p className="card-desc">Special pricing available only through our trusted partners.</p>
            </div>
            <div className="partnership-card">
              <h3 className="card-title">Priority Access</h3>
              <p className="card-desc">Early check-ins, upgrades, and fast-track services.</p>
            </div>
            <div className="partnership-card">
              <h3 className="card-title">Verified Quality</h3>
              <p className="card-desc">Every partner meets our strict service standards.</p>
            </div>
            <div className="partnership-card">
              <h3 className="card-title">Local Expertise</h3>
              <p className="card-desc">Authentic experiences guided by trusted local operators.</p>
            </div>
          </div> */}

          {/* <h2 className="section-title mt-5">How We Select Our Partners</h2> */}
          <div className="selection-grid">
            {[
              {
                number: "01",
                title: "Quality Review",
                desc: "Service standards, licenses, and reputation are verified."
              },
              {
                number: "02",
                title: "Trial Collaboration",
                desc: "Short-term collaboration to evaluate real performance."
              },
              {
                number: "03",
                title: "Customer Feedback",
                desc: "Traveler satisfaction and experience analysis."
              },
              {
                number: "04",
                title: "Long-Term Partnership",
                desc: "Only top-performing partners continue with us."
              }
            ].map(({ number, title, desc }) => (
              <div className="selection-card" key={number}>
                <div className="selection-number">{number}</div>
                <h3 className="selection-title">{title}</h3>
                <p className="selection-desc">{desc}</p>
              </div>
            ))}
          </div>
        </section>

      </Container>


    </>
  )
}

export default Partners
