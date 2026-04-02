import { gatedAssets, leadScoreRules } from "../data";

export default function InsightsPage() {
  const tallyUrl = process.env.NEXT_PUBLIC_TALLY_FORM_URL;

  return (
    <section className="section">
      <div className="card">
        <div className="eyebrow">Day 31-60 layer</div>
        <p className="page-title">Gated insights and qualification</p>
        <p className="lede">
          This is the next layer after the public hub: sharper assets, clearer buyer intent, and structured
          qualification before the paid execution conversation.
        </p>
      </div>

      <div className="insight-grid" style={{ marginTop: 24 }}>
        <div className="card">
          <h2>Unlock the deeper cut</h2>
          <div className="update-grid">
            {gatedAssets.map((asset) => (
              <article className="card" key={asset.id}>
                <div className="eyebrow">{asset.signalClass}</div>
                <h3>{asset.title}</h3>
                <p className="muted">{asset.description}</p>
                <p>Unlock: {asset.unlockRequirement}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="card">
          <h2>Lead form prototype</h2>
          {tallyUrl ? (
            <>
              <p className="muted">
                External form is configured. Use the hosted flow for production intake and the internal flow below
                as a local fallback.
              </p>
              <p>
                <a className="button-secondary" href={tallyUrl} target="_blank" rel="noreferrer">
                  Open Tally form
                </a>
              </p>
            </>
          ) : null}
          <form className="form-shell" action="/api/lead-capture" method="post">
            <input type="hidden" name="wedge" value="fintech" />
            <input type="hidden" name="sourcePage" value="/insights" />
            <label>
              Work email
              <input type="email" name="email" placeholder="ops@company.com" required />
            </label>
            <label>
              Company
              <input type="text" name="company" placeholder="Company name" required />
            </label>
            <label>
              Role
              <select name="role" defaultValue="operator">
                <option value="operator">Operator / forwarder</option>
                <option value="insurer">Insurer / broker</option>
                <option value="analyst">Analyst</option>
              </select>
            </label>
            <label>
              Urgency
              <select name="urgency" defaultValue="this_month">
                <option value="this_week">Need help this week</option>
                <option value="this_month">Need help this month</option>
                <option value="research">Researching now</option>
              </select>
            </label>
            <label>
              Current pain
              <textarea
                name="currentPain"
                rows={4}
                placeholder="Compliance backlog, reconciliation pressure, payout corridor issues, or exception handling"
                required
              />
            </label>
            <button className="button" type="submit">
              Unlock insights
            </button>
          </form>
        </div>
      </div>

      <div className="section">
        <h2>Lead Scoring Rules</h2>
        <div className="score-grid">
          {leadScoreRules.map((rule) => (
            <article className="card" key={rule.id}>
              <h3>{rule.label}</h3>
              <p className="metric-value">{rule.points}</p>
              <p className="muted">{rule.rationale}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
