import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function AboutPage() {
  useEffect(() => {
    document.title = "About Us | Mr Calculate";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Learn about Mr Calculate, a free collection of simple and accurate online calculators for students and everyday use.",
      );
  }, []);

  return (
    <>
      <main className="page">
        <article className="about-page">
          <h1>About Us</h1>

          <p>
            Welcome to <strong>Mr Calculate</strong>, a free collection of
            simple and accurate online calculators for students and everyday
            use. Our goal is to help you get a clear answer quickly, without
            complicated steps or manual calculations.
          </p>

          <p>
            We started with a{" "}
            <Link to="/gpa-calculator">College GPA Calculator</Link> that works
            with letter grades and credit hours, and we are adding more tools
            over time. Each calculator uses standard, commonly accepted formulas
            and is designed to be easy to read on any device.
          </p>

          <p>
            Mr Calculate is free to use and does not require an account. The
            values you enter stay in your own browser. Please note that our
            calculators provide estimates, and grading rules can differ between
            institutions, so always confirm important results with your college
            or university.
          </p>
        </article>
      </main>
    </>
  );
}
