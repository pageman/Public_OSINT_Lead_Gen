import { readPricing } from "../../lib/ops-data";

export default function PricingPage() {
  const pricing = readPricing();

  return (
    <section className="section">
      <div className="card">
        <div className="eyebrow">Pricing architecture</div>
        <p className="page-title">Free signal, paid execution</p>
        <p className="lede">
          The repo’s monetization model is visible here as a live route rather than only a document.
        </p>
      </div>
      <div className="update-grid" style={{ marginTop: 24 }}>
        {pricing.tiers.map((tier) => (
          <article className="card" key={tier.name}>
            <div className="eyebrow">{tier.price}</div>
            <h3>{tier.name}</h3>
            <ul className="list">
              {tier.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
