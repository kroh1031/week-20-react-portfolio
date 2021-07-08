import { Link, NavLink } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary p-2">
      <div class="container-fluid">
        <Link to="/" className="navbar-brand my-brand">
          Karen Roh
        </Link>
        {/* <a class="navbar-brand my-brand" href="/">
          Karen Roh
        </a> */}
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarColor01"
        >
          <ul class="navbar-nav">
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-link"
                activeStyle={{ fontWeight: "bold" }}
              >
                About Me
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                to="/portfolio"
                className="nav-link"
                activeStyle={{ fontWeight: "bold" }}
              >
                Portfolio
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                to="/contact"
                className="nav-link"
                activeStyle={{ fontWeight: "bold" }}
              >
                Contact
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                to="/resume"
                className="nav-link"
                activeStyle={{ fontWeight: "bold" }}
              >
                Resume
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
