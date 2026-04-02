type PilotSuccessPageProps = {
  searchParams: Promise<{
    company?: string;
    band?: string;
    score?: string;
  }>;
};

export default async function PilotIntakeSuccessPage({ searchParams }: PilotSuccessPageProps) {
  const params = await searchParams;

  return (
    <section className="section">
      <div className="card">
        <div className="eyebrow">Pilot intake received</div>
        <p className="page-title">{params.company ?? "Your team"} is in review</p>
        <p className="lede">
          Qualification result: <strong>{params.band ?? "needs_review"}</strong> with score{" "}
          <strong>{params.score ?? "0"}</strong>.
        </p>
        <ul className="list">
          <li>Use the internal cases page to review and triage current pilot candidates.</li>
          <li>Keep the first pilot narrow and tied to one workflow bottleneck.</li>
          <li>Convert only the highest-friction queue into a sprint, not the whole operation.</li>
        </ul>
        <p>
          <a className="button" href="/ops/cases">
            Open internal cases
          </a>
        </p>
      </div>
    </section>
  );
}
