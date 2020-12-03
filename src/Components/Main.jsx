import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home.jsx";
import Projects from "../Pages/Projects.jsx";
import Skills from "../Pages/Skills.jsx";
import Contact from "../Pages/Contact.jsx";

const Main = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
