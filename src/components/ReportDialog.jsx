import { useEffect, useRef, useState } from "react";
import { downloadReport } from "../gpaReport.js";

const FIELDS = [
  {
    key: "name",
    label: "Student Name",
    required: true,
    autoComplete: "name",
    placeholder: "e.g. James",
  },
  { key: "rollNumber", label: "Roll Number", placeholder: "e.g. 21-CS-045" },
  {
    key: "college/university",
    label: "College/University",
    required: true,
    placeholder: "e.g. Example College/University",
  },

  {
    key: "department",
    label: "Department",
    required: true,
    placeholder: "e.g. Computer Science",
  },
  {
    key: "degree",
    label: "Degree",
    required: true,
    list: "rd-degrees",
    placeholder: "e.g. BS Computer Science",
  },
  {
    key: "semester",
    label: "Semester",
    required: true,
    placeholder: "e.g. 3rd Semester or Fall 2026",
  },
];

const EMPTY = Object.fromEntries(FIELDS.map((f) => [f.key, ""]));
const DEGREES = [
  "BS",
  "BSc",
  "BE",
  "BTech",
  "BBA",
  "BCom",
  "MBBS",
  "BDS",
  "MS",
  "MSc",
  "MBA",
  "PhD",
];

export default function ReportDialog({ open, onClose, data }) {
  const ref = useRef(null);
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [busy, setBusy] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((er) => ({ ...er, [name]: "" }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const er = {};
    FIELDS.filter((f) => f.required).forEach((f) => {
      if (!values[f.key].trim())
        er[f.key] = `Please enter ${f.label.toLowerCase()}.`;
    });
    setErrors(er);
    if (Object.keys(er).length) return;

    setBusy(true);
    setFailed(false);
    try {
      const student = Object.fromEntries(
        Object.entries(values).map(([k, v]) => [k, v.trim()]),
      );
      await downloadReport({ ...data, student });
      onClose();
    } catch {
      setFailed(true);
    } finally {
      setBusy(false);
    }
  };

  return (
    <main>
      <dialog
        ref={ref}
        className="rd"
        aria-labelledby="rd-title"
        onClose={onClose}
        onClick={(e) => e.target === ref.current && onClose()}
      >
        <form className="rd-form" onSubmit={onSubmit} noValidate>
          <div className="rd-head">
            <h2 id="rd-title">Download PDF report</h2>
            <button
              type="button"
              className="rd-x"
              onClick={onClose}
              aria-label="Close"
            >
              ×
            </button>
          </div>

          <div className="rd-grid">
            {FIELDS.map((f) => (
              <div key={f.key} className="rd-field">
                <label htmlFor={`rd-${f.key}`}>
                  {f.label}
                  {f.required ? (
                    <span aria-hidden="true"> *</span>
                  ) : (
                    <em> (optional)</em>
                  )}
                </label>
                <input
                  id={`rd-${f.key}`}
                  name={f.key}
                  type="text"
                  maxLength={80}
                  list={f.list}
                  autoComplete={f.autoComplete || "off"}
                  placeholder={f.placeholder}
                  value={values[f.key]}
                  onChange={onChange}
                  aria-required={f.required || undefined}
                  aria-invalid={!!errors[f.key]}
                  aria-describedby={
                    errors[f.key] ? `rd-${f.key}-err` : undefined
                  }
                />
                {errors[f.key] && (
                  <span id={`rd-${f.key}-err`} className="rd-error">
                    {errors[f.key]}
                  </span>
                )}
              </div>
            ))}
          </div>

          <datalist id="rd-degrees">
            {DEGREES.map((d) => (
              <option key={d} value={d} />
            ))}
          </datalist>

          {failed && (
            <p className="rd-alert" role="alert">
              Could not create the PDF. Please try again.
            </p>
          )}

          <div className="rd-actions">
            <button type="button" className="btn btn-soft" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-dark" disabled={busy}>
              {busy ? "Creating PDF..." : "Download PDF"}
            </button>
          </div>
        </form>
      </dialog>
    </main>
  );
}
