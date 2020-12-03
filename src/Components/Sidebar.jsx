import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./Sidebar.css";
import Main from "./Main.jsx";

const Sidebar = () => {
  return (
    <Router>
      <nav className="navbar">
        <ul className="main-nav" id="js-menu">
          <li>
            <Link to="/" className="nav-links">
              <span className="link-text">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/projects" className="nav-links">
              <span className="link-text">Projects</span>
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/Priyadharshini-hue"
              rel="noreferrer"
              target="_blank"
              className="nav-links"
            >
              <span className="link-text">Github</span>
            </a>
          </li>
          <li>
            <Link to="/skills" className="nav-links">
              <span className="link-text">Skills</span>
            </Link>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1Y4j3nBnt16lF5lNzvdpeNOzXkYMpf87R/view"
              rel="noreferrer"
              target="_blank"
              className="nav-links"
            >
              <span className="link-text">Resume</span>
            </a>
          </li>
          <li>
            <Link to="/contact" className="nav-links">
              <span className="link-text">Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
      <Main />
    </Router>
  );
};

export default Sidebar;
