export default function QualificationNurturePage() {
  const steps = [
    {
      title: "Immediate follow-up",
      purpose: "Confirm submission, reinforce the strongest signal, and route high-urgency leads to briefing."
    },
    {
      title: "48-72 hour follow-up",
      purpose: "Explain where the hidden cost lands first and ask which workflow is currently most painful."
    },
    {
      title: "5-7 day follow-up",
      purpose: "Shift from education to execution and direct qualified leads to pilot intake."
    }
  ];

  return (
    <section className="section">
      <div className="card">
        <div className="eyebrow">Nurture system</div>
        <p className="page-title">Qualification email sequence</p>
        <p className="lede">This is the live representation of the day 31-60 nurture layer.</p>
      </div>
      <div className="update-grid" style={{ marginTop: 24 }}>
        {steps.map((step) => (
          <article className="card" key={step.title}>
            <h3>{step.title}</h3>
            <p className="muted">{step.purpose}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
