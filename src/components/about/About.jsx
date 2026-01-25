import { useState } from "react";

import "./About.css";
import aboutImg from "../../assets/about.jpg";
const About = () => {
  return (
    <div className="about">
      <div className="about-right">
        <h2>Passionate about creating exceptional digital experiences</h2>
        <p>
          I’m a Frontend Developer passionate about building clean, responsive,
          and user-friendly digital experiences. I enjoy turning ideas and
          designs into functional web interfaces using modern web technologies
        </p>
        <p>
          My work focuses on HTML, CSS, JavaScript, and React, where I pay close
          attention to performance, accessibility, and visual detail. Through
          personal projects and continuous practice, I’ve built responsive
          websites and interactive web applications while strengthening my
          understanding of core software engineering principles.
        </p>
        <p>
          I’m committed to constant learning and growth, staying up to date with
          modern frontend tools, best practices, and emerging technologies.
          Beyond coding, I enjoy improving my problem-solving skills, refining
          my workflow, and challenging myself to build better, more scalable
          solutions with each proje
        </p>
      </div>
      <div className="about-left">
        <img src={aboutImg} alt="" className="about-img" />
      </div>
    </div>
  );
};

export default About;
