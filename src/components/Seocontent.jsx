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
const EXAMPLE = [
  { course: "Mathematics", grade: "A", points: 4.0, credits: 3 },
  { course: "English", grade: "B", points: 3.0, credits: 3 },
  { course: "Computer Science", grade: "A", points: 4.0, credits: 4 },
  { course: "History", grade: "C", points: 2.0, credits: 2 },
];

const RANGES = [
  ["4.0", "Excellent; typically the highest GPA on a standard 4.0 scale"],
  ["3.5–3.9", "Very strong academic performance"],
  ["3.0–3.49", "Good academic performance"],
  ["2.0–2.99", "Moderate performance; requirements vary"],
  [
    "Below 2.0",
    "May fall below some institution's academic-standing requirements",
  ],
];

function SeoContent() {
  return (
    <main>
      <article className="content">
        <section className="scale" aria-labelledby="scale-title">
          <h2 id="scale-title">
            Letter Grades and Numerical Equivalents Used in This Calculator
          </h2>
          <p>
            This calculator uses the standard 4.0 grading scale with plus and
            minus grades. Each letter grade is converted to grade points out of
            4.0, then multiplied by the course's credit hours to get your GPA.
          </p>

          <ul className="grade-list" aria-label="Letter grade to grade points">
            {GRADES.map((g) => (
              <li key={g.letter}>
                <strong>{g.letter}</strong>
                <span>= {g.points.toFixed(1)}</span>
              </li>
            ))}
          </ul>

          <p className="scale-note">
            <strong>Please note:</strong> Grading scales differ between
            universities. Some use 3.67 for A-, 4.33 for A+, or a 5.0 or
            10-point scale. This calculator gives results out of 4.00 only, so
            please check your university's grading policy before relying on the
            result. If your university gives A+ the same value as A, select A.
          </p>
        </section>
        {/* <section aria-labelledby="what-is">
        <h2 id="what-is">What Is a College GPA Calculator?</h2>
        <p>
          A College GPA Calculator is an online tool that helps college and
          university students calculate their Grade Point Average (GPA) based on
          their course grades. GPA is a numerical representation of academic
          performance, commonly calculated on a 4.0 scale in the United States.
        </p>
        <p>
          A <strong>College GPA Calculator with Credit Hours</strong> considers
          both your grade points and the number of credit hours assigned to each
          course. Courses with more credit hours generally have a greater effect
          on your final GPA.
        </p>

        <h3>Who Can Use a College GPA Calculator?</h3>
        <ul>
          <li>
            <strong>College students:</strong> Calculate your GPA for a semester
            or academic term.
          </li>
          <li>
            <strong>University students:</strong> Check your academic
            performance across multiple courses.
          </li>
          <li>
            <strong>New students:</strong> Understand how grades and grade
            points affect GPA.
          </li>
          <li>
            <strong>Students planning their goals:</strong> Estimate the grades
            needed to achieve a target GPA.
          </li>
          <li>
            <strong>Students tracking progress:</strong> Compare semester
            results and monitor academic improvement.
          </li>
        </ul>
      </section> */}

        <section aria-labelledby="how-to-use">
          <h2 id="how-to-use">How to Use the College GPA Calculator</h2>
          <p>Follow these simple steps to calculate your college GPA:</p>
          <ol>
            <li>
              <strong>Enter your course details:</strong> Add the name of each
              course, if required.
            </li>
            <li>
              <strong>Select your grades:</strong> Choose the letter grade or
              grade point earned in each course.
            </li>
            <li>
              <strong>Enter semester hours:</strong>Enter the number of credit
              hours assigned to each course.
            </li>
            <li>
              <strong>Add more courses:</strong> Include all courses you want to
              calculate.
            </li>
            <li>
              <strong>See your GPA:</strong> Your result updates instantly as
              you make changes.
            </li>
          </ol>
          <p>
            Your result represents the weighted GPA for the courses you entered,
            provided the calculator uses the same grading scale and credit-hour
            rules as your institution.
          </p>
          <p className="tip">
            <strong>Tip:</strong> Check your college's grading policy before
            calculating your GPA. Grade-point values, repeated-course rules, and
            the treatment of pass/fail courses may vary by institution.
          </p>
        </section>

        <section aria-labelledby="how-to-calc">
          <h2 id="how-to-calc">How to Calculate College GPA</h2>
          <p>
            You can calculate GPA manually by multiplying each course's grade
            points by its semester hours, adding the results, and dividing by
            the total number of course credits.
          </p>

          <h3>GPA Calculation Formula</h3>
          <p>The standard weighted GPA calculation formula is:</p>
          <p className="formula">
            GPA = Total Quality Points ÷ Total Credit Hours
          </p>
          <ul>
            <li>
              <strong>Quality Points:</strong> Grade points earned in a course
              multiplied by the course's credit hours.
            </li>
            <li>
              <strong>Total Quality Points:</strong> The sum of the quality
              points from all included courses.
            </li>
            <li>
              <strong>Total Credit Hours:</strong> The sum of the course credits
              for all included courses.
            </li>
          </ul>
          <p>
            For example, if you earn 4.0 grade points in a three-credit course,
            you receive 12 quality points for that course.
          </p>

          <h3>Semester GPA Calculation Example</h3>
          <p>
            Suppose you completed four college courses with the following grades
            and semester hours. This example uses a common 4.0 grading scale.
          </p>
          <div className="table-wrap wide">
            <table>
              <caption className="sr-only">
                College GPA calculation example
              </caption>
              <thead>
                <tr>
                  <th scope="col">Course</th>
                  <th scope="col">Grade</th>
                  <th scope="col" className="num">
                    Grade Points
                  </th>
                  <th scope="col" className="num">
                    Credit Hours
                  </th>
                  <th scope="col" className="num">
                    Quality Points
                  </th>
                </tr>
              </thead>
              <tbody>
                {EXAMPLE.map((r) => (
                  <tr key={r.course}>
                    <td>{r.course}</td>
                    <td>{r.grade}</td>
                    <td className="num">{r.points.toFixed(1)}</td>
                    <td className="num">{r.credits}</td>
                    <td className="num">{(r.points * r.credits).toFixed(1)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th scope="row" colSpan={3}>
                    Total
                  </th>
                  <td className="num">
                    <strong>12</strong>
                  </td>
                  <td className="num">
                    <strong>41.0</strong>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          <p>
            <strong>Step 1: Calculate honor points for each course.</strong>
          </p>
          <ul>
            <li>Mathematics: 4.0 × 3 = 12.0</li>
            <li>English: 3.0 × 3 = 9.0</li>
            <li>Computer Science: 4.0 × 4 = 16.0</li>
            <li>History: 2.0 × 2 = 4.0</li>
          </ul>
          <p>
            <strong>Step 2: Add all grade points.</strong>
          </p>
          <p>12 + 9 + 16 + 4 = 41</p>
          <p>
            <strong>Step 3: Divide by the total credit hours.</strong>
          </p>
          <p>GPA = 41 ÷ 12 = 3.4167</p>
          <p>
            <strong>Final GPA: 3.42 out of 4.00</strong>, rounded to two decimal
            places. You can use the Mr Calculate GPA Calculator to perform these
            calculations automatically.
          </p>
        </section>

        <section aria-labelledby="credit-hours">
          <h2 id="credit-hours">How Do semester hours Affect College GPA?</h2>
          <p>
            semester hours represent the amount of academic work associated with
            a course. In a weighted GPA calculation, each course's semester
            hours determine how strongly its grade affects the overall result.
          </p>
          <p>For example, consider these two courses:</p>
          <ul>
            <li>
              A three-credit course with a grade point of 4.0 contributes 12
              quality points.
            </li>
            <li>
              A one-credit course with a grade point of 4.0 contributes 4 grade
              points.
            </li>
          </ul>
          <p>
            The three-credit course has three times the weight of the one-credit
            course.
          </p>

          <h3>Why Credit Hours Matter</h3>
          <ul>
            <li>
              <strong>Higher credit hours:</strong> A course with more course
              credit has a greater influence on GPA.
            </li>
            <li>
              <strong>Lower credit hours:</strong> A course with fewer credit
              hours has less influence.
            </li>
            <li>
              <strong>Consistent performance:</strong> Strong grades across
              high-credit courses can help improve your GPA.
            </li>
            <li>
              <strong>Lower grades:</strong> A low grade in a high-credit course
              can reduce your overall GPA more significantly.
            </li>
          </ul>
          <p>
            Using a GPA Calculator with Credit Hours helps you account for these
            differences and calculate a more accurate result than simply
            averaging letter grades.
          </p>
        </section>

        <section aria-labelledby="good-gpa">
          <h2 id="good-gpa">What Is a Good GPA?</h2>
          <p>
            A good GPA depends on your institution, academic program,
            scholarship requirements, and future goals. On a common 4.0 scale, a
            GPA of 3.0 or higher is often considered solid, while a GPA of 3.5
            or higher is generally strong.
          </p>
          <p>
            However, there is no universal definition of a good GPA. Some
            competitive programs, scholarships, and graduate schools may require
            higher grades. Use the GPA ranges below as a general guide rather
            than an official grading standard.
          </p>
          <div className="table-wrap wide">
            <table>
              <thead>
                <tr>
                  <th scope="col">GPA</th>
                  <th scope="col">General Interpretation</th>
                </tr>
              </thead>
              <tbody>
                {RANGES.map(([gpa, text]) => (
                  <tr key={gpa}>
                    <td>
                      <strong>{gpa}</strong>
                    </td>
                    <td>{text}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            These interpretations are approximate. Your university may use a
            different grading scale or have specific academic-standing
            requirements.
          </p>
        </section>

        <section aria-labelledby="multiple">
          <h2 id="multiple">Calculate Your GPA for Multiple Courses</h2>
          <p>
            When calculating GPA for multiple courses, include the academic
            score and semester credits for every course covered by the
            calculation. Use this process:
          </p>
          <ol>
            <li>
              Convert each course grade to its corresponding grade-point value.
            </li>
            <li>
              Multiply each grade-point value by the course's credit hours.
            </li>
            <li>Add the grade points for all courses.</li>
            <li>Add the course credits for all courses.</li>
            <li>Divide total grade points by total credit hours.</li>
          </ol>
          <p>
            If you want to calculate your GPA for several semesters, you
            generally need the cumulative quality points and cumulative GPA
            hours from those semesters. Do not simply average semester GPAs
            unless each semester has the same number of GPA-counted credit
            hours.
          </p>
          <p>
            Some institutions exclude courses such as pass/fail classes or apply
            special rules to repeated courses. Follow your institution's
            official policy for the most accurate cumulative GPA.
          </p>
        </section>
      </article>
    </main>
  );
}
export default SeoContent;
