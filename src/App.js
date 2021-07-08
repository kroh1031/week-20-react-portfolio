import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutMe from "./components/pages/AboutMe";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";
import NavBar from "./components/NavBar";
import All from "./styles/All.css";
import gitHubIcon from "./media/github-icon.png";
import linkedInIcon from "./media/linkedin-icon.png";

const App = () => {
  return (
    <div>
      <Router>
        <div className="font">
          <NavBar />
          <Switch>
            <Route exact path="/week-20-react-portfolio" component={AboutMe} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/resume" component={Resume} />
          </Switch>
        </div>
      </Router>
      <a href="https://github.com/kroh1031" target="_blank">
        <img
          className="makeimagesticktobottom"
          src={gitHubIcon}
          alt="GitHub Logo"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/karen-roh-a43791205/"
        target="_blank"
      >
        <img
          className="makeimagesticktobottom"
          src={linkedInIcon}
          alt="GitHub Logo"
        />
      </a>
    </div>
  );
};

export default App;
