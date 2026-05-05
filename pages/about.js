import { motion } from "framer-motion";
import Link from "next/link";
import Sidebar from "../components/Sidebar";

export default function About() {

  return (

    <div style={{ display: "flex" }}>

      <Sidebar />
export default function About() {
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
          About NexLabs
        </motion.h1>

        <p style={styles.subtitle}>
          We build intelligent digital systems that combine design, technology,
          and clarity.
        </p>
      </section>

      {/* STORY */}
      <section style={styles.section}>
        <div style={styles.split}>
          <div>
            <h2>Our Approach</h2>
            <p style={styles.text}>
              NexLabs is focused on creating clean, powerful and minimal digital
              systems. Every product is designed to be fast, precise, and easy to use.
            </p>
          </div>

          <div className="glow" style={styles.box}>
            <p>
              We don’t build clutter.  
              We build systems that work.
            </p>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section style={styles.section}>
        <h2 style={{ marginBottom: 30 }}>Principles</h2>

        <div style={styles.grid}>
          <Card title="Clarity" text="Simple and understandable systems." />
          <Card title="Performance" text="Fast, efficient, scalable builds." />
          <Card title="Minimalism" text="Only what matters, nothing extra." />
          <Card title="Precision" text="Every detail is intentional." />
        </div>
      </section>

      {/* CAPABILITIES */}
      <section style={styles.section}>
        <h2 style={{ marginBottom: 30 }}>What We Build</h2>

        <div style={styles.grid}>
          <Card title="AI Systems" text="Custom intelligent tools." />
          <Card title="Web Platforms" text="Modern high-performance sites." />
          <Card title="Applications" text="Mobile and web apps." />
          <Card title="Design Systems" text="Branding and UI/UX." />
        </div>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <h2>Let’s build something powerful</h2>

        <Link href="/contact">
          <button style={styles.button}>Start a Project</button>
        </Link>
      </section>

    </div>
  );
}

/* COMPONENT */

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

  split: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 40,
    alignItems: "center",
  },

  text: {
    marginTop: 10,
    maxWidth: 500,
  },

  box: {
    padding: 30,
    border: "1px solid #111",
    background: "#0a0a0a",
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
    cursor: "pointer",
  },
};
