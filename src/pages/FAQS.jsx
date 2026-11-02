import React from "react";

export const FAQS = () => {
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
  return (
    <>
      <main className="faqs-page">
        {" "}
        <section className="hm-section faq" aria-labelledby="hm-faq">
          <div className="hm-head">
            <h2 id="hm-faq">Frequently asked questions</h2>
          </div>
          {FAQS.map((f) => (
            <details key={f.q} className="faq-item">
              <summary>
                <h3>{f.q}</h3>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </section>
      </main>
    </>
  );
};
