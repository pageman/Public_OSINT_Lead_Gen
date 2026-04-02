import { readDashboard } from "../../../lib/ops-data";

export default function OpsDashboardPage() {
  const dashboard = readDashboard();

  return (
    <section className="section">
      <div className="card">
        <div className="eyebrow">Day 61-90</div>
        <p className="page-title">Pilot KPI dashboard</p>
        <p className="lede">
          Minimal internal reporting layer for pilot delivery. This is not an analytics warehouse.
        </p>
      </div>
      <div className="metric-grid" style={{ marginTop: 24 }}>
        {dashboard.metrics.map((metric) => (
          <article className="card" key={metric.id}>
            <div className="eyebrow">
              {metric.label} | {metric.trend}
            </div>
            <p className="metric-value">{metric.value}</p>
            <p className="muted">{metric.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
