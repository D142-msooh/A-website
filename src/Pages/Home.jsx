import heroBg from "../assets/backgrounds/hero-bg.jpg";

export default function Home() {
  return (
    <section
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.45)",
          padding: "3rem",
          borderRadius: "12px",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "3rem" }}>Irene</h1>
        <p style={{ fontSize: "1.2rem" }}>
          Creative Graphic Designer
        </p>
      </div>
    </section>
  );
}