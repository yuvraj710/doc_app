import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          "Good Life Care Health: Your Premier Wellness Destination

At Good Life Care Health, we redefine healthcare excellence. Our state-of-the-art facility is dedicated to delivering comprehensive services with unwavering compassion and expertise. Our team of dedicated professionals is committed to providing personalized care tailored to your unique needs. With Good Life Care Health, your well-being is our utmost priority as we guide you through a seamless journey towards optimal health and wellness."







          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
