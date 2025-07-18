// import React, { useEffect, useRef } from 'react';

function Hero() {
  

  return (
    <div className="hero" id='header'>
      <div className="hero-content">
        {/* <p>Welcome to My Website</p> */}
        <h1>Discover <span style={{ color: 'rgb(255, 217, 0)' }}>amazing</span><br /> content and connect with me.</h1>
        <button className="cta-button">Get Started</button>
      </div>
    </div>
  );
}

export default Hero;