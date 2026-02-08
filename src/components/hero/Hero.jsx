import { useState } from "react";
import "./Hero.css";
import creator from "../../assets/creator.jpg";
import SocialLink from "../socials/socialLink";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>Hi, I'm Joel</h1>
        <h2>A Frontend Developer</h2>
        <p>
          I build responsive, modern web applications that connect front-end
          design with back-end functionality. Passionate about creating seamless
          user experiences, writing clean code, and solving real-world problems
          with technology.
        </p>
        <div className="btn-two">
          <a href="https://github.com/repos?q=owner:@me">
            {" "}
            <button className="btn left"> View My Work</button>
          </a>
          <a href="https://github.com/repos?q=owner:@me">
            {" "}
            <a href="https://wa.me/2348026923477">
              {" "}
              <button className="btn right"> Contact Me</button>
            </a>
          </a>
        </div>
      </div>
      <div className="creator">
        <img src={creator} />
      </div>
      <div className="section-divider"></div>
    </div>
  );
};

export default Hero;
