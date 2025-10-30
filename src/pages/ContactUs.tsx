import { motion } from "framer-motion";
import Section from "../components/Section";

const ContactSupport = () => {
  return (
    <div className="hercules-bg hercules-default-color min-vh-100 py-5">
      <div className="container text-center">
        {/* Hero Section */}
        <motion.h1
          className="display-4 mb-3 fw-bold"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact Support
        </motion.h1>

        <motion.p
          className="lead mb-5 text-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We're here to help! Whether you need technical support, have a billing
          question, or just want to say hi — our team will get back to you as
          soon as possible.
        </motion.p>

         {/*<Section
        heading="Contact Support"
        paragraphs={[
          "We're here to help! Whether you need technical support, have a billing question, or just want to say hi — our team will get back to you as soon as possible."
        ]}
      />*/}

        {/* Contact Form */}
        <motion.div
          className="row justify-content-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="col-md-8 col-lg-6">
            <form className="text-start">
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="name"
                  placeholder="Your name"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="email"
                  placeholder="you@example.com"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-semibold">
                  Message
                </label>
                <textarea
                  className="form-control form-control-lg"
                  id="message"
                  rows={5}
                  placeholder="Tell us how we can help..."
                ></textarea>
              </div>

              <div className="text-center mt-4">
                <motion.button
                  type="submit"
                  className="btn btn-dark px-5 py-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="mt-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h5 className="fw-bold mb-2">Need immediate help?</h5>
          <p className="text-muted mb-1">
            Email us at{" "}
            <a href="mailto:support@hercules.com" className="text-dark fw-semibold">
              support@hercules.com
            </a>
          </p>
          <p className="text-muted">
            or call{" "}
            <a href="tel:+18001234567" className="text-dark fw-semibold">
              +1 (800) 123-4567
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSupport;
