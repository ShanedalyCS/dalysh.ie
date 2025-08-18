import { NavLink } from "react-router-dom";
import "../globals.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-content">
        <NavLink to="/" end className={({isActive}) => `nav-link ${isActive ? "active" : ""}`}>
          Home
        </NavLink>
        <NavLink to="/projects" className={({isActive}) => `nav-link ${isActive ? "active" : ""}`}>
          Projects
        </NavLink>
      </div>
    </nav>
  );
}
