import Section from "../components/Section";

function Solutions() {
  return (
    <div>
      <Section
        heading="Our Solutions"
        paragraphs={[
          "We help busy professionals, teams, and organizations delegate smarter, automate efficiently, and focus on what matters most.",
        ]}
      />

      <div className="container my-5">
        <div className="row g-4">
          {/* Productivity Solution */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title fw-bold">Productivity Optimization</h5>
                <p className="card-text">
                  Reclaim your time with workflow automation and professional
                  remote talent that eliminates repetitive tasks.
                </p>
                <a href="#" className="btn btn-outline-dark">
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Automation Solution */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title fw-bold">Smart Automation</h5>
                <p className="card-text">
                  Integrate AI-driven tools into your daily operations — from
                  scheduling and reporting to communication and tracking.
                </p>
                <a href="#" className="btn btn-outline-dark">
                  Explore Tools
                </a>
              </div>
            </div>
          </div>

          {/* Support Solution */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title fw-bold">Dedicated Support</h5>
                <p className="card-text">
                  Get 24/7 access to your remote talent and dedicated account manager,
                  ensuring all your needs are handled without delay.
                </p>
                <a href="#" className="btn btn-outline-dark">
                  Meet Our Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Section
        heading="Customized Solutions for Every Team"
        paragraphs={[
          "Whether you're a startup founder, manager, or executive, our flexible solutions scale with your growth.",
        ]}
        button={<button className="btn btn-dark">Request a Demo</button>}
      />
    </div>
  );
}

export default Solutions;
