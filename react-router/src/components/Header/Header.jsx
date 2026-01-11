import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h2 className="logo">Vivek Singh</h2>

        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/github">GitHub</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
