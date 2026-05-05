import { motion } from "framer-motion";

export default function Services() {
  return (
    <div style={styles.page}>

      {/* HERO */}
      <section style={styles.hero}>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={styles.title}
        >
          Services
        </motion.h1>

        <p style={styles.subtitle}>
          We build powerful digital systems with precision and clarity.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section style={styles.section}>
        <div style={styles.grid}>
          <Card title="AI Development" text="Custom AI tools and systems." />
          <Card title="Web Development" text="Fast, modern websites." />
          <Card title="App Development" text="Mobile-first applications." />
          <Card title="Automation" text="Workflows that save time." />
        </div>
      </section>

      {/* PROCESS */}
      <section style={styles.section}>
        <h2 style={{ marginBottom: 30 }}>Process</h2>

        <div style={styles.grid}>
          <Step num="01" title="Understand" />
          <Step num="02" title="Build" />
          <Step num="03" title="Launch" />
        </div>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <h2>Start your project with NexLabs</h2>
        <button style={styles.button}>Contact Us</button>
      </section>

    </div>
  );
}

/* COMPONENTS */

function Card({ title, text }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      style={styles.card}
    >
      <h3>{title}</h3>
      <p style={{ marginTop: 10 }}>{text}</p>
    </motion.div>
  );
}

function Step({ num, title }) {
  return (
    <div style={styles.step}>
      <h1>{num}</h1>
      <p>{title}</p>
    </div>
  );
}

/* STYLES */

const styles = {
  page: {
    background: "#000",
    color: "#fff",
  },

  hero: {
    padding: "160px 60px 80px",
  },

  title: {
    fontSize: 64,
  },

  subtitle: {
    marginTop: 10,
    maxWidth: 500,
  },

  section: {
    padding: "80px 60px",
  },

  grid: {
    display: "grid",
    gap: 20,
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  },

  card: {
    padding: 30,
    background: "#0a0a0a",
    border: "1px solid #111",
  },

  step: {
    padding: 30,
    border: "1px solid #111",
  },

  cta: {
    padding: "120px 60px",
    textAlign: "center",
    borderTop: "1px solid #111",
  },

  button: {
    marginTop: 20,
    padding: "12px 22px",
    background: "#fff",
    color: "#000",
    border: "none",
  },
};
