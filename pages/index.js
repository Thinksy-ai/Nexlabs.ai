export default function Home() {
  return (
    <div>
      <nav style={nav}>
        <h2>NexLabs.ai</h2>
        <div style={{ display: "flex", gap: 20 }}>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/design">Design</a>
          <a href="/lumina">Lumina</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>

      <section style={hero}>
        <h1 style={{ fontSize: 70 }}>NexLabs.ai</h1>
        <p>AI • Apps • Websites • Graphic Design Studio</p>

        <button>Explore Lumina</button>
        <button style={{ marginLeft: 10 }}>Start Project</button>
      </section>

      <section style={section}>
        <h2>We build modern digital systems</h2>
        <p>Clean. Minimal. Powerful. Black & White only.</p>
      </section>
    </div>
  );
}

const nav = {
  display: "flex",
  justifyContent: "space-between",
  padding: 20,
  borderBottom: "1px solid #222"
};

const hero = {
  padding: "120px 60px"
};

const section = {
  padding: 60,
  borderTop: "1px solid #222"
};
