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
import stackOverFlowIcon from "./media/stackoverflow-icon.png";

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
      <footer className="mt-3 mb-2">
        {/* First Icon */}

        <a href="https://github.com/kroh1031" target="_blank">
          <img src={gitHubIcon} alt="GitHub Logo" />
        </a>

        {/* Second Icon */}

        <a
          href="https://www.linkedin.com/in/karen-roh-a43791205/"
          target="_blank"
        >
          <img src={linkedInIcon} alt="GitHub Logo" />
        </a>

        {/* Third Icon */}

        <a
          href="https://stackoverflow.com/users/15106572/karen-roh?tab=profile"
          target="_blank"
        >
          <img src={stackOverFlowIcon} alt="StackOverFlow Logo" />
        </a>
      </footer>
    </div>
  );
};

export default App;
