import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "30px 20px",
        background: "#fff",
        color: "#18181b",
        textAlign: "center",
      }}
    >
      <img
  src="/404-car.png"
  alt="VahanXpert car repair"
  style={{
    width: "100%",
    maxWidth: "850px",
    height: "auto",
    display: "block",
    mixBlendMode: "multiply",
  }}
/>

      <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800 }}>
        This page does not exist
      </h1>

      <p style={{ color: "#71717a" }}>
        Sorry, the page you are looking for could not be found.
      </p>

      <Link
        href="/"
        style={{
          marginTop: "20px",
          padding: "14px 26px",
          background: "#242426",
          color: "#fff",
          borderRadius: "10px",
          textDecoration: "none",
          fontWeight: 600,
        }}
      >
        Back to Home
      </Link>
    </main>
  );
}