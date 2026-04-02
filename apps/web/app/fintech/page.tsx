import Link from "next/link";
import { readFintechData } from "../../lib/fintech-data";

export default function FintechPage() {
  const fintech = readFintechData();

  return (
    <>
      <section className="hero">
        <div className="card">
          <div className="eyebrow">Fintech alpha</div>
          <h1>Cross-border payments operations pulse.</h1>
          <p className="lede">
            A public signal layer for payments ops, compliance ops, and risk operations teams managing corridor
            instability, sanctions churn, payout brittleness, and reconciliation backlog.
          </p>
          <div className="cta-row">
            <Link className="button" href="/insights">
              Open gated insights
            </Link>
            <Link className="button-secondary" href="/contact">
              Book operations briefing
            </Link>
            <a
              className="button-secondary"
              href="https://github.com/pageman/Public_OSINT_Lead_Gen/tree/main/docs/fintech-alpha"
              target="_blank"
              rel="noreferrer"
            >
              Open fintech docs
            </a>
          </div>
        </div>
        <div className="card">
          <div className="eyebrow">Alpha thesis</div>
          <p className="lede">
            The best early signal is not generic fintech news. It is operational evidence showing which corridors,
            partners, and workflow queues are getting more brittle before support pain or customer-visible outages
            become obvious.
          </p>
          <ul className="list">
            <li>Compliance notice density is a leading indicator.</li>
            <li>Corridor-level payout fragmentation matters more than headline uptime.</li>
            <li>Fraud and compliance often collide in one hidden manual queue.</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Fintech Signal Snapshot</h2>
        <div className="metric-grid">
          {fintech.signals.map((metric) => (
            <article className="card" key={metric.id}>
              <div className="eyebrow">{metric.label}</div>
              <p className="metric-value">{metric.latest_value}</p>
              <p className="muted">
                Direction: <strong>{metric.direction}</strong> | Confidence: <strong>{metric.confidence}</strong>
              </p>
              <ul className="list">
                {metric.evidence.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>First Three Updates</h2>
        <div className="update-grid">
          {fintech.updates.map((update) => (
            <article className="card" key={update.slug}>
              <div className="eyebrow">{update.publishedAt}</div>
              <h3>{update.title}</h3>
              <p className="muted">{update.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Trusted Public Sources</h2>
        <div className="source-grid">
          {fintech.sources.map((source) => (
            <article className="card" key={source.id}>
              <h3>{source.name}</h3>
              <p className="muted">{source.source_url}</p>
              <p>Reliability: {source.reliability}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
