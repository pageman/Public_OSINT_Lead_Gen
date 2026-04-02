import { leadRoutes } from "../data";

export default function ContactPage() {
  return (
    <section className="section">
      <div className="card">
        <div className="eyebrow">Lead capture</div>
        <p className="page-title">Turn public signal into execution</p>
        <p className="lede">
          Day 0-30 uses direct contact routes. A richer gated workflow and CRM segmentation layer belongs in day 31-60.
        </p>
      </div>
      <div className="route-grid" style={{ marginTop: 24 }}>
        {leadRoutes.map((route) => (
          <article className="card" key={route.label}>
            <h3>{route.label}</h3>
            <p className="muted">{route.description}</p>
            <p>
              <a className="button" href={route.href}>
                Open route
              </a>
            </p>
          </article>
        ))}
        <article className="card">
          <h3>Pilot intake</h3>
          <p className="muted">Use this when the public signal has already exposed a real workflow bottleneck.</p>
          <p>
            <a className="button" href="/pilot-intake">
              Open pilot intake
            </a>
          </p>
        </article>
      </div>
    </section>
  );
}
