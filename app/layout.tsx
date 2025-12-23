
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Crypto Tracker',
  description: 'Real-time cryptocurrency dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="glass" style={{ margin: '1rem', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {/* Logo placeholder */}
            <div style={{ width: 32, height: 32, background: 'linear-gradient(45deg, var(--primary), var(--succeed))', borderRadius: '50%' }}></div>
            <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold' }}>CryptoTracker</h1>
          </div>
          <div>
            <span className="text-secondary" style={{ fontSize: '0.9rem' }}>Real-Time Market Data</span>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
