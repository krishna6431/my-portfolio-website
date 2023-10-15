import React from "react";
import Typewriter from "typewriter-effect";
import "./home.css";
import Fade from "react-reveal/Fade";
import resumeUrl from "../../assets/docs/resume.pdf";

const Home = () => {
  return (
    <>
      <div className="container-fluid home-container" id="home light">
        <div className="container home-content">
          <Fade right>
            <h2>Hi 👋 I'm a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "Prefinal Year Student at IIT Patna!",
                    "Problem Solver!",
                    "Code Architect!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <Fade bottom>
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=9519798972"
                target="_blank"
                rel="noreferrer"
              >
                Hire Me
              </a>
              <a
                className="btn btn-cv"
                href={resumeUrl}
                download="Krishna_Resume.pdf"
              >
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
