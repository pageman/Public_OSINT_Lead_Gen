export default function OpsOnboardingPage() {
  const items = [
    "Identify one queue or corridor to focus on",
    "Confirm primary operator owner",
    "Gather current backlog and aging metrics",
    "Confirm one success metric for the sprint"
  ];

  return (
    <section className="section">
      <div className="card">
        <div className="eyebrow">Pilot onboarding</div>
        <p className="page-title">Kickoff checklist</p>
        <p className="lede">Minimum viable onboarding surface for the 61-90 pilot layer.</p>
        <ul className="list">
          {items.map((entry) => (
            <li key={entry}>{entry}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
