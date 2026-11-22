export const SITE = "https://mr-calculate.com"; // My domain

const webApp = (name, path, description) => ({
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name,
  url: SITE + path,
  description,
  applicationCategory: "EducationalApplication",
  operatingSystem: "Any",
  browserRequirements: "Requires JavaScript",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
});

export const PAGES = [
  {
    path: "/",
    title: "Free Online Calculators | Mr Calculate",
    description:
      "Mr Calculate offers free online calculators, including a college GPA calculator,percentage calculator and many more. Fast, simple and accurate.",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Mr Calculate",
        url: SITE + "/",
      },
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Mr Calculate",
        url: SITE + "/",
      },
    ],
  },
  {
    path: "/college-gpa-calculator",
    title: "College GPA Calculator – Calculate GPA with Credit Hours",
    description:
      "Use our free College GPA Calculator to calculate your college GPA easily. Enter your grades and credit hours to calculate your college gpa instantly on a 4.0 scale.",
    schema: [
      webApp(
        "College GPA Calculator",
        "/college-gpa-calculator",
        "Free college GPA calculator with credit hours on a 4.0 scale.",
      ),
    ],
  },
  {
    path: "/about-us",
    title: "About Us | Mr Calculate",
    description:
      "Learn about Mr Calculate, a free collection of simple and accurate online calculators for students and everyday use.",
  },
  {
    path: "/faqs",
    title: "FAQs | Mr Calculate",
    description:
      "Answers to common questions about Mr Calculate, GPA calculation and credit hours.",
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy | Mr Calculate",
    description:
      "Read the Mr Calculate Privacy Policy to learn what information we collect, how we use cookies and how we protect your data.",
  },
  {
    path: "/terms-of-use",
    title: "Terms of Use | Mr Calculate",
    description:
      "Read the Terms of Use for Mr Calculate, including website use, calculator accuracy, intellectual property and limitation of liability.",
  },
  {
    path: "/contact-us",
    title: "Contact Us | Mr Calculate",
    description:
      "Contact Mr Calculate by email with your questions, feedback or ideas for new calculators.",
  },
];

export const NOT_FOUND = {
  title: "Page Not Found | Mr Calculate",
  description: "The page you requested could not be found.",
};
