import "./Navbar.css";
import { CloudinaryContext, Image } from "cloudinary-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="main">
      <Link to="/" className="name">
        Daria Radu
      </Link>

      <div className="links">
        <ul>
          <li>
            <Link to="/">Overview</Link>
          </li>

          <li>
            <Link to="/street">Street</Link>
          </li>
          <li>
            <Link to="/portrait">Portraits</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
