import useSeo from "../useSeo.js";

const SECTIONS = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    blocks: [
      "Mr Calculate may collect certain information automatically when you visit our website, including:",
      [
        "IP address",
        "Browser type and version",
        "Device information",
        "Pages visited on our website",
        "Date and time of your visit",
        "Referring website or source",
      ],
      "We may also collect information that you voluntarily provide when contacting us through email or other communication methods.",
    ],
  },
  {
    id: "how-we-use-information",
    title: "2. How We Use Your Information",
    blocks: [
      "We may use collected information to:",
      [
        "Operate and maintain our website.",
        "Improve our calculators and user experience.",
        "Understand how visitors use our website.",
        "Monitor website performance and troubleshoot technical issues.",
        "Respond to user questions and feedback.",
        "Maintain website security and prevent misuse.",
      ],
    ],
  },
  {
    id: "cookies",
    title: "3. Cookies and Tracking Technologies",
    blocks: [
      "Mr Calculate may use cookies and similar technologies to improve website functionality and understand visitor activity.",
      "Cookies are small text files stored on your device that help websites remember information about your visit.",
      "We may use cookies for:",
      [
        "Website functionality.",
        "Website traffic analysis.",
        "Advertising and performance measurement.",
        "Remembering user preferences.",
      ],
      "You can manage or disable cookies through your browser settings. However, disabling certain cookies may affect some website features.",
    ],
  },

  /* ===== DRAFT: sirf tab rakhein jab aap AdSense / Analytics use karte hain =====
  {
    id: "advertising",
    title: "4. Advertising and Third-Party Services",
    blocks: [
      "We may use third-party advertising services, including Google AdSense, to show ads on our website. Third-party vendors, including Google, use cookies to serve ads based on a user's previous visits to this and other websites.",
      "You can opt out of personalized advertising by visiting Google Ads Settings or www.aboutads.info.",
    ],
  },
  */

  {
    id: "calculator-data",
    title: "4. Calculator Data on Your Device",
    blocks: [
      "Values you enter into our calculators, such as course names, grades and credit hours, are saved in your browser's local storage on your own device so they are available when you return. This information is not sent to servers.",
      "You can remove this data at any time by clearing your browser's site data.",
    ],
  },
  {
    id: "how-we-protect",
    title: "5. How We Protect Your Information",
    blocks: [
      "We take reasonable measures to protect information collected through our website against unauthorized access, misuse, alteration, or disclosure.",
      "However, no method of online transmission or electronic storage is completely secure. Therefore, we cannot guarantee absolute security.",
    ],
  },
  {
    id: "third-party-websites",
    title: "6. Third-Party Websites",
    blocks: [
      "Our website may contain links to external websites and services.",
      "We are not responsible for the privacy policies, content, or practices of third-party websites.",
      "We encourage visitors to review the privacy policies of any external websites they visit.",
    ],
  },
  {
    id: "childrens-privacy",
    title: "7. Children's Privacy",
    blocks: [
      "Mr Calculate does not knowingly collect personal information from children without appropriate consent where required by applicable law.",
      // "If you believe that a child has provided personal information to us, please contact us so that we can take appropriate action.",
    ],
  },
  //   {
  //     id: "your-rights",
  //     title: "8. Your Privacy Rights and Choices",
  //     blocks: [
  //       "Depending on your location and applicable privacy laws, you may have the right to:",
  //       [
  //         "Request access to your personal information.",
  //         "Request correction or deletion of your information.",
  //         "Withdraw consent where processing is based on consent.",
  //         "Manage cookies through your browser settings.",
  //         "Opt out of personalized advertising.",
  //       ],
  //       "To make a privacy-related request, please contact us using the email address in the Contact Us section below.",
  //     ],
  //   },
  {
    id: "policy-changes",
    title: "9. Changes to This Privacy Policy",
    blocks: [
      "We may update this Privacy Policy from time to time to reflect changes in our website, services, or applicable laws.",
      "Any updates will be published on this page with a revised Last Updated date.",
      "We encourage visitors to review this page periodically.",
    ],
  },
];

export default function PrivacyPolicy() {
  useSeo({
    title: "Privacy Policy | Mr Calculate",
    description:
      "Read the Mr Calculate Privacy Policy to learn what information we collect, how we use cookies and how we protect your data.",
  });

  return (
    <main>
      <article className="legal-page">
        <h1>Privacy Policy</h1>
        <p className="legal-date">Last Updated: November 4, 2026</p>

        <p>
          Welcome to <strong>Mr Calculate</strong>. Your privacy is important to
          us. This Privacy Policy explains how we collect, use and protect
          information when you visit or use our website.The Personal Information
          that we collect is used for providing and improving the Service. We
          will not use or share your information with anyone except as described
          in this Privacy Policy.
        </p>
        <p>
          By using Mr Calculate, you agree to the practices described in this
          Privacy Policy.
        </p>

        {SECTIONS.map((s) => (
          <section key={s.id} aria-labelledby={s.id}>
            <h2 id={s.id}>{s.title}</h2>
            {s.blocks.map((b, i) =>
              Array.isArray(b) ? (
                <ul key={i}>
                  {b.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              ) : (
                <p key={i}>{b}</p>
              ),
            )}
          </section>
        ))}
      </article>
    </main>
  );
}
