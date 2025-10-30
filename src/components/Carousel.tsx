

type CarouselProps = {
  paragraphs: string[]; // Array of paragraphs to display in the carousel
};

const Carousel: React.FC<CarouselProps> = ({ paragraphs }) => {
  const isSingleItem = paragraphs.length === 1;

  return (
    <div
      id="textCarousel"
      className={`carousel slide ${isSingleItem ? "single-item" : ""}`}
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {paragraphs.map((paragraph, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <p className="lead">{paragraph}</p>
          </div>
        ))}
      </div>

      {/* Show carousel controls only if there are multiple items */}
      {!isSingleItem && (
        <>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#textCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#textCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;
