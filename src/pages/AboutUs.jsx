import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <>
      <main className="page">
        <article className="about-page">
          <h1>About Us</h1>

          <p>
            Welcome to{" "}
            <strong>
              {" "}
              <Link to="/">mr-calculate.com</Link>
            </strong>
            , a free collection of simple and accurate online calculators for
            students and everyday use. Our goal is to help you get a clear
            answer quickly, without complicated steps or manual calculations.
          </p>

          <p>
            We started with a{" "}
            <Link to="/college-gpa-calculator">College GPA Calculator</Link>{" "}
            that works with letter grades and credit hours, and we are adding
            more tools over time. Each calculator uses standard, commonly
            accepted formulas and is designed to be easy to read on any device.
          </p>

          <p>
            Mr Calculate is free to use and does not require an account. The
            values you enter stay in your own browser. Please note that our
            calculators provide estimates for general information only. Rules,
            rates and requirements can differ by institution, country or
            provider, so always confirm important results with the relevant
            official source before making a decision.
          </p>
        </article>
      </main>
    </>
  );
}
