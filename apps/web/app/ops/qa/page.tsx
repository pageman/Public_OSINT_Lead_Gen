import { readOperationalQa } from "../../../lib/ops-data";

export default function OpsQaPage() {
  const contract = readOperationalQa();

  return (
    <section className="section">
      <div className="card">
        <div className="eyebrow">Operational QA</div>
        <p className="page-title">System integrity checks</p>
        <p className="lede">This is the visible operational QA layer for the 91-120 standardization phase.</p>
      </div>
      <div className="update-grid" style={{ marginTop: 24 }}>
        {contract.checks.map((check) => (
          <article className="card" key={check.name}>
            <div className="eyebrow">{check.status}</div>
            <h3>{check.name}</h3>
            <p className="muted">{check.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
