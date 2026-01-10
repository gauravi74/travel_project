import React, { useRef, useState } from "react";
import { FaPlay, FaTimes } from "react-icons/fa";
import sampleVideo from "../video/sampleVideo.mp4";
import "../../App.css";

function Exploretravel() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handlePlay = () => {
    setIsOpen(true); // open modal
    setTimeout(() => {
      videoRef.current.play();
      setIsPlaying(true);
    }, 100); // slight delay to ensure video loads
  };

  const handleClose = () => {
    videoRef.current.pause();
    setIsPlaying(false);
    setIsOpen(false);
  };

  return (
    <section className="explore-section page-section">
      <div className='section-shape section-shape1  bottom-0'></div>
      <div className="hero-content">
        <div className="steps-container">
          <p className="subtitle">Love Where You're Going</p>
          <h2 className="title">
            Explore Your Life, <span> Travel Where You Want! </span>
          </h2>
          <p className="text">
            Discover new destinations, enjoy unforgettable experiences, and make every journey memorable.
          </p>

          {/* Play Button */}
          <div className="call-button text-center">
            <button
              type="button"
              className="play-btn"
              onClick={handlePlay}
            >
              <FaPlay color="white" size={25} />
              {/* Play Video */}
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isOpen && (
        <div className="video-modal">
          
          <div className="video-wrapper">
          
            <video ref={videoRef} src={sampleVideo} controls width="100%" />
            <button className="close-btn" onClick={handleClose}>
              <FaTimes size={25} color="#fff" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Exploretravel;
