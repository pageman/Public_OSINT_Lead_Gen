export default function PlatformApiPage() {
  const endpoints = [
    { path: "/api/signals/latest", purpose: "Latest fintech signal contract" },
    { path: "/api/cases", purpose: "Current internal case queue" },
    { path: "/api/lead-capture", purpose: "Lead capture submission endpoint" },
    { path: "/api/pilot-intake", purpose: "Pilot intake submission endpoint" },
    { path: "/api/community-signals", purpose: "Community signal intake and queue view" }
  ];

  return (
    <section className="section">
      <div className="card">
        <div className="eyebrow">Day 91-120</div>
        <p className="page-title">Internal API surface</p>
        <p className="lede">Internal-first JSON endpoints that reflect the current product and ops model.</p>
      </div>
      <div className="update-grid" style={{ marginTop: 24 }}>
        {endpoints.map((endpoint) => (
          <article className="card" key={endpoint.path}>
            <h3>{endpoint.path}</h3>
            <p className="muted">{endpoint.purpose}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
