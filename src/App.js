
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutMe from "./components/pages/AboutMe";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={AboutMe} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/resume" component={Resume} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
