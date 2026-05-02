export default function About() {
  return (
    <div style={styles.body}>

      {/* NAV */}
      <div style={styles.nav}>
        <h2>NexLabs.ai</h2>

        <div>
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/design">Design</a>
          <a href="/lumina">Lumina</a>
          <a href="/contact">Contact</a>
        </div>
      </div>

      {/* CONTENT */}
      <div style={styles.container}>
        <h1>About NexLabs.ai</h1>

        <p>
          NexLabs.ai is a creative technology studio focused on building
          intelligent digital products, modern websites, mobile apps, and
          graphic design systems.
        </p>

        <h2>Our Vision</h2>
        <p>
          To build simple, powerful, and intelligent technology that helps
          individuals and businesses grow.
        </p>

        <h2>What We Do</h2>
        <ul>
          <li>AI Development</li>
          <li>Website Development</li>
          <li>Mobile App Development</li>
          <li>Graphic Design</li>
        </ul>
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
};
