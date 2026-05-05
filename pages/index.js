import { useState } from "react";

export default function Home() {
  return (
    <div style={styles.app}>

      {/* SIDEBAR */}
      <div style={styles.sidebar}>
        <h2 style={{ marginBottom: 20 }}>NexLabs</h2>

        <NavItem label="Dashboard" />
        <NavItem label="Lumina" />
        <NavItem label="Services" />
        <NavItem label="Design" />
        <NavItem label="Contact" />

        <div style={{ marginTop: "auto" }}>
          <NavItem label="Logout" />
        </div>
      </div>

      {/* MAIN */}
      <div style={styles.main}>

        <h1 style={styles.title}>Welcome to NexLabs.ai</h1>

        <div style={styles.grid}>
          <Card title="Lumina AI" text="Your intelligent assistant" />
          <Card title="Web Development" text="Modern websites" />
          <Card title="App Development" text="Mobile solutions" />
          <Card title="Graphic Design" text="Brand visuals" />
        </div>

      </div>

    </div>
  );
}

/* COMPONENTS */

function NavItem({ label }) {
  return (
    <div style={styles.navItem}>
      {label}
    </div>
  );
}

function Card({ title, text }) {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <p style={{ opacity: 0.7 }}>{text}</p>
    </div>
  );
}

/* STYLES */

const styles = {
  app: {
    display: "flex",
    height: "100vh",
    background: "#000",
    color: "#fff",
    fontFamily: "Arial",
  },

  sidebar: {
    width: 260,
    background: "#0a0a0a",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    borderRight: "1px solid #111",
  },

  navItem: {
    padding: "12px 14px",
    borderRadius: 10,
    marginBottom: 10,
    cursor: "pointer",
    background: "#0f0f0f",
    border: "1px solid #111",
    transition: "0.2s",
  },

  main: {
    flex: 1,
    padding: 40,
  },

  title: {
    marginBottom: 30,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 20,
  },

  card: {
    padding: 20,
    borderRadius: 14,
    background: "#0f0f0f",
    border: "1px solid #111",
    transition: "0.2s",
  },
};
