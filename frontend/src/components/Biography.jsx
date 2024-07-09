import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Introducing Yash Rathor, Yuvraj Singh, and Ronak Saraswat, three diligent students embarking on a journey to revolutionize healthcare. With a collective vision, we delve into the realm of hospital management systems, focusing on optimizing the appointment process for doctors. Yash, with his analytical prowess, Yuvraj, with his innovative solutions, and Ronak, with his meticulous attention to detail, form a formidable team. Together, we aim to streamline the healthcare experience, ensuring efficiency and accessibility for both patients and medical professionals. Join us as we harness technology to reshape the future of healthcare administration.
          </p>
          <p>We are all in 2024!</p>
          <p>We are working on a MERN STACK PROJECT.</p>
          <p>
          Through meticulous planning and unwavering dedication, Good Life Care Health has evolved into more than just a project; it's a testament to the power of collaboration and innovation in transforming the healthcare industry. With a focus on user-centric design and continuous improvement, the team at Good Life Care Health is committed to empowering individuals to take control of their health journey, ensuring that every interaction is characterized by empathy, efficiency, and excellence.

As we continue to refine and expand our platform, we invite you to join us on this transformative journey towards a future where healthcare is accessible, equitable, and tailored to meet the needs of every individual. Together, let's redefine what it means to live a good life, with health and wellness at its core."







          </p>
          <p>YASH RATHOR | YUVRAJ SINGH | RONAK SARASWAT</p>
          <p>Coding is fun!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
