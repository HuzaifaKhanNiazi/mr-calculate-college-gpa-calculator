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
export const Layout = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const y = window.scrollY;
        const diff = y - lastY;

        if (y < 80) {
          setHidden(false);
        } else if (diff > 8 && !open) {
          setHidden(true);
        } else if (diff < -8) {
          setHidden(false);
        }

        lastY = y;
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);
  return (
    <>
      <header className={hidden ? "site-header hide" : "site-header"}>
        <nav className="nav-inner" aria-label="Main navigation">
          <Link to="/" className="logo" aria-label="Mr-Calculate home">
            <LogoMark />
            Mr Calculate
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
            <Link
              to="/college-gpa-calculator"
              className="btn btn-light nav-cta"
            >
              Calculate GPA
            </Link>
          </div>
        </nav>
      </header>

      <Outlet />

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-about">
              <Link to="/" className="logo">
                <LogoMark />
                Mr Calculate
              </Link>
              <p>
                Free, fast and accurate online calculators for students and
                everyday use. No signup needed.
              </p>
            </div>

            <div className="footer-col">
              <h3>Calculators</h3>
              <ul>
                <li>
                  <Link to="/gpa-calculator">College GPA Calculator</Link>
                </li>
                <li>
                  <span className="soon">CGPA Calculator (soon)</span>
                </li>
                <li>
                  <span className="soon">More tools (soon)</span>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h3>Site</h3>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/terms-of-use">Terms of Use</Link>
                </li>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/faqs">FAQS</Link>
                </li>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} mr-calculate. All rights reserved.
            </p>
            <p>
              Results are estimates. Always check your institution's grading
              policy.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Layout;
