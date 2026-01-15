import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/services">Services</Link> |{" "}
      <Link to="/portfolio">Portfolio</Link> |{" "}
      <Link to="/contact">Contact</Link> |{" "}
      <Link to="/mentions-legales">Mentions légales</Link>
    </nav>
  );
}

export default Navbar;
