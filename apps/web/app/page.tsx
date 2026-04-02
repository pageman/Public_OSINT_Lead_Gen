import Link from "next/link";
import { initialSources, leadRoutes, metrics, updates } from "./data";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="card">
          <div className="eyebrow">Public signal first</div>
          <h1>Build the OSINT hub before the execution moat.</h1>
          <p className="lede">
            This repo implements the first 120 days of an OSINT-led growth system: public corridor signal,
            gated deeper-cut insight, paid exception-handling workflows, and later API expansion.
          </p>
          <div className="cta-row">
            <Link className="button" href="/hub">
              Open the hub
            </Link>
            <Link className="button-secondary" href="/updates">
              Review updates
            </Link>
          </div>
          <div className="pill-row">
            <span className="badge">Day 0-30 in progress</span>
            <span className="badge">One crisis wedge</span>
            <span className="badge">Manual editorial review</span>
          </div>
        </div>
        <div className="card">
          <div className="eyebrow">Current focus</div>
          <p className="page-title">Hormuz operations risk</p>
          <p className="lede">
            Narrow scope on one crisis, one buyer, and one repeatable update loop. Avoid premature APIs,
            warehouses, and ML infrastructure.
          </p>
          <ul className="list">
            <li>Publish three operator-grade updates fast.</li>
            <li>Stand up ingestion for high-value public sources.</li>
            <li>Capture inbound demand with a direct CTA.</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Signal Snapshot</h2>
        <div className="metric-grid">
          {metrics.map((metric) => (
            <article className="card" key={metric.id}>
              <div className="eyebrow">{metric.label}</div>
              <p className="metric-value">{metric.latestValue}</p>
              <p className="muted">
                Direction: <strong>{metric.direction}</strong> | Confidence: <strong>{metric.confidence}</strong>
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Day 0-30 Build Surfaces</h2>
        <div className="route-grid">
          {leadRoutes.map((route) => (
            <article className="card" key={route.label}>
              <h3>{route.label}</h3>
              <p className="muted">{route.description}</p>
              <p>
                <a className="button-secondary" href={route.href}>
                  Open
                </a>
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Initial Update Archive</h2>
        <div className="update-grid">
          {updates.map((update) => (
            <article className="card" key={update.slug}>
              <div className="eyebrow">{update.publishedAt}</div>
              <h3>{update.title}</h3>
              <p className="muted">{update.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Tracked Source Classes</h2>
        <div className="source-grid">
          {initialSources.map((source) => (
            <article className="card" key={source.id}>
              <h3>{source.name}</h3>
              <p className="muted">{source.summary}</p>
              <p>
                Reliability: <strong>{source.reliability}</strong> | Cadence: <strong>{source.cadence}</strong>
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
