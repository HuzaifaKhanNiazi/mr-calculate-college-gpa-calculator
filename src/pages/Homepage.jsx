import { useEffect } from "react";
import { Link } from "react-router-dom";

const TOOLS = [
  {
    name: "College GPA Calculator",
    path: "/college-gpa-calculator",
    category: "Education",
    desc: "Enter your grades and credit hours to calculate your semester GPA on a 4.0 scale.",
    icon: "M12 3 2 8l10 5 8-4v6h2V8L12 3zM6 12.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-3.5l-6 3-6-3z",
    ready: true,
  },
  {
    name: "CGPA Calculator",
    path: "/cgpa-calculator",
    category: "Education",
    desc: "Combine multiple semesters and find your cumulative GPA in one place.",
    icon: "M4 20V10h4v10H4zm6 0V4h4v16h-4zm6 0v-7h4v7h-4z",
    ready: false,
  },
  {
    name: "Percentage Calculator",
    path: "#",
    category: "Everyday",
    desc: "Work out percentages, increases and decreases in a couple of clicks.",
    icon: "M7 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm10 10a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM18.7 4.3 4.3 18.7l1.4 1.4L20.1 5.7l-1.4-1.4z",
    ready: false,
  },
  {
    name: "More tools coming",
    path: "#",
    category: "Coming soon",
    desc: "New calculators are added regularly. Check back soon.",
    icon: "M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6V5z",
    ready: false,
  },
];

const STEPS = [
  {
    title: "Choose a calculator",
    text: "Pick the tool you need from the list above.",
  },
  {
    title: "Enter your values",
    text: "Fill in your grades, numbers or other details.",
  },
  {
    title: "Get your result",
    text: "See the answer instantly, with no extra steps.",
  },
];

const STATS = [
  ["Free", "No signup needed"],
  ["Instant", "Live results"],
  ["4.0", "GPA scale"],
  ["Accuracy", "Accurate results"],
];

const FAQS = [
  {
    q: "Is Mr Calculate free to use?",
    a: "Yes. Every calculator on Mr Calculate is free to use. There is no payment and no signup required.",
  },
  {
    q: "Do I need to create an account?",
    a: "No. You can open any calculator and use it right away without registering.",
  },
  {
    q: "Are my results saved or shared?",
    a: "Your entries stay in your own browser. Mr Calculate does not sell or share the values you enter into its calculators.",
  },
  {
    q: "Which calculators are available?",
    a: "You can use the College GPA Calculator today. More calculators, including a CGPA calculator, are being added regularly.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const Icon = ({ d }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d={d} />
  </svg>
);

export default function HomePage() {
  // useEffect(() => {
  //   document.title = "Mr Calculate | Free Online Calculators for Students";
  //   document
  //     .querySelector('meta[name="description"]')
  //     ?.setAttribute(
  //       "content",
  //       "Mr Calculate offers free online calculators, including a college GPA,adp paycheck and many more calculators. Fast, simple and accurate.",
  //     );
  // }, []);

  return (
    <>
      <main>
        <div className="hm-warp">
          <>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <section className="hm-hero" aria-labelledby="hm-title">
              <div className="hm-hero-copy">
                <span className="hm-pill">Free online calculators</span>
                <h1 id="hm-title">
                  Calculate faster with <span>Mr Calculate</span>
                </h1>
                <p>
                  Simple, accurate and free calculators for students and
                  everyday use. Choose a tool, enter your values and see the
                  result instantly.
                </p>
                <div className="hm-actions">
                  <Link to="/college-gpa-calculator" className="btn btn-light">
                    Calculate your GPA
                  </Link>
                  <a href="#tools" className="btn btn-outline">
                    Browse all tools
                  </a>
                </div>
              </div>

              <div className="hm-preview" aria-hidden="true">
                <div className="hm-preview-top">
                  <span>Example result</span>
                  <span className="hm-live">
                    <i /> Live
                  </span>
                </div>
                <div className="hm-preview-gpa">
                  3.70 <small>/ 4.00</small>
                </div>
                <div className="hm-preview-bar">
                  <div />
                </div>
                <div className="hm-preview-rows">
                  <div>
                    <span>Total credits</span>
                    <strong>10</strong>
                  </div>
                  <div>
                    <span>Grade points</span>
                    <strong>37.0</strong>
                  </div>
                </div>
              </div>
            </section>
            {/* Stats */}
            <ul className="hm-stats" aria-label="Highlights">
              {STATS.map(([big, small]) => (
                <li key={big}>
                  <strong>{big}</strong>
                  <span>{small}</span>
                </li>
              ))}
            </ul>
            {/* Tools */}
            <section
              className="hm-section"
              id="tools"
              aria-labelledby="hm-tools"
            >
              <div className="hm-head">
                <h2 id="hm-tools">Popular calculators</h2>
                <p>Pick a tool and get your answer in seconds.</p>
              </div>
              <div className="hm-tools">
                {TOOLS.map((t) => {
                  const body = (
                    <>
                      <span className="hm-icon">
                        <Icon d={t.icon} />
                      </span>
                      <span className="hm-tag">{t.category}</span>
                      <h3>{t.name}</h3>
                      <p>{t.desc}</p>
                      <span className="hm-go">
                        {t.ready ? "Open calculator →" : "Coming soon"}
                      </span>
                    </>
                  );
                  return t.ready ? (
                    <Link key={t.name} to={t.path} className="hm-tool">
                      {body}
                    </Link>
                  ) : (
                    <div key={t.name} className="hm-tool off">
                      {body}
                    </div>
                  );
                })}
              </div>
            </section>
            {/* Why */}
            <section className="hm-section" aria-labelledby="hm-why">
              <div className="hm-head">
                <h2 id="hm-why">Why choose Mr Calculate?</h2>
              </div>
              <div className="hm-text">
                <p className="hm-lead">
                  Mr Calculate is built to give you a quick, clear answer
                  without distractions.
                </p>
                <dl className="hm-defs">
                  <div>
                    <dt>Free to use</dt>
                    <dd>
                      No signup and no payment. Open a calculator and start.
                    </dd>
                  </div>
                  <div>
                    <dt>Instant results</dt>
                    <dd>Your result updates as soon as you change a value.</dd>
                  </div>

                  <div>
                    <dt>Standard formulas</dt>
                    <dd>Commonly used methods that you can verify yourself.</dd>
                  </div>
                  <div>
                    <dt>Private by design</dt>
                    <dd>Your entries stay in your own browser.</dd>
                  </div>
                </dl>
              </div>
            </section>
            {/* How it works */}
            <section className="hm-section" aria-labelledby="hm-how">
              <div className="hm-head">
                <h2 id="hm-how">How it works</h2>
                <p>Three simple steps from question to answer.</p>
              </div>
              <ol className="hm-steps">
                {STEPS.map((s, i) => (
                  <li key={s.title}>
                    <span className="hm-num">{i + 1}</span>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </li>
                ))}
              </ol>
            </section>
            {/* Audience */}
            <section className="hm-section" aria-labelledby="hm-who">
              <div className="hm-head">
                <h2 id="hm-who">Who is Mr Calculate for?</h2>
              </div>
              <div className="hm-text">
                <p className="hm-lead">
                  Mr Calculate is made for anyone who needs a quick, reliable
                  answer.
                </p>
                <dl className="hm-defs">
                  <div>
                    <dt>Students</dt>
                    <dd>
                      Check grades and GPA, and plan your academic goals with
                      confidence.
                    </dd>
                  </div>
                  <div>
                    <dt>Professionals</dt>
                    <dd>
                      Run quick calculations without opening a spreadsheet.
                    </dd>
                  </div>
                  <div>
                    <dt>Freelancers and small businesses</dt>
                    <dd>
                      Verify your figures before sending a quote or an invoice.
                    </dd>
                  </div>
                  <div>
                    <dt>Everyday users</dt>
                    <dd>Get a dependable result in a few seconds.</dd>
                  </div>
                </dl>
              </div>
            </section>
          </>
        </div>
      </main>
    </>
  );
}
