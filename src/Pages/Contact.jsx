export default function Contact() {
  return (
    <section style={{ background: "var(--bg-main)", textAlign: "center" }}>
      <h2>Contact me</h2>
      <p>
        If you would like to get in touch, please reach out via any of the
        platforms below:
      </p>
      <br />
      <p>📍 Nairobi, Kenya</p>

      <div style={{ marginTop: "2rem" }}>
        <a
          href="https://wa.me/254787464851"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          💬 WhatsApp me
        </a>

        <a
          href="https://facebook.com/nyakio.wa.kinyanjui"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          📘 Facebook
        </a>

        <a href="tel:+254787464851" style={linkStyle}>
          📞 Call me via
        </a>
      </div>
    </section>
  );
}

const linkStyle = {
  display: "block",
  margin: "1rem auto",
  padding: "1rem",
  maxWidth: "300px",
  background: "var(--accent)",
  color: "white",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "bold",
};