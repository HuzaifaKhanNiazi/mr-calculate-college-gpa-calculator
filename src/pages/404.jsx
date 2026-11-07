import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  useEffect(() => {
    document.title = "Page Not Found | Mr Calculate";

    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex";
    document.head.appendChild(meta);
    return () => document.head.removeChild(meta);
  }, []);

  return (
    <main>
      <section className="nf" aria-labelledby="nf-title">
        <div className="nf-visual" aria-hidden="true">
          <span className="nf-num">404</span>
        </div>

        <h1 id="nf-title">Sorry, that page could not be found</h1>
        <p>
          The page you requested either doesn't exist or has been moved. Let's
          get you back to the calculators.
        </p>

        <div className="nf-actions">
          <Link to="/" className="btn btn-dark">
            Go Back Home
          </Link>
        </div>
      </section>
    </main>
  );
}
