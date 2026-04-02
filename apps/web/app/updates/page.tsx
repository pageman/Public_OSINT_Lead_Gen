import { updates } from "../data";

export default function UpdatesPage() {
  return (
    <section className="section">
      <div className="card">
        <div className="eyebrow">Weekly updates</div>
        <p className="page-title">Operator-grade snapshots</p>
        <p className="lede">
          Each update should be readable in under three minutes and grounded in current, attributable evidence.
        </p>
      </div>
      <div className="update-grid" style={{ marginTop: 24 }}>
        {updates.map((update) => (
          <article className="card" key={update.slug}>
            <div className="eyebrow">{update.publishedAt}</div>
            <h3>{update.title}</h3>
            <p className="muted">{update.summary}</p>
            <ul className="list">
              {update.signals.map((signal) => (
                <li key={signal.id}>
                  {signal.label}: {signal.latestValue} ({signal.confidence})
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
