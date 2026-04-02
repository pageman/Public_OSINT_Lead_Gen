export default function PartnerScorecardPage() {
  const criteria = [
    "Inbound demand quality",
    "Pilot conversion quality",
    "Repeatability of the signal",
    "Clarity of the execution offer",
    "Operational burden to support expansion"
  ];

  return (
    <section className="section">
      <div className="card">
        <div className="eyebrow">Expansion scorecard</div>
        <p className="page-title">Deepen or expand</p>
        <p className="lede">Visible route for the 91-120 expansion decision framework.</p>
        <ul className="list">
          {criteria.map((criterion) => (
            <li key={criterion}>{criterion}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
