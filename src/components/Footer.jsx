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
export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-about">
            <Link to="/" className="logo">
              <LogoMark />
              Mr-Calculate
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
                <Link to="/faqs">FAQS</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Mr-Calculate. All rights reserved.</p>
          <p>
            Results are estimates. Always check your institution's grading
            policy.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
