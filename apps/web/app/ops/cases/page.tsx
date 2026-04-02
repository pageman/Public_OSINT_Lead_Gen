import { readCasesData } from "../../../lib/cases-data";

export default function OpsCasesPage() {
  const contract = readCasesData();

  return (
    <section className="section">
      <div className="card">
        <div className="eyebrow">Internal ops</div>
        <p className="page-title">Minimal case queue</p>
        <p className="lede">
          This is the smallest useful internal layer behind the public signal and pilot intake flow.
        </p>
      </div>

      <div className="update-grid" style={{ marginTop: 24 }}>
        {contract.cases.map((item) => (
          <article className="card" key={item.id}>
            <div className="eyebrow">
              {item.status} | {item.priority}
            </div>
            <h3>{item.company}</h3>
            <p className="muted">{item.pain}</p>
            <p>
              Wedge: <strong>{item.wedge}</strong>
            </p>
            <p>
              Next step: <strong>{item.next_step}</strong>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
