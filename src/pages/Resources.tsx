import { motion } from "framer-motion";
import Section from "../components/Section";

function Resources() {
  return (
    <div>
      <Section
        heading="Resources to Help You Grow"
        paragraphs={[
          "Learn how to delegate effectively, boost productivity, and make the most out of your assistant. Browse our curated guides, articles, and video resources.",
        ]}
      />

      <div className="container my-5">
        <div className="row g-4">
          {/* Resource 1 - Blog */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <motion.img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
                className="card-img-top"
                alt="Delegation Tips"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  Master the Art of Delegation
                </h5>
                <p className="card-text">
                  Learn how to effectively assign tasks and manage your time with
                  proven frameworks used by top-performing leaders.
                </p>
                <a href="#" className="btn btn-outline-dark">
                  Read Article
                </a>
              </div>
            </div>
          </div>

          {/* Resource 2 - eBook */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <motion.img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                className="card-img-top"
                alt="Productivity Guide"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  The Ultimate Productivity Guide
                </h5>
                <p className="card-text">
                  Discover actionable steps to reduce burnout and maintain focus
                  throughout your workday.
                </p>
                <a href="#" className="btn btn-outline-dark">
                  Download eBook
                </a>
              </div>
            </div>
          </div>

          {/* Resource 3 - Video */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <motion.img
                src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
                className="card-img-top"
                alt="Video Training"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  Video Training: Building Habits That Stick
                </h5>
                <p className="card-text">
                  Watch this 10-minute video to learn how to build effective work
                  habits and maintain productivity long-term.
                </p>
                <a href="#" className="btn btn-outline-dark">
                  Watch Video
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Section
        heading="Stay Updated"
        paragraphs={[
          "Subscribe to our newsletter to receive the latest insights and strategies for delegation, leadership, and efficiency.",
        ]}
        button={<button className="btn btn-dark">Subscribe</button>}
      />
    </div>
  );
}

export default Resources;
