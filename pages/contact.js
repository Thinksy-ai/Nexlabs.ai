export default function Contact() {
  return (
    <div style={styles.body}>

      {/* NAV */}
      <div style={styles.nav}>
        <h2>NexLabs.ai</h2>

        <div>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/design">Design</a>
          <a href="/lumina">Lumina</a>
        </div>
      </div>

      {/* CONTENT */}
      <div style={styles.container}>
        <h1>Contact Us</h1>

        <p>
          Let’s build something powerful together. Tell us about your project.
        </p>

        <form style={styles.form}>
          <input style={styles.input} placeholder="Your Name" />
          <input style={styles.input} placeholder="Your Email" />
          <input style={styles.input} placeholder="Project Type (AI / Website / App / Design)" />
          <textarea style={styles.textarea} placeholder="Your Message" />

          <button style={styles.button} type="button">
            Send Message
          </button>
        </form>

        <p style={{ marginTop: 40, opacity: 0.7 }}>
          We usually respond within 24–48 hours.
        </p>
      </div>

    </div>
  );
}

const styles = {
  body: {
    background: "#000",
    color: "#fff",
    fontFamily: "Arial",
    margin: 0,
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: 20,
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  },

  container: {
    padding: 60,
    maxWidth: 800,
  },

  form: {
    marginTop: 20,
  },

  input: {
    display: "block",
    width: "100%",
    marginBottom: 15,
    padding: 10,
    background: "black",
    border: "1px solid white",
    color: "white",
  },

  textarea: {
    display: "block",
    width: "100%",
    height: 120,
    marginBottom: 15,
    padding: 10,
    background: "black",
    border: "1px solid white",
    color: "white",
  },

  button: {
    background: "transparent",
    border: "1px solid white",
    color: "white",
    padding: "10px 20px",
    cursor: "pointer",
  },
};
