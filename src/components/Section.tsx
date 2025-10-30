import { motion } from "framer-motion";
import Carousel from "./Carousel"; // Import the Carousel component

type SectionProps = {
  heading: string;
  paragraphs: string[]; // Array of paragraphs to display in the carousel
  button?: React.ReactNode | null;
};

const Section: React.FC<SectionProps> = ({ heading, paragraphs, button }) => {
  return (
    <section className="py-5 hercules-bg text-center hercules-default-color">
      <div className="container">
        {/* Heading animation */}
        <motion.h1
          className="display-4 mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {heading}
        </motion.h1>

        {/* Carousel animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Carousel paragraphs={paragraphs} />
        </motion.div>

        {/* Optional button animation */}
        {button && (
          <motion.div
            className="mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {button}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Section;
