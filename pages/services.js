export default function Services() {
  return (
    <div style={styles.body}>

      {/* NAV */}
      <div style={styles.nav}>
        <h2>NexLabs.ai</h2>

        <div>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/design">Design</a>
          <a href="/lumina">Lumina</a>
          <a href="/contact">Contact</a>
        </div>
      </div>

      {/* CONTENT */}
      <div style={styles.container}>
        <h1>Our Services</h1>
        <p>We build modern digital solutions for ideas, businesses, and brands.</p>

        <div style={styles.card}>
          <h2>AI Development</h2>
          <p>Custom AI tools, assistants, and automation systems for productivity.</p>
        </div>

        <div style={styles.card}>
          <h2>Website Development</h2>
          <p>Fast, modern, responsive websites for startups and businesses.</p>
        </div>

        <div style={styles.card}>
          <h2>Mobile App Development</h2>
          <p>Android and iOS apps with clean UI and smooth performance.</p>
        </div>

        <div style={styles.card}>
          <h2>Graphic Design</h2>
          <p>Logos, branding, posters, ads, and social media creatives.</p>
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
