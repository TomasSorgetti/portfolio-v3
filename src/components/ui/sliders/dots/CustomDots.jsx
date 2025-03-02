"use client";

import { useState, useEffect } from "react";
import { useSwiper } from "swiper/react";

// Importa los estilos de Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

export default function CustomDots({ totalSlides }) {
  const swiper = useSwiper();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleSlideChange = () => {
      // Usa realIndex en lugar de activeIndex para sliders con loop
      setActiveIndex(swiper.realIndex);
    };
    swiper.on("slideChange", handleSlideChange);

    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [swiper]);

  const goToSlide = (index) => {
    swiper.slideToLoop(index); // Usa slideToLoop para navegar en modo loop
  };

  return (
    <div className="flex justify-center gap-2 mt-4">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          className="w-3 h-3 rounded-full transition-colors"
          style={{
            backgroundColor: activeIndex === index ? "#EC4899" : "#D1D5DB",
            opacity: 1,
            border: "none",
          }}
          onClick={() => goToSlide(index)}
        />
      ))}
    </div>
  );
}
