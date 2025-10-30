import Section from "../components/Section";
import { Link } from "react-router-dom";

function GetStarted() {
  return (
    <div>
      <Section
        heading="Let’s Get Started!"
        paragraphs={[
          "You’re one step closer to getting your own dedicated assistant. Fill out the form below so we can tailor the perfect experience for you."
        ]}
      />

      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-sm border-0 p-4">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="company" className="form-label fw-semibold">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="form-control"
                    placeholder="Optional"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="plan" className="form-label fw-semibold">
                    Choose a Plan
                  </label>
                  <select id="plan" className="form-select" defaultValue="">
                    <option value="" disabled>
                      Select your plan
                    </option>
                    <option value="starter">Starter – $99/month</option>
                    <option value="pro">Pro – $199/month</option>
                    <option value="enterprise">Enterprise – Custom</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label fw-semibold">
                    What are your goals?
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="form-control"
                    placeholder="Tell us how we can help..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-dark w-100">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Section
        heading="Need Help?"
        paragraphs={[
          "Our team is here to guide you every step of the way. Don’t hesitate to reach out if you have questions about the setup or pricing."
        ]}
        button={<Link to="/contactus" className="btn btn-dark">
  Contact Support
</Link>}

        
      />
    </div>
  );
}

export default GetStarted;
