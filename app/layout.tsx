
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
        <nav className="glass app-header">
          <div className="header-brand">
            {/* Logo placeholder */}
            <div className="header-logo"></div>
            <h1 className="header-title">CryptoTracker</h1>
          </div>
          <div>
            <span className="header-subtitle">Real-Time Market Data</span>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
