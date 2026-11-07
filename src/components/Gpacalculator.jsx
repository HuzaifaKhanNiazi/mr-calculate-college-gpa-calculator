import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SeoContent from "../components/Seocontent.jsx";
import useSeo from "../useSeo.js";
import ReportDialog from "../components/ReportDialog.jsx";
const GRADES = [
  { letter: "A", points: 4.0 },
  { letter: "A-", points: 3.7 },
  { letter: "B+", points: 3.3 },
  { letter: "B", points: 3.0 },
  { letter: "B-", points: 2.7 },
  { letter: "C+", points: 2.3 },
  { letter: "C", points: 2.0 },
  { letter: "C-", points: 1.7 },
  { letter: "D+", points: 1.3 },
  { letter: "D", points: 1.0 },
  { letter: "F", points: 0.0 },
];
const CREDITS = [1, 2, 3, 4, 5, 6];
const STORAGE_KEY = "mr-calculate-courses";

let nextId = 100;
const newCourse = (name = "", grade = "A", credits = 3) => ({
  id: nextId++,
  name,
  grade,
  credits,
});

const DEFAULTS = [
  { id: 1, name: "Foundations of Biology", grade: "A", credits: 4 },
  { id: 2, name: "Applied Statistics", grade: "B", credits: 3 },
  { id: 3, name: "World Literature", grade: "A", credits: 3 },
];

const pointsOf = (letter) =>
  GRADES.find((g) => g.letter === letter)?.points ?? 0;

function loadCourses() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (Array.isArray(saved)) return saved;
  } catch {}
  return DEFAULTS;
}

const Chevron = () => (
  <span className="chev" aria-hidden="true">
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  </span>
);

const TrashIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6M10 11v6M14 11v6" />
  </svg>
);

function GpaCalculator() {
  useSeo({
    title: "College GPA Calculator | mr-calculate",
    description:
      "Free college gpa calculator. Enter your grades and credit hours to calculate your college gpa instantly on a 4.0 scale.",
  });
  const [courses, setCourses] = useState(loadCourses);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
    } catch {}
  }, [courses]);

  const { gpa, totalCredits, totalPoints } = useMemo(() => {
    const totalCredits = courses.reduce((s, c) => s + c.credits, 0);
    const totalPoints = courses.reduce(
      (s, c) => s + pointsOf(c.grade) * c.credits,
      0,
    );
    return {
      totalCredits,
      totalPoints,
      gpa: totalCredits ? totalPoints / totalCredits : 0,
    };
  }, [courses]);
  const [reportOpen, setReportOpen] = useState(false);

  const reportData = {
    courses: courses.map((c) => ({
      name: c.name,
      grade: c.grade,
      points: pointsOf(c.grade),
      credits: c.credits,
    })),
    gpa,
    totalCredits,
    totalPoints,
    scale: GRADES,
  };

  const update = (id, field, value) =>
    setCourses((cs) =>
      cs.map((c) => (c.id === id ? { ...c, [field]: value } : c)),
    );
  const remove = (id) => setCourses((cs) => cs.filter((c) => c.id !== id));
  const add = () => setCourses((cs) => [...cs, newCourse()]);
  const clearAll = () => setCourses([]);

  const n = courses.length;
  const courseLabel = `${n} ${n === 1 ? "course" : "courses"}`;

  return (
    <>
      <main className="page">
        <section className="hero" aria-labelledby="hero-title">
          <h1 id="hero-title" className="hero-title">
            College GPA Calculator
          </h1>
          <p className="hero-text">
            Calculate your college GPA quickly and easily with the{" "}
            <strong>Mr Calculate College GPA Calculator</strong>. Enter your
            course grades and credit hours to find your Grade Point Average
            without doing manual calculations.
          </p>
        </section>
        <section className="panel">
          <header className="panel-head">
            <div>
              <p className="eyebrow">Your semester</p>
              <h2>Your courses</h2>
            </div>
            <div className="head-actions">
              <span className="count">
                <i className="dot-ring" /> {courseLabel}
              </span>
              <button className="ghost" onClick={clearAll} disabled={!n}>
                <TrashIcon size={18} /> Clear all
              </button>
            </div>
          </header>

          <div className="cols">
            <span>Course name</span>
            <span>Letter grade</span>
            <span>Credit hours</span>
            <span className="center">Remove</span>
          </div>

          <div className="rows">
            {n === 0 && (
              <p className="empty">
                No courses yet. Add a course to start calculating.
              </p>
            )}
            {courses.map((c) => (
              <div className="row" key={c.id}>
                <input
                  className="field"
                  type="text"
                  value={c.name}
                  placeholder="Course name"
                  aria-label="Course name"
                  onChange={(e) => update(c.id, "name", e.target.value)}
                />
                <label className="select">
                  <select
                    value={c.grade}
                    aria-label="Letter grade"
                    onChange={(e) => update(c.id, "grade", e.target.value)}
                  >
                    {GRADES.map((g) => (
                      <option key={g.letter} value={g.letter}>
                        {g.letter} · {g.points.toFixed(1)} pts
                      </option>
                    ))}
                  </select>
                  <Chevron />
                </label>
                <label className="select">
                  <select
                    value={c.credits}
                    aria-label="Credit hours"
                    onChange={(e) =>
                      update(c.id, "credits", Number(e.target.value))
                    }
                  >
                    {CREDITS.map((cr) => (
                      <option key={cr} value={cr}>
                        {cr} {cr === 1 ? "credit" : "credits"}
                      </option>
                    ))}
                  </select>
                  <Chevron />
                </label>
                <button
                  className="icon-btn"
                  onClick={() => remove(c.id)}
                  aria-label={`Remove ${c.name || "course"}`}
                >
                  <TrashIcon />
                </button>
              </div>
            ))}
          </div>

          <button className="add" onClick={add}>
            <span className="plus">+</span> Add Course
          </button>

          <footer className="panel-foot">
            <span>Changes calculate instantly</span>
            <span className="caps">GPA · out of 4.00</span>
          </footer>
        </section>

        <section className="results">
          <div className="gpa-card">
            <div className="gpa-top">
              <span className="eyebrow">Current GPA</span>
              <span className="live">
                <i className="dot" /> Live
              </span>
            </div>
            <div className="gpa-value">
              {gpa.toFixed(2)} <small>/ 4.00</small>
            </div>
            <div
              className="bar"
              role="progressbar"
              aria-valuenow={gpa}
              aria-valuemin={0}
              aria-valuemax={4}
            >
              <div
                className="bar-fill"
                style={{ width: `${(gpa / 4) * 100}%` }}
              />
            </div>
            <p className="gpa-note">Credit-hour weighted · updates instantly</p>
          </div>

          <div className="totals-card">
            <div className="totals-top">
              <span className="eyebrow muted">Semester totals</span>
              <span className="muted small">{courseLabel}</span>
            </div>
            <div className="totals-grid">
              <div>
                <p className="muted">Total Credit Hours</p>
                <strong>{totalCredits}</strong>
              </div>
              <div>
                <p className="muted">Total Quality Points</p>
                <strong>{totalPoints.toFixed(1)}</strong>
              </div>
            </div>
            <p className="muted small">
              Every course contributes according to its credit hours.
            </p>
          </div>
        </section>
        <div className="report-bar">
          <button
            className="btn btn-dark"
            onClick={() => setReportOpen(true)}
            disabled={n === 0}
          >
            Download PDF report
          </button>
          <p>
            Get a simple report with your GPA, credit hours and course details,
            ready to print or share.
          </p>
        </div>

        <ReportDialog
          open={reportOpen}
          onClose={() => setReportOpen(false)}
          data={reportData}
        />
        <SeoContent />
      </main>
    </>
  );
}
export default GpaCalculator;
