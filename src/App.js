import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutMe from "./components/pages/AboutMe";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";
import NavBar from "./components/NavBar";
import All from "./styles/All.css";
import Footer from "./components/Footer";

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
      <Footer />
    </div>
  );
};

export default App;
