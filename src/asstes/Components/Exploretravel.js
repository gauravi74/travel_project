import React from 'react'
import { FaPlay } from "react-icons/fa";
import { useRef, useState } from 'react';
// import { Container } from 'react-bootstrap'
import '../../App.css'
// import introVideo from '../assets/video/intro.mp4';

function Exploretravel() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (!isPlaying) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };
  return (
    <>
      {/* <Container> */}
      <section className=' explore-section page-section'>
        <div className='section-shape section-shape1 top-inherit bottom-0'></div>
        <div className='hero-content'>
          <div className='steps-container  '>
            {/* subtitle */}
            <p className="subtitle">Love Where Your're Going</p>

            {/* Title */}
            <h2 className="title">
              Explore Your Life, <span> Travel Where <br></br>You Want! </span>
            </h2>

            {/* Description */}
            <p className="text">
              Discover new destinations, enjoy unforgettable experiences, and make every journey memorable.
            </p>
            <div className='call-button text-center'>
              {/* <video
                ref={videoRef}
                src={introVideo}
                width="600"
                controls={false}  // default controls hide
              /> */}
              <button type='button' className='play-btn js-video-button' data-channel='vimeo' onClick={handlePlay} style={{ marginTop: "10px" }}><FaPlay color='white' size={25} />
                {/* {isPlaying ? "Pause Video" : "Play Video"} */}
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* </Container> */}

    </>
  )
}

export default Exploretravel
