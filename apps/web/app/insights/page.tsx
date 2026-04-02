import { gatedAssets, leadScoreRules } from "../data";

export default function InsightsPage() {
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
          <form className="form-shell">
            <label>
              Work email
              <input type="email" placeholder="ops@company.com" />
            </label>
            <label>
              Company
              <input type="text" placeholder="Company name" />
            </label>
            <label>
              Role
              <select defaultValue="operator">
                <option value="operator">Operator / forwarder</option>
                <option value="insurer">Insurer / broker</option>
                <option value="analyst">Analyst</option>
              </select>
            </label>
            <label>
              Current pain
              <textarea rows={4} placeholder="Routing volatility, claims, war-risk docs, or exception backlog" />
            </label>
            <button className="button" type="button">
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
