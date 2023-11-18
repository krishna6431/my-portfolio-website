import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import dp from "../../images/pp.png";

const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src={dp} alt="profile_pic" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                I am Krishna Kant Verma, a dedicated and multifaceted computer
                science enthusiast currently pursuing an M.Tech degree in
                Computer Science & Engineering at the prestigious Indian
                Institute of Technology, Patna. Throughout my academic journey,
                I have consistently maintained high grades, showcasing my
                unwavering commitment to excellence. My proficiency extends
                across a wide spectrum of subjects, including Artificial
                Intelligence, Machine Learning, Blockchain, and Web Development,
                which I have meticulously studied as part of my curriculum. I
                take pride in being a skilled problem solver and a coding
                virtuoso. I have excelled in competitive programming and Data
                Structure and Algorithms, achieving remarkable ratings on
                platforms like CodeChef and LeetCode. My practical skills are
                showcased through an impressive array of projects, including a
                dynamic knowledge graph alignment system, a portfolio website,
                and an innovative blockchain interoperability solution. My
                coding prowess is further reflected in my creation of algorithms
                visualizers and AI-based spam detection systems. With my
                unwavering commitment to continuous learning and a thriving
                online presence, I am poised to make significant contributions
                to the ever-evolving field of computer science and engineering.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
