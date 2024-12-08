import React from "react";
import "./Youtube.css";
import youtube from "../../assets/youtube.png"; // For the YouTube logo (optional)
import channelLogo from "../../assets/yttalogo.png"; // Replace with your channel logo path

const Youtube = () => {
  return (
    <div className="youtube-section">
      <h2 className="youtube-heading">CHECK OUT OUR YOUTUBE CHANNEL</h2>
      <div className="youtube-content">
        <div className="channel-info">
          <img
            src={channelLogo}
            alt="Channel Logo"
            className="channel-logo"
          />
          <h3 className="channel-name">YTTA Learning</h3>
          <a
            href="https://www.youtube.com/@yttalearning" // Replace with your channel link
            target="_blank"
            rel="noopener noreferrer"
            className="subscribe-button"
          >
            <img className="youtube-icon" src={youtube}/>
            Subscribe
          </a>
        </div>
        <div className="video-preview">
          <iframe
            className="video"
            src="https://www.youtube.com/embed/JwMyZ8bROAk?si=0L-6FGR6kZsMOQD2" // Replace with an actual YouTube video ID
            title="YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            className="video"
            src="https://www.youtube.com/embed/BEisCgLAw1M?si=nKjmKo7gP5SxlhqT" // Replace with another video ID
            title="YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
