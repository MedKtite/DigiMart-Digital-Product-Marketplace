import  { useState } from 'react';
import slide1 from "../assets/Sliders/slide1.png";
import slide2 from "../assets/Sliders/slide2.png";
import slide3 from "../assets/Sliders/slide3.png";

const images = [slide1, slide2, slide3];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index + 1}`} className="w-full" />
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-primary-gray px-3 py-1 rounded-full"
      >
        <i className="fas fa-chevron-left text-primary-dark-gray"></i>
      </button>
      <button
        onClick={nextSlide}
        className="absolute px-3 py-1 top-1/2 right-2 transform -translate-y-1/2 bg-primary-gray  rounded-full"
      >
        <i className="fas fa-chevron-right text-primary-dark-gray"></i>
      </button>
    </div>
  );
}