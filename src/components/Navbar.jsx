<<<<<<< HEAD
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">

      <Link className="navbar-brand" to="/">
        John Doe
      </Link>

=======
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 fixed-top">
      
      {/* Brand */}
      <NavLink className="navbar-brand" to="/" end>
        John Doe
      </NavLink>

      {/* Toggle mobile */}
>>>>>>> master
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
<<<<<<< HEAD
=======
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
>>>>>>> master
      >
        <span className="navbar-toggler-icon"></span>
      </button>

<<<<<<< HEAD
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">

          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/services">Services</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/portfolio">Portfolio</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/mentions-legales">
              Mentions légales
            </Link>
          </li>

        </ul>
      </div>

=======
      {/* Liens/link */}
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" end>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/services">
              Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/portfolio">
              Portfolio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/mentions-legales">
              Mentions légales
            </NavLink>
          </li>
        </ul>
      </div>
>>>>>>> master
    </nav>
  );
}

export default Navbar;
