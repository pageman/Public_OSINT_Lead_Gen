export default function QualificationPublishingPage() {
  const cadence = [
    "Monday: publish weekly pulse",
    "Tuesday: distribute on LinkedIn, X, and email",
    "Wednesday: review replies and booked calls",
    "Thursday: refresh data quality and source review",
    "Friday: backlog grooming and next-week framing"
  ];

  return (
    <section className="section">
      <div className="card">
        <div className="eyebrow">Publishing SLA</div>
        <p className="page-title">Operational publishing cadence</p>
        <p className="lede">Visible route for the day 31-60 publishing system and ownership model.</p>
        <ul className="list">
          {cadence.map((entry) => (
            <li key={entry}>{entry}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
