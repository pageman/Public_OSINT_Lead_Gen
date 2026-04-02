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
              <span className="nav-group">
                <Link href="/fintech">Fintech</Link>
                <Link href="/updates">Updates</Link>
                <Link href="/explain">Explainer</Link>
              </span>
              <span className="nav-group">
                <Link href="/insights">Insights</Link>
                <Link href="/qualification/nowcast">Nowcast</Link>
                <Link href="/qualification/community-signals">Signals</Link>
                <Link href="/qualification/nurture">Nurture</Link>
              </span>
              <span className="nav-group">
                <Link href="/pilot-intake">Pilot</Link>
                <Link href="/ops/cases">Cases</Link>
                <Link href="/ops/dashboard">Dashboard</Link>
                <Link href="/ops/onboarding">Onboarding</Link>
              </span>
              <span className="nav-group">
                <Link href="/pricing">Pricing</Link>
                <Link href="/partners/beta">Partners</Link>
                <Link href="/partners/scorecard">Scorecard</Link>
                <Link href="/platform/api">API</Link>
                <Link href="/ops/qa">QA</Link>
              </span>
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
