type SuccessPageProps = {
  searchParams: Promise<{
    score?: string;
    band?: string;
    company?: string;
  }>;
};

export default async function InsightsSuccessPage({ searchParams }: SuccessPageProps) {
  const params = await searchParams;
  const score = params.score ?? "0";
  const band = params.band ?? "nurture";
  const company = params.company ?? "your team";

  return (
    <section className="section">
      <div className="card">
        <div className="eyebrow">Lead capture complete</div>
        <p className="page-title">Signal unlocked for {company}</p>
        <p className="lede">
          Your submission was captured. Current qualification result: <strong>{band}</strong> with score{" "}
          <strong>{score}</strong>.
        </p>
        <ul className="list">
          <li>Use the briefing route if you need operational help this week.</li>
          <li>Keep the wedge narrow and tie requests to specific queue pain.</li>
          <li>Map the next workflow change to one clear signal, not generic market commentary.</li>
        </ul>
        <p>
          <a className="button" href="/contact">
            Book operations briefing
          </a>
        </p>
      </div>
    </section>
  );
}
