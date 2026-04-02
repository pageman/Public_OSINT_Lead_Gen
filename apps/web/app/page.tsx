import Link from "next/link";
import { initialSources, leadRoutes } from "./data";
import { readFintechData } from "../lib/fintech-data";

export default function HomePage() {
  const fintech = readFintechData();

  return (
    <>
      <section className="hero">
        <div className="card">
          <div className="eyebrow">Public signal first</div>
          <h1>Fintech operations signal before the execution moat.</h1>
          <p className="lede">
            The primary runnable demo is now the fintech wedge: public cross-border operations signal, gated deeper-cut
            insight, lead capture, and a path to paid workflow execution.
          </p>
          <div className="cta-row">
            <Link className="button" href="/fintech">
              Open fintech demo
            </Link>
            <Link className="button-secondary" href="/insights">
              Open gated insights
            </Link>
          </div>
          <div className="pill-row">
            <span className="badge">Fintech wedge is primary</span>
            <span className="badge">Persisted JSON contract</span>
            <span className="badge">Lead capture route live</span>
          </div>
        </div>
        <div className="card">
          <div className="eyebrow">Current focus</div>
          <p className="page-title">{fintech.summary.title}</p>
          <p className="lede">
            {fintech.summary.takeaway}
          </p>
          <ul className="list">
            <li>Read two trusted public feeds through one stable contract.</li>
            <li>Render signal and updates directly from persisted JSON.</li>
            <li>Route lead capture into scoring and a production-ready webhook path.</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Signal Snapshot</h2>
        <div className="metric-grid">
          {fintech.signals.map((metric) => (
            <article className="card" key={metric.id}>
              <div className="eyebrow">{metric.label}</div>
              <p className="metric-value">{metric.latest_value}</p>
              <p className="muted">
                Direction: <strong>{metric.direction}</strong> | Confidence: <strong>{metric.confidence}</strong>
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>System Surfaces</h2>
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
          <article className="card">
            <h3>Nowcast</h3>
            <p className="muted">Live day 31-60 forward-looking signal.</p>
            <p>
              <a className="button-secondary" href="/qualification/nowcast">
                Open
              </a>
            </p>
          </article>
          <article className="card">
            <h3>Community signals</h3>
            <p className="muted">Submission and moderation loop for externally sourced signals.</p>
            <p>
              <a className="button-secondary" href="/qualification/community-signals">
                Open
              </a>
            </p>
          </article>
          <article className="card">
            <h3>Dashboard</h3>
            <p className="muted">Pilot KPI dashboard for the 61-90 delivery layer.</p>
            <p>
              <a className="button-secondary" href="/ops/dashboard">
                Open
              </a>
            </p>
          </article>
          <article className="card">
            <h3>Pricing</h3>
            <p className="muted">Live pricing architecture route for free, gated, and paid layers.</p>
            <p>
              <a className="button-secondary" href="/pricing">
                Open
              </a>
            </p>
          </article>
          <article className="card">
            <h3>Partner discovery</h3>
            <p className="muted">91-120 beta partner requirement capture flow.</p>
            <p>
              <a className="button-secondary" href="/partners/beta">
                Open
              </a>
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <h2>Initial Update Archive</h2>
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
        <h2>Tracked Source Classes</h2>
        <div className="source-grid">
          {fintech.sources.map((source) => (
            <article className="card" key={source.id}>
              <h3>{source.name}</h3>
              <p className="muted">{source.source_url}</p>
              <p>
                Reliability: <strong>{source.reliability}</strong>
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
