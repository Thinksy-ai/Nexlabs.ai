import Link from "next/link";

export default function Home() {
  return (
    <div style={page}>

      <section style={hero}>
        <h1 style={title}>NexLabs.ai</h1>
        <p>AI • Apps • Websites • Design Studio</p>

        <div style={{ marginTop: 20 }}>
          <Link href="/lumina">
            <button>Explore Lumina</button>
          </Link>

          <Link href="/contact">
            <button className="btn-outline">Start Project</button>
          </Link>
        </div>
      </section>

      <section style={section}>
        <div style={grid}>
          <Card title="AI Systems" />
          <Card title="Web Development" />
          <Card title="App Development" />
          <Card title="Design Studio" />
        </div>
      </section>

    </div>
  );
}

function Card({ title }) {
  return (
    <div className="glow" style={{ padding: 30 }}>
      <h3>{title}</h3>
    </div>
  );
}

const page = { background:"#000", color:"#fff", paddingTop:80 };
const hero = { padding:"140px 60px" };
const title = { fontSize:70 };
const section = { padding:"80px 60px" };
const grid = { display:"grid", gap:20, gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))" };
