import React from "react";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h4>Welcome To Our</h4>
        <h1 style={{ color: "#d10000" }}>Moive App</h1>
        <p>
          Step into the world of cinema like never before! Whether you're a fan
          of timeless classics, thrilling blockbusters, or hidden indie gems,
          our app is your gateway to endless entertainment. Discover new
          favorites, create your personalized watchlist, and stay updated with
          the latest releases. Let us take you on a cinematic journey where
          every movie tells a story, and every story leaves a mark. Your next
          adventure is just a click away!
        </p>
        <div className="hero-buttons">
          <button className="btn btn-outline-danger source-btn">
            Start Your Journey
          </button>
          <button className="btn btn-outline-danger read-more-btn">
            Your Watch List
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
