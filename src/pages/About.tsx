import { motion } from "framer-motion";
import Section from "../components/Section";

function About() {
  return (
    <div className="bg-light text-dark">
      {/* Hero Section */}
      {/*<section className="py-5 bg-dark text-light text-center">
        <div className="container">
          <motion.h1
            className="display-5 fw-bold mb-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Hercules
          </motion.h1>
          <p
            className="lead text-muted text-light-emphasis mx-auto"
            style={{ maxWidth: "700px" }}
          >
            Building a future where time is your most valuable resource — and
            Hercules helps you reclaim it.
          </p>
        </div>
      </section>*/}
      <Section
        heading="About Hercules"
        paragraphs={[
          "Building a future where time is your most valuable resource — and Hercules helps you reclaim it."
        ]}
      />

      {/* Mission Section */}
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <motion.img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
              alt="Team collaboration"
              className="img-fluid rounded-4 shadow-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>
          <div className="col-md-6">
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="fw-bold mb-3">Our Mission</h2>
              <p className="text-muted">
                Hercules was founded on a simple belief: that technology should
                empower people, not overwhelm them. We help teams delegate
                tasks, automate processes, and rediscover balance — so they can
                focus on what truly matters.
              </p>
              <p className="text-muted">
                Our platform bridges human creativity with intelligent
                automation, making everyday work simpler, faster, and more
                fulfilling.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="bg-white py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Our Vision & Core Values</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="p-4 shadow-sm rounded-4 h-100">
                <h5 className="fw-bold">Empowerment</h5>
                <p className="text-muted">
                  We believe in empowering individuals and businesses through
                  smart delegation and meaningful automation.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 shadow-sm rounded-4 h-100">
                <h5 className="fw-bold">Innovation</h5>
                <p className="text-muted">
                  We continuously evolve, designing new solutions that make work
                  and life more efficient and connected.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 shadow-sm rounded-4 h-100">
                <h5 className="fw-bold">Integrity</h5>
                <p className="text-muted">
                  We act with transparency, honesty, and a deep respect for our
                  customers, partners, and community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Team Section */}
<section className="bg-light py-5">
  <div className="container text-center">
    <h2 className="fw-bold mb-4">Meet the Team</h2>
    <p className="text-muted mb-5">
      We’re a passionate group of builders, thinkers, and dreamers working
      to redefine what’s possible through technology.
    </p>

    <div className="row justify-content-center">
      {[
        {
          name: "Alex Rivera",
          role: "Founder & CEO",
          img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Jamie Lee",
          role: "Chief Product Officer",
          img: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Taylor Chen",
          role: "Head of Design",
          img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
        },
      ].map((member, index) => (
        <div className="col-md-3 mb-4 d-flex" key={index}>
          <div className="card border-0 shadow-sm rounded-4 w-100 d-flex flex-column">
            <div
              className="overflow-hidden"
              style={{
                height: "280px",
                borderTopLeftRadius: "1rem",
                borderTopRightRadius: "1rem",
              }}
            >
              <img
                src={member.img}
                className="w-100 h-100"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                alt={member.name}
              />
            </div>
            <div className="card-body flex-grow-1 d-flex flex-column justify-content-center">
              <h6 className="fw-bold mb-1">{member.name}</h6>
              <small className="text-muted">{member.role}</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
}

export default About;
