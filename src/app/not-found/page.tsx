import Link from 'next/link';

export default function CustomNotFoundPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#ffffff',
        color: '#18181b',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '30px 20px',
        textAlign: 'center',
      }}
    >
      <img
        src="/404-car.jpeg"
        alt="VahanXpert car repair"
        style={{
          width: '100%',
          maxWidth: '850px',
          height: 'auto',
          objectFit: 'contain',
        }}
      />

      <h1 style={{ fontSize: '36px', fontWeight: 800, margin: '20px 0 10px' }}>
        This page does not exist
      </h1>

      <p style={{ color: '#71717a', marginBottom: '25px' }}>
        Sorry, we couldn&apos;t find the page you are looking for.
      </p>

      <Link
        href="/"
        style={{
          background: '#242426',
          color: '#ffffff',
          padding: '14px 26px',
          borderRadius: '10px',
          textDecoration: 'none',
          fontWeight: 600,
        }}
      >
        Back to Home
      </Link>
    </main>
  );
}