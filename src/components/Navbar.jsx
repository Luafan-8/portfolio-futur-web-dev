import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 fixed-top">

      <Link className="navbar-brand" to="/">
        John Doe
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

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

    </nav>
  );
}

export default Navbar;
