// components/Carousel.js

import { useState, useEffect, useRef } from 'react';

const images = [
  "/room/1.png",
  "/room/2.png",
  "/room/3.png",
  "/ayuGallery/1.png",
  "/ayuGallery/2.png",
  "/ayuGallery/3.png",
  "/ayuGallery/4.png",
  "/ayuGallery/5.png",
  "/ayuGallery/6.png",
  "/ayuGallery/7.png",
  "/ayuGallery/8.png",
  "/ayuGallery/9.png",
  "/ayuGallery/10.png",
  "/ayuGallery/11.png",
 
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const imagesPerSlide = 5;
    const scrollAmount = 2;
    const autoScrollDelay = 3000; // Time in milliseconds for auto-scroll
    const requestRef = useRef();
    const previousTimeRef = useRef();
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex >= images.length - imagesPerSlide ? 0 : prevIndex + scrollAmount));
    };
  
    const animate = (time) => {
      if (previousTimeRef.current != undefined) {
        const deltaTime = time - previousTimeRef.current;
        if (deltaTime >= autoScrollDelay) {
          nextSlide();
          previousTimeRef.current = time;
        }
      } else {
        previousTimeRef.current = time;
      }
      requestRef.current = requestAnimationFrame(animate);
    };
  
    useEffect(() => {
      requestRef.current = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(requestRef.current);
    }, []);
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - imagesPerSlide : prevIndex - scrollAmount));
    };
  
    return (
      <div className="relative w-full mx-5  overflow-hidden">
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${(currentIndex / images.length) * 100}%)` }}
          >
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-1/5 flex-shrink-0"
              />
            ))}
          </div>
        </div>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-white p-2 rounded-full shadow-md"
          onClick={prevSlide}
        >
          &#8592;
        </button>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-white p-2 rounded-full shadow-md"
          onClick={nextSlide}
        >
          &#8594;
        </button>
      </div>
    );
  };
  
  export default Carousel;