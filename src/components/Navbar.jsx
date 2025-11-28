import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">

        {/* BRAND */}
        <div className="nav-brand">COSMAS ONYEKWELU</div>

        {/* DESKTOP LINKS */}
        <nav className="nav-links desktop">
          <Link className={pathname === "/" ? "active" : ""} to="/">Home</Link>
          <Link className={pathname === "/projects" ? "active" : ""} to="/projects">Projects</Link>
          <Link className={pathname === "/about" ? "active" : ""} to="/about">About</Link>
          <Link className={pathname === "/contact" ? "active" : ""} to="/contact">Contact</Link>
        </nav>

        {/* HAMBURGER (mobile only) */}
        <button className="hamburger mobile" onClick={toggleMenu} aria-label="Menu">
          <span className={open ? "line open" : "line"}></span>
          <span className={open ? "line open" : "line"}></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <nav className="mobile-menu">
          <Link onClick={closeMenu} className={pathname === "/" ? "active" : ""} to="/">Home</Link>
          <Link onClick={closeMenu} className={pathname === "/projects" ? "active" : ""} to="/projects">Projects</Link>
          <Link onClick={closeMenu} className={pathname === "/about" ? "active" : ""} to="/about">About</Link>
          <Link onClick={closeMenu} className={pathname === "/contact" ? "active" : ""} to="/contact">Contact</Link>
        </nav>
      )}
    </header>
  );
}
