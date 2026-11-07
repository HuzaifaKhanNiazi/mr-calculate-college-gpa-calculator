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

const WHY = [
  {
    title: "100% free",
    text: "No signup and no payment. Open a calculator and start.",
    icon: "M12 2 4 6v6c0 5 3.4 9.7 8 10 4.6-.3 8-5 8-10V6l-8-4zm-1 14-4-4 1.4-1.4L11 13.2l5.6-5.6L18 9l-7 7z",
  },
  {
    title: "Instant results",
    text: "Your result updates live as soon as you change a value.",
    icon: "M13 2 4 14h6l-1 8 9-12h-6l1-8z",
  },
  {
    title: "Clean and simple",
    text: "A clear layout that anyone can use without a guide.",
    icon: "M4 5h16v3H4V5zm0 5.5h10v3H4v-3zM4 16h16v3H4v-3z",
  },
  //   {
  //     title: "Works on any device",
  //     text: "Fully responsive on phones, tablets and desktop screens.",
  //     icon: "M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm5 18.2a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2zM7 5v11h10V5H7z",
  //   },
  {
    title: "Accurate formulas",
    text: "Standard, transparent formulas you can verify yourself.",
    icon: "M5 3h14v4h-2V5H7.8l5.2 7-5.2 7H17v-2h2v4H5v-2l5.4-7L5 5V3z",
  },
  {
    title: "Private by design",
    text: "Your entries stay in your browser.",
    icon: "M12 1a5 5 0 0 0-5 5v3H5v13h14V9h-2V6a5 5 0 0 0-5-5zm0 2a3 3 0 0 1 3 3v3H9V6a3 3 0 0 1 3-3z",
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

const AUDIENCE = [
  {
    title: "Students",
    text: "Track grades, GPA and academic goals with confidence.",
  },
  {
    title: "Professionals",
    text: "Run quick calculations without opening a spreadsheet.",
  },
  {
    title: "Everyday users",
    text: "Handle day-to-day numbers fast and without errors.",
  },
  {
    title: "Freelancers and small businesses",
    text: "Check figures quickly before you send a quote or invoice.",
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
  useEffect(() => {
    document.title = "Mr Calculate | Free Online Calculators for Students";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Mr Calculate offers free online calculators, including a college GPA,adp paycheck and many more calculators. Fast, simple and accurate.",
      );
  }, []);

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
                <p>Built to be quick, clear and easy to trust.</p>
              </div>
              <div className="hm-grid">
                {WHY.map((w) => (
                  <div key={w.title} className="hm-card">
                    <span className="hm-icon sm">
                      <Icon d={w.icon} />
                    </span>
                    <h3>{w.title}</h3>
                    <p>{w.text}</p>
                  </div>
                ))}
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
                <p>Made for anyone who needs a quick, reliable answer.</p>
              </div>
              <div className="hm-grid four">
                {AUDIENCE.map((a) => (
                  <div key={a.title} className="hm-card">
                    <h3>{a.title}</h3>
                    <p>{a.text}</p>
                  </div>
                ))}
              </div>
            </section>
          </>
        </div>
      </main>
    </>
  );
}
