
const Banner = () => {
  return (
    <section className="py-5 hercules-bg">
      <div className="container">
        <div className="image-row">
          {/* Image 1 */}
          <div className="banner-image">
            <img
              src="https://picsum.photos/800/600?random=1"
              alt="Random 1"
              className="img-fluid"
            />
          </div>
          {/* Image 2 */}
          <div className="banner-image">
            <img
              src="https://picsum.photos/800/600?random=2"
              alt="Random 2"
              className="img-fluid"
            />
          </div>
          {/* Image 3 */}
          <div className="banner-image">
            <img
              src="https://picsum.photos/800/600?random=3"
              alt="Random 3"
              className="img-fluid"
            />
          </div>
          {/* Image 4 */}
          <div className="banner-image">
            <img
              src="https://picsum.photos/800/600?random=4"
              alt="Random 4"
              className="img-fluid"
            />
          </div>
          {/* Image 5 */}
          <div className="banner-image">
            <img
              src="https://picsum.photos/800/600?random=5"
              alt="Random 5"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
