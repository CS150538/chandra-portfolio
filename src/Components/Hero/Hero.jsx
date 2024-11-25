import React from "react";
import "./Hero.css";
// import profile_img from "../../assets/profile_img.svg";
import profile_img from "../../assets/chandra_homePage.jpg";

import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Chandra Sekhar,</span> frontend developer based in India.
      </h1>
      <p>
        I am a frontend developer from Hyderabad, India with 3 years of
        experience in Tata Consultanct Services.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <Link
            className="anchor-link"
            to="contact"
            spy={true}
            smooth={true}
            offset={100}
            duration={500}
          >
            Connect with me
          </Link>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
