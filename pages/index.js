export default function Home() {
  return (
    <div style={styles.body}>

      {/* NAV */}
      <div style={styles.nav}>
        <h2>NexLabs.ai</h2>

        <div>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/design">Design</a>
          <a href="/lumina">Lumina</a>
          <a href="/contact">Contact</a>
        </div>
      </div>

      {/* HERO */}
      <div style={styles.hero}>
        <h1 style={{ fontSize: 60 }}>NexLabs.ai</h1>
        <p>AI • Apps • Websites • Graphic Design Studio</p>

        <a href="/lumina">
          <button>Explore Lumina.ai</button>
        </a>

        <a href="/services">
          <button style={{ marginLeft: 10 }}>Our Services</button>
        </a>
      </div>

      {/* SERVICES PREVIEW */}
      <div style={styles.section}>
        <h2>What We Do</h2>
        <p>AI Development • Websites • Apps • Graphic Design</p>
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

  hero: {
    textAlign: "center",
    padding: "120px 20px",
  },

  section: {
    padding: 60,
  },
};
