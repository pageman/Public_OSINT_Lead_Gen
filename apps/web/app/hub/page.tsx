import { initialSources, metrics } from "../data";

export default function HubPage() {
  return (
    <section className="section">
      <div className="card">
        <div className="eyebrow">Public hub</div>
        <p className="page-title">Corridor signal for operators</p>
        <p className="lede">
          This page is the public-facing OSINT surface. It should stay short, current, and evidence-linked.
        </p>
      </div>
      <div className="metric-grid" style={{ marginTop: 24 }}>
        {metrics.map((metric) => (
          <article className="card" key={metric.id}>
            <h3>{metric.label}</h3>
            <p className="metric-value">{metric.latestValue}</p>
            <p className="muted">Confidence: {metric.confidence}</p>
          </article>
        ))}
      </div>
      <div className="source-grid" style={{ marginTop: 24 }}>
        {initialSources.map((source) => (
          <article className="card" key={source.id}>
            <h3>{source.name}</h3>
            <p className="muted">{source.summary}</p>
            <p>{source.type}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
