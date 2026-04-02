import { readNowcast } from "../../../lib/ops-data";

export default function QualificationNowcastPage() {
  const nowcast = readNowcast();

  return (
    <section className="section">
      <div className="card">
        <div className="eyebrow">Day 31-60</div>
        <p className="page-title">7-day nowcast</p>
        <p className="lede">
          Lightweight, explainable forward-looking signal intended for operators, not a heavy ML system.
        </p>
      </div>
      <div className="update-grid" style={{ marginTop: 24 }}>
        {nowcast.items.map((item) => (
          <article className="card" key={item.id}>
            <div className="eyebrow">
              {item.outlook} | {item.confidence}
            </div>
            <h3>{item.signal}</h3>
            <ul className="list">
              {item.evidence.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
            <p>
              Operator action: <strong>{item.operator_action}</strong>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
