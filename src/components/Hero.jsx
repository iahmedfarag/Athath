import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-wrapper">
        <div className="hero-card animate__animated">
          <span>70% SALE OFF</span>
          <h1>
            FURNITURE <span></span> AT COST
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit.
            Libero commodi nam nisi ipsum!
          </p>
          <button className="discover-btn">DISCOVER MORE</button>
        </div>
        <div className="white-overlay"></div>
      </div>
    </section>
  );
};

export default Hero;

// const Wrapper = styled.section``;
