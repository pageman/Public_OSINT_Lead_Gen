export default function PilotIntakePage() {
  return (
    <section className="section">
      <div className="card">
        <div className="eyebrow">Paid pilot</div>
        <p className="page-title">Operations acceleration sprint intake</p>
        <p className="lede">
          This is the minimum viable paid layer behind the public signal. Use it to qualify real workflow pain and
          determine whether a 30-day pilot should start now.
        </p>
      </div>

      <div className="insight-grid" style={{ marginTop: 24 }}>
        <div className="card">
          <h2>Pilot scope</h2>
          <ul className="list">
            <li>Queue triage for compliance, payout, or reconciliation pain</li>
            <li>Corridor-level escalation and exception handling map</li>
            <li>Manual-review prioritization rules</li>
            <li>Surge support playbook for the highest-friction workflow</li>
          </ul>
        </div>

        <div className="card">
          <h2>Submit pilot intake</h2>
          <form className="form-shell" action="/api/pilot-intake" method="post">
            <label>
              Company
              <input type="text" name="company" placeholder="Company name" required />
            </label>
            <label>
              Contact name
              <input type="text" name="contactName" placeholder="Full name" required />
            </label>
            <label>
              Work email
              <input type="email" name="email" placeholder="ops@company.com" required />
            </label>
            <label>
              Urgency
              <select name="urgency" defaultValue="this_month">
                <option value="this_week">Need help this week</option>
                <option value="this_month">Need help this month</option>
                <option value="later">Exploring for later</option>
              </select>
            </label>
            <label>
              Volume
              <select name="volume" defaultValue="medium">
                <option value="high">High recurring workflow volume</option>
                <option value="medium">Moderate but painful workflow volume</option>
                <option value="low">Low volume, high complexity</option>
              </select>
            </label>
            <label>
              Current pain
              <textarea
                name="currentPain"
                rows={5}
                placeholder="Describe the current queue, backlog, corridor, or partner issue"
                required
              />
            </label>
            <button className="button" type="submit">
              Submit pilot intake
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
