const MARGIN = 20;
const PAGE_W = 210;
const PAGE_H = 297;

const GRADE_PERCENT = null;

export function getPercentage(courses, table = GRADE_PERCENT) {
  if (!table || !courses.length) return null;
  let credits = 0;
  let weighted = 0;
  for (const c of courses) {
    const p = table[c.grade];
    if (typeof p !== "number") return null;
    credits += c.credits;
    weighted += p * c.credits;
  }
  return credits ? weighted / credits : null;
}

const clean = (s) =>
  String(s ?? "")
    .replace(/[^\x20-\x7E\u00A0-\u00FF]/g, "?")
    .replace(/\s+/g, " ")
    .trim();

export async function buildReport(data) {
  const { jsPDF } = await import("jspdf");
  const autoTable = (await import("jspdf-autotable")).default;

  const { student, courses, gpa, totalCredits, totalPoints, scale = [] } = data;
  const doc = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait" });

  const base = {
    theme: "grid",
    margin: { left: MARGIN, right: MARGIN, bottom: 22 },
    styles: {
      font: "helvetica",
      fontSize: 10,
      textColor: 0,
      lineColor: [130, 130, 130],
      lineWidth: 0.2,
      cellPadding: 2.2,
    },
    headStyles: { fillColor: [235, 235, 235], textColor: 0, fontStyle: "bold" },
    footStyles: { fillColor: [235, 235, 235], textColor: 0, fontStyle: "bold" },
  };

  const heading = (text, y) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(0);
    doc.text(text, MARGIN, y);
  };
  const ensureSpace = (y, needed) => {
    if (y + needed > PAGE_H - 22) {
      doc.addPage();
      return MARGIN;
    }
    return y;
  };
  const after = () => doc.lastAutoTable.finalY;

  /* Title */
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.setTextColor(0);
  doc.text("GPA Result Report", PAGE_W / 2, 24, { align: "center" });

  const today = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(90);
  doc.text(`Generated on ${today}`, PAGE_W / 2, 30, { align: "center" });
  doc.setDrawColor(0);
  doc.setLineWidth(0.4);
  doc.line(MARGIN, 34, PAGE_W - MARGIN, 34);

  heading("Student Information", 44);
  const info = [["Student Name", student.name]];
  if (student.rollNumber) info.push(["Roll Number", student.rollNumber]);
  info.push(["University", student.university]);
  if (student.college) info.push(["College Name", student.college]);
  info.push(
    ["Department", student.department],
    ["Degree", student.degree],
    ["Semester", student.semester],
  );
  autoTable(doc, {
    ...base,
    startY: 47,
    body: info.map(([k, v]) => [k, clean(v)]),
    columnStyles: {
      0: { fontStyle: "bold", cellWidth: 45, fillColor: [245, 245, 245] },
    },
  });

  /* Course details */
  let y = ensureSpace(after() + 12, 40);
  heading("Course Details", y);
  autoTable(doc, {
    ...base,
    startY: y + 3,
    styles: { ...base.styles, fontSize: 9.5 },
    head: [
      [
        "#",
        "Course Name",
        "Grade",
        "Grade Points",
        "Credit Hours",
        "Grade Points x Credits",
      ],
    ],
    body: courses.map((c, i) => [
      i + 1,
      clean(c.name) || `Course ${i + 1}`,
      c.grade,
      c.points.toFixed(1),
      c.credits,
      (c.points * c.credits).toFixed(1),
    ]),
    foot: [["", "Total", "", "", String(totalCredits), totalPoints.toFixed(1)]],
    showFoot: "lastPage",
    columnStyles: {
      0: { halign: "center", cellWidth: 10 },
      2: { halign: "center", cellWidth: 17 },
      3: { halign: "center", cellWidth: 24 },
      4: { halign: "center", cellWidth: 24 },
      5: { halign: "center", cellWidth: 32 },
    },
    didParseCell: (d) => {
      if (d.section === "head" && [0, 2, 3, 4, 5].includes(d.column.index)) {
        d.cell.styles.halign = "center";
      }
      if (d.section === "foot" && [4, 5].includes(d.column.index)) {
        d.cell.styles.halign = "center";
      }
    },
  });

  /* Result summary */
  const percentage = getPercentage(courses);
  y = ensureSpace(after() + 12, 70);
  heading("Result Summary", y);
  const summary = [
    ["GPA", `${gpa.toFixed(2)} / 4.00`],
    ["Total Credit Hours", String(totalCredits)],
    ["Total Courses", String(courses.length)],
    ["Total Grade Points", totalPoints.toFixed(1)],
  ];
  if (percentage !== null)
    summary.push(["Percentage", `${percentage.toFixed(2)}%`]);
  autoTable(doc, {
    ...base,
    startY: y + 3,
    body: summary,
    columnStyles: {
      0: { fontStyle: "bold", cellWidth: 60, fillColor: [245, 245, 245] },
    },
    didParseCell: (d) => {
      if (d.section === "body" && d.row.index === 0) {
        d.cell.styles.fontStyle = "bold";
        d.cell.styles.fontSize = 12;
      }
    },
  });

  /* Notes */
  y = ensureSpace(after() + 10, 40);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(60);
  const notes = [
    "GPA = Total Grade Points ÷ Total Credit Hours, where each course's grade points are multiplied by its credit hours.",
    scale.length
      ? `Grade scale used: ${scale.map((g) => `${g.letter} = ${g.points.toFixed(1)}`).join(", ")}.`
      : "",
    percentage === null
      ? "A percentage is not shown because converting GPA to percentage depends on each university's own grading policy."
      : "Percentage is calculated from the grade-to-percentage table of the grading scale used.",
    "This report is generated from the values entered by the student. It is for reference only and is not an official transcript. Please confirm results with your institution.",
  ].filter(Boolean);
  const lines = doc.splitTextToSize(notes.join("\n"), PAGE_W - MARGIN * 2);
  doc.text(lines, MARGIN, y);

  /* Footer on every page */
  const pages = doc.getNumberOfPages();
  for (let i = 1; i <= pages; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(110);
    doc.text("Generated with Mr Calculate", MARGIN, PAGE_H - 10);
    doc.text(`Page ${i} of ${pages}`, PAGE_W - MARGIN, PAGE_H - 10, {
      align: "right",
    });
  }

  return doc;
}

export async function downloadReport(data) {
  const doc = await buildReport(data);
  const safe = clean(data.student.name)
    .replace(/[^A-Za-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  doc.save(`GPA-Report${safe ? "-" + safe : ""}.pdf`);
}
