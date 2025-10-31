import { motion } from "framer-motion";
import Section from "../components/Section";

function HowItWorks() {
  const steps = [
    {
      title: "1. Set Up Your Account",
      desc: "Create your Boss account in just a few clicks. Customize your workspace and get ready to manage everything in one place.",
      img: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "2. Configure Your Settings",
      desc: "Easily set preferences and connect your tools. Boss integrates seamlessly with the platforms your team already uses.",
      img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "3. Launch and Monitor",
      desc: "Start using Boss to streamline your workflow. Track progress, manage time, and improve productivity effortlessly.",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="how-it-works-page bg-light">
      {/* Header Section 
      <motion.section
        className="text-center py-5 bg-white shadow-sm"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="container">
          <h1 className="fw-bold mb-3">How It Works</h1>
          <p className="text-muted fs-5 mb-0">
            Discover how Boss simplifies your workflow from setup to success.
          </p>
        </div>
      </motion.section>*/}
      <Section
        heading="How It Works"
        paragraphs={[
          "Discover how Boss simplifies your workflow from setup to success."
        ]}
      />

      {/* Steps Section */}
      <section className="container py-5">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`row align-items-center mb-5 ${
              index % 2 === 1 ? "flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="col-md-6 mb-4 mb-md-0">
              <motion.img
                src={step.img}
                alt={step.title}
                className="img-fluid rounded-4 shadow-sm"
                style={{ objectFit: "cover", width: "100%", height: "350px" }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="col-md-6">
              <h3 className="fw-bold mb-3">{step.title}</h3>
              <p className="text-muted fs-5">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Call to Action */}
      <motion.section
        className="text-center py-5 bg-white border-top"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h2 className="fw-bold mb-3">Ready to Experience Boss?</h2>
          <p className="text-muted mb-4">
            Join thousands of users boosting productivity with Boss today.
          </p>
          <a
            href="/getstarted"
            className="btn btn-dark"
          >
            Get Started
          </a>
        </div>
      </motion.section>
    </div>
  );
}

export default HowItWorks;
