import { readPartnerDiscovery } from "../../../lib/ops-data";

type PageProps = {
  searchParams: Promise<{ submitted?: string }>;
};

export default async function BetaPartnersPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const contract = readPartnerDiscovery();

  return (
    <section className="section">
      <div className="card">
        <div className="eyebrow">Beta partner discovery</div>
        <p className="page-title">Partner requirements capture</p>
        <p className="lede">
          This is the minimum viable expansion-readiness surface: requirement capture before externalizing an API.
        </p>
        {params.submitted ? <p className="badge">Partner requirements captured</p> : null}
      </div>
      <div className="insight-grid" style={{ marginTop: 24 }}>
        <div className="card">
          <h2>Discovery form</h2>
          <form className="form-shell" action="/api/partner-discovery" method="post">
            <label>
              Company
              <input type="text" name="company" placeholder="Company name" required />
            </label>
            <label>
              Work email
              <input type="email" name="email" placeholder="partner@company.com" required />
            </label>
            <label>
              Need
              <input type="text" name="need" placeholder="What signal would be useful enough to integrate?" required />
            </label>
            <label>
              Cadence
              <input type="text" name="cadence" placeholder="daily, weekly, intraday" required />
            </label>
            <label>
              Workflow
              <textarea name="workflow" rows={4} placeholder="What workflow would this change?" required />
            </label>
            <button className="button" type="submit">
              Submit discovery
            </button>
          </form>
        </div>

        <div className="card">
          <h2>Current sample responses</h2>
          <div className="update-grid">
            {contract.responses.map((response) => (
              <article className="card" key={response.company}>
                <h3>{response.company}</h3>
                <p className="muted">{response.need}</p>
                <p>Cadence: {response.cadence}</p>
                <p>Workflow: {response.workflow}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
