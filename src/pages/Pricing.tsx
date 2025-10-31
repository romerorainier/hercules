import Section from "../components/Section";

function Pricing() {
  return (
    <div>
      <Section
        heading="Choose Your Plan"
        paragraphs={[
          "Find the perfect plan that fits your goals and workflow. Whether you're just starting or ready to scale, Boss has a package designed for you."
        ]}
      />

      <div className="container my-5">
        <div className="row justify-content-center g-4">
          {/* Starter Plan */}
          <div className="col-md-4">
            <div className="card text-center shadow-sm border-0 h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold">Starter</h5>
                <h2 className="my-3">$99<span className="fs-6 text-muted">/month</span></h2>
                <p className="text-muted">
                  Perfect for solopreneurs who need part-time assistance.
                </p>
                <ul className="list-unstyled mb-4">
                  <li>✅ 1 Dedicated Remote Talent</li>
                  <li>✅ 20 Hours of Work/Month</li>
                  <li>✅ Email & Scheduling</li>
                </ul>
                <button className="btn btn-dark w-100">Get Started</button>
              </div>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="col-md-4">
            <div className="card text-center shadow-lg border-dark h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold">Pro</h5>
                <h2 className="my-3">$199<span className="fs-6 text-muted">/month</span></h2>
                <p className="text-muted">
                  Great for professionals who want a full-time productivity partner.
                </p>
                <ul className="list-unstyled mb-4">
                  <li>✅ 1 Full-Time Remote Talent</li>
                  <li>✅ 40 Hours of Work/Month</li>
                  <li>✅ Delegation Coaching</li>
                  <li>✅ Priority Support</li>
                </ul>
                <button className="btn btn-dark w-100">Upgrade to Pro</button>
              </div>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="col-md-4">
            <div className="card text-center shadow-sm border-0 h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold">Enterprise</h5>
                <h2 className="my-3">Custom</h2>
                <p className="text-muted">
                  For teams and executives who need full-scale delegation systems.
                </p>
                <ul className="list-unstyled mb-4">
                  <li>✅ Multiple Remote Talent</li>
                  <li>✅ Advanced Automation</li>
                  <li>✅ Team Delegation Coaching</li>
                  <li>✅ Custom Integrations</li>
                </ul>
                <button className="btn btn-outline-dark w-100">Contact Sales</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Section
        heading="Need a Custom Solution?"
        paragraphs={[
          "Not sure which plan fits your workflow? Talk to our team, and we’ll design a plan that fits your goals and business perfectly."
        ]}
        button={<button className="btn btn-dark">Talk to Us</button>}
      />
    </div>
  );
}

export default Pricing;
