export default function OpsSopPage() {
  const sops = [
    "Signal refresh",
    "Weekly publish",
    "Lead triage",
    "Pilot intake review",
    "Case queue update"
  ];

  return (
    <section className="section">
      <div className="card">
        <div className="eyebrow">SOP library</div>
        <p className="page-title">Repeatability layer</p>
        <p className="lede">Visible standardization route for the 91-120 phase.</p>
        <ul className="list">
          {sops.map((sop) => (
            <li key={sop}>{sop}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
