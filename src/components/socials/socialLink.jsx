// SocialLinks.jsx
import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import "./SocialLink.css"; // We will add styles next

const SocialLink = () => {
  return (
    <div className="social-container">
      {/* LinkedIn Link */}
      <a
        href="https://www.linkedin.com/in/joel-ojo-017a07268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my LinkedIn profile"
      >
        <FaLinkedin className="social-icon linkedin" />
      </a>

      {/* GitHub Link */}
      <a
        href="https://github.com/JoeSigma4?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my GitHub profile"
      >
        <FaGithub className="social-icon github" />
      </a>

      {/* Twitter Link */}
      <a
        href="https://x.com/JoeSigma28"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my Twitter profile"
      >
        <FaTwitter className="social-icon twitter" />
      </a>

      {/* Instagram Link */}
      <a
        href="https://www.instagram.com/joesigma28?igsh=MXY3b2txYnFoOWpuYQ=="
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my Instagram profile"
      >
        <FaInstagram className="social-icon instagram" />
      </a>
    </div>
  );
};

export default SocialLink;
