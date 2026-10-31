import React from "react";
import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

const LogoMark = () => (
  <span className="logo-mark" aria-hidden="true">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm1 2v4h10V4H7zm1.5 6a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zm3.5 0a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zm3.5 0a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM8.5 14a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zm3.5 0a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zm3.5 0a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z" />
    </svg>
  </span>
);
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <header className="site-header">
      <nav className="nav-inner" aria-label="Main navigation">
        <Link to="/" className="logo" aria-label="Mr-Calculate home">
          <LogoMark />
          Mr-Calculate
        </Link>

        <button
          className="burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="main-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={open ? "bars open" : "bars"} />
        </button>

        <div id="main-menu" className={open ? "menu open" : "menu"}>
          <NavLink to="/" end className="link">
            Home
          </NavLink>
          <NavLink to="/faqs" className="link">
            FAQS
          </NavLink>
          <NavLink to="/about-us" className="link">
            About Us
          </NavLink>
          <Link to="/college-gpa-calculator" className="btn btn-light nav-cta">
            Calculate GPA
          </Link>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
