import Section from "../components/Section";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Section
        heading="Doing It All Is Costing You. What If You Didn’t Have To?"
        paragraphs={[
          "Hire a full-time dedicated assistant and receive world-class delegation coaching.",
        ]}
        button={<Link to="/getstarted" className="btn btn-dark">
  Get Started
</Link>}
      />

      <Banner />

      <Section
        heading="Amazing Features"
        paragraphs={[
          "Feature 1: Powerful Automation",
          "Feature 2: Scalable Solutions",
          "Feature 3: User-Friendly Interface",
        ]}
        button={<button className="btn btn-dark">Learn More</button>}
      />

      <Section
        heading="A world where delegation isn’t an afterthought but the bedrock of a balanced, fulfilling life."
        paragraphs={[
          "Whether you're a novice or a pro, Hercules's delegation system helps you level up.",
        ]}
      />
    </div>
  );
}

export default Home;
