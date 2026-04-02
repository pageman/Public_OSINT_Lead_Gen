export default function OpsCaseStudyPage() {
  const sections = [
    "Client type",
    "Starting problem",
    "Public signal connection",
    "Sprint work",
    "Outcome",
    "Reusable lesson"
  ];

  return (
    <section className="section">
      <div className="card">
        <div className="eyebrow">Case study template</div>
        <p className="page-title">Pilot proof structure</p>
        <p className="lede">Route representation of the case-study template used to convert pilot delivery into sales proof.</p>
        <ul className="list">
          {sections.map((section) => (
            <li key={section}>{section}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
