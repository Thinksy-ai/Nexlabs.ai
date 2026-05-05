import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={nav}>
      <h2>NexLabs</h2>

      <div style={links}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/design">Design</Link>
        <Link href="/lumina">Lumina</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}

const nav = {
  position: "fixed",
  top: 0,
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  padding: "20px 60px",
  backdropFilter: "blur(10px)",
  borderBottom: "1px solid #111",
  background: "rgba(0,0,0,0.6)",
  zIndex: 100,
};

const links = {
  display: "flex",
  gap: 25,
};
