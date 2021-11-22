import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Slider.scss';

export const Slider = ({ slides }) => {
  return (
    <div className="carousel-container">
      {slides.length > 0 && (
        <Carousel
          swipeable
          showThumbs={false}
          autoPlay
          interval={5000}
          stopOnHover={false}
          infiniteLoop
          autoFocus={true}
          showArrows={false}
          showStatus={false}
          centerMode={false}
          dynamicHeight={false}
          width={'1440px'}
        >
          {slides.map((slide, i) => (
            <div key={i}>
              <img src={slide.image} alt={slide.alt} />
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};
