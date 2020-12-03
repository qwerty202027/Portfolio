import React from "react";
import "./Home.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <div className="priya-text">
        <h1>Hi, I am Priyadharshini</h1>
        <p>Front End Developer</p>
      </div>
      <div class="wrapper">
        <ul>
          <li className="github">
            <a
              href="https://github.com/Priyadharshini-hue"
              target="blank"
              rel="noreferrer"
            >
              <FaGithub className="fa" />
            </a>
          </li>
          <li className="linkedin">
            <a
              href="https://www.linkedin.com/in/priyadharshini-r-247a04200/"
              target="blank"
              rel="noreferrer"
            >
              <FaLinkedin className="fa" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
