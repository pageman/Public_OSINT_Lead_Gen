import { readCommunitySignals } from "../../../lib/ops-data";

type PageProps = {
  searchParams: Promise<{ submitted?: string }>;
};

export default async function CommunitySignalsPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const contract = readCommunitySignals();

  return (
    <section className="section">
      <div className="card">
        <div className="eyebrow">Community signal loop</div>
        <p className="page-title">Submission and moderation</p>
        <p className="lede">
          This is the live day 31-60 community-signal layer: intake plus a visible moderation state model.
        </p>
        {params.submitted ? <p className="badge">Submission captured</p> : null}
      </div>

      <div className="insight-grid" style={{ marginTop: 24 }}>
        <div className="card">
          <h2>Submit signal</h2>
          <form className="form-shell" action="/api/community-signals" method="post">
            <label>
              Signal
              <input type="text" name="signal" placeholder="Observed operational issue" required />
            </label>
            <label>
              Context
              <input type="text" name="context" placeholder="Corridor, partner, or workflow" required />
            </label>
            <label>
              Notes
              <textarea name="notes" rows={5} placeholder="Supporting context or corroborating detail" required />
            </label>
            <button className="button" type="submit">
              Submit community signal
            </button>
          </form>
        </div>

        <div className="card">
          <h2>Moderation queue</h2>
          <div className="update-grid">
            {contract.items.map((item) => (
              <article className="card" key={item.id}>
                <div className="eyebrow">{item.status}</div>
                <h3>{item.signal}</h3>
                <p className="muted">{item.context}</p>
                <p>{item.action}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
