import "./globals.css";
import Link from "next/link";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="shell">
          <header className="nav">
            <Link href="/">
              <strong>OSINT Lead Gen</strong>
            </Link>
            <nav className="nav-links">
              <Link href="/hub">Hub</Link>
              <Link href="/fintech">Fintech</Link>
              <Link href="/updates">Updates</Link>
              <Link href="/insights">Insights</Link>
              <Link href="/pilot-intake">Pilot</Link>
              <Link href="/ops/cases">Cases</Link>
              <Link href="/explain">Explainer</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </header>
          {children}
          <footer className="footer">
            Day 0-30 build: public signal, weekly updates, lead capture, and ingestion foundations.
          </footer>
        </div>
      </body>
    </html>
  );
}
