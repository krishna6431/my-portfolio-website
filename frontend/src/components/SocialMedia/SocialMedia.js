import React from "react";
import "./SocialMedia.css";
import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
const SocialMedia = () => {
  return (
    <div>
      <div class="sticky-media-bar">
        <div class="social-container">
          <div class="icons twitter">
            <a
              href="https://twitter.com/krishna6431"
              aria-label="Twitter - Krishna"
            >
              <FaTwitter />
            </a>
          </div>
          <div class="icons github">
            <a
              class
              href="https://github.com/krishna6431"
              aria-label="Github - Krishna"
            >
              <FaGithub />
            </a>
          </div>
          <div class="icons linkedin">
            <a
              href="https://www.linkedin.com/in/krishna6431"
              aria-label="Linkedin - Krishna"
            >
              <FaLinkedin />
            </a>
          </div>
          <div class="icons facebook">
            <a
              href="https://www.facebook.com/krishnakant.verma.9022/"
              aria-label="Facebook - Krishna"
            >
              <FaFacebook />
            </a>
          </div>
          <div class="icons Instagram">
            <a
              href="https://www.intagram.com/krishna6431"
              aria-label="Linkedin - Krishna"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
