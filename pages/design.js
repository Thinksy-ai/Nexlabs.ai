export default function Design() {
  return (
    <div style={styles.body}>

      {/* NAV */}
      <div style={styles.nav}>
        <h2>NexLabs.ai</h2>

        <div>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/lumina">Lumina</a>
          <a href="/contact">Contact</a>
        </div>
      </div>

      {/* CONTENT */}
      <div style={styles.container}>
        <h1>Graphic Design</h1>

        <p>
          We design modern, clean, and powerful visuals for brands and businesses.
        </p>

        <div style={styles.card}>
          <h2>Logo Design</h2>
          <p>Minimal, modern logos that represent your brand identity.</p>
        </div>

        <div style={styles.card}>
          <h2>Brand Identity</h2>
          <p>Complete visual systems including colors, fonts, and style guides.</p>
        </div>

        <div style={styles.card}>
          <h2>Posters & Ads</h2>
          <p>High-impact marketing designs for social media and campaigns.</p>
        </div>

        <div style={styles.card}>
          <h2>UI/UX Design</h2>
          <p>Clean app and website interfaces that feel modern and smooth.</p>
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
};
