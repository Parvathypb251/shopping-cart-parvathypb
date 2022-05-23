import React from 'react';
import logo from 'assets/images/logo.png';
import { images } from 'helpers/groupImage';
import './Carousel.scss';

/**
 * Component for Home page
 */
const Carousel = (props) => {
  const { slides } = props;
  const [activeIndex, setActiveIndex] = React.useState(0);
  let slideIndex = 0;

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    let i;
    if (n > slides.length - 1) {
      slideIndex = 0;
    }
    if (n < 0) {
      slideIndex = slides.length - 1;
    }

    setActiveIndex(slideIndex);
  }
  return (
    <div className="carousel">
      {slides.map((slide, index) => (
        <div className={`mySlides fade ${activeIndex === index ? 'show' : 'hide'}`}>
          <img src={images[slide['img']]} className="offer-img" alt="offer image" />
        </div>
      ))}

      <a className="prev" onClick={() => plusSlides(-1)}>
        ❮PREV
      </a>
      <a className="next" onClick={() => plusSlides(1)}>
        NEXT❯
      </a>
      <br />
      <div className="dots">
        <span className="dot" onClick={() => currentSlide(0)}></span>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
      </div>
    </div>
  );
};

export default Carousel;
