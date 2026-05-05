import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div style={styles.page}>

      {/* CURSOR GLOW */}
      <div
        style={{
          position: "fixed",
          width: 140,
          height: 140,
          background: "radial-gradient(circle, rgba(255,255,255,0.12), transparent)",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          left: pos.x,
          top: pos.y,
          zIndex: 999,
        }}
      />

      {/* BACKGROUND LINES */}
      <div style={styles.bgLines} />

      {/* NAVBAR */}
      <nav style={styles.nav}>
        <h2>NexLabs</h2>

        <div style={styles.navLinks}>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/design">Design</Link>
          <Link href="/lumina">Lumina</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>

      {/* HERO */}
      <section style={styles.hero}>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={styles.title}
        >
          NexLabs.ai
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={styles.subtitle}
        >
          Building intelligent systems for the future.
        </motion.p>

        <div style={{ marginTop: 30 }}>
          <Link href="/lumina">
            <button style={styles.button}>Explore Lumina</button>
          </Link>

          <Link href="/contact">
            <button style={styles.outline}>Start Project</button>
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section style={styles.section}>
        <Card title="AI Systems" text="Advanced intelligent tools" />
        <Card title="Web Development" text="Modern fast websites" />
        <Card title="App Development" text="Mobile-first solutions" />
        <Card title="Design Studio" text="Clean visual identity" />
      </section>

      {/* PROCESS */}
      <section style={styles.section}>
        <h2 style={{ marginBottom: 40 }}>How We Work</h2>

        <div style={styles.grid}>
          <Card title="1. Idea" text="Understand your vision" />
          <Card title="2. Build" text="Develop with precision" />
          <Card title="3. Launch" text="Deliver high-quality product" />
        </div>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <h2>Build your next system with NexLabs</h2>
        <Link href="/contact">
          <button style={styles.button}>Get Started</button>
        </Link>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p>© 2026 NexLabs.ai</p>
      </footer>

    </div>
  );
}

/* CARD COMPONENT */
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
    fontFamily: "-apple-system, Arial",
    overflowX: "hidden",
  },

  nav: {
    position: "fixed",
    top: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 60px",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid #111",
    zIndex: 100,
  },

  navLinks: {
    display: "flex",
    gap: 25,
  },

  bgLines: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background:
      "repeating-linear-gradient(90deg, #111 0px, #111 1px, transparent 1px, transparent 100px)",
    opacity: 0.15,
    zIndex: 0,
  },

  hero: {
    padding: "180px 60px 120px",
  },

  title: {
    fontSize: 72,
    letterSpacing: -2,
  },

  subtitle: {
    marginTop: 15,
    fontSize: 18,
  },

  button: {
    background: "#fff",
    color: "#000",
    border: "none",
    padding: "12px 22px",
    marginRight: 10,
    cursor: "pointer",
  },

  outline: {
    border: "1px solid #fff",
    background: "transparent",
    color: "#fff",
    padding: "12px 22px",
    cursor: "pointer",
  },

  section: {
    padding: "80px 60px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 20,
  },

  card: {
    padding: 25,
    background: "#0a0a0a",
    border: "1px solid #111",
    transition: "0.3s",
  },

  cta: {
    padding: "120px 60px",
    textAlign: "center",
    borderTop: "1px solid #111",
  },

  footer: {
    padding: 40,
    textAlign: "center",
    borderTop: "1px solid #111",
  },
};
