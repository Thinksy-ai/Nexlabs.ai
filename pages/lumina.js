export default function Lumina() {
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
          <a href="/contact">Contact</a>
        </div>
      </div>

      {/* HERO */}
      <div style={styles.container}>
        <h1>Lumina.ai</h1>

        <p>
          Your intelligent assistant for writing, ideas, learning, and productivity.
        </p>

        <button style={styles.button}>Launch Lumina</button>

        {/* FEATURES */}
        <div style={styles.card}>
          <h2>Smart Chat</h2>
          <p>Ask anything and get instant intelligent responses.</p>
        </div>

        <div style={styles.card}>
          <h2>Creative Writing</h2>
          <p>Generate ideas, stories, emails, and content instantly.</p>
        </div>

        <div style={styles.card}>
          <h2>Productivity Tools</h2>
          <p>Helps you think faster, plan better, and work smarter.</p>
        </div>
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
    maxWidth: 900,
  },

  card: {
    border: "1px solid rgba(255,255,255,0.2)",
    padding: 20,
    marginTop: 20,
  },

  button: {
    background: "transparent",
    border: "1px solid white",
    color: "white",
    padding: "10px 20px",
    marginTop: 20,
    cursor: "pointer",
  },
};
