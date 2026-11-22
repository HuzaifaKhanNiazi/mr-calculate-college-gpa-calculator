const EMAIL = "support@mr-calculate.com";

export default function ContactUs() {
  return (
    <section className="contact-page" aria-labelledby="contact-title">
      <h1 id="contact-title">Contact Us</h1>
      <p className="contact-intro">
        Have a question, feedback or an idea for a new calculator? Send us an
        email and we will get back to you as soon as we can.
      </p>

      <div className="contact-box">
        <p className="contact-label">Email</p>
        <a className="contact-email" href={`mailto:${EMAIL}`}>
          {EMAIL}
        </a>
        <p className="contact-note">
          To help us reply faster, please mention the calculator you are using
          and what you were trying to do.
        </p>
      </div>
    </section>
  );
}
