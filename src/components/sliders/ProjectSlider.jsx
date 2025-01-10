"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Arrow from "./arrow/Arrow";

export default function ProjectSlider({ list }) {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slideShow = useRef(null);

  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartX(e.pageX || e.touches[0].pageX);
  };
  const handleDragMove = (e) => {
    if (!isDragging || isAnimating) return;

    const currentX = e.pageX || e.touches[0].pageX;
    const translate = currentX - startX;

    if (translate > 100) {
      setIsDragging(false);
      handlePrevious();
    } else if (translate < -100) {
      setIsDragging(false);
      handleNext();
    }
  };
  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handlePrevious = () => {
    if (isAnimating || slideShow.current.children.length === 0) return;

    setIsAnimating(true);
    const lastElement =
      slideShow.current.children[slideShow.current.children.length - 1];

    slideShow.current.insertBefore(lastElement, slideShow.current.firstChild);

    slideShow.current.style.transition = "none";
    slideShow.current.style.transform = `translateX(-${lastElement.offsetWidth}px)`;

    requestAnimationFrame(() => {
      slideShow.current.style.transition = `0.5s ease-out all`;
      slideShow.current.style.transform = `translateX(0)`;
    });

    const resetAnimation = () => {
      setIsAnimating(false);
      slideShow.current.removeEventListener("transitionend", resetAnimation);
    };

    slideShow.current.addEventListener("transitionend", resetAnimation);

    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? list.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    if (isAnimating || slideShow.current.children.length === 0) return;

    setIsAnimating(true);
    const firstElement = slideShow.current.children[0];
    const slideWidth = firstElement.offsetWidth;

    slideShow.current.style.transition = `0.45s ease-out all`;
    slideShow.current.style.transform = `translateX(-${slideWidth}px)`;

    const transition = () => {
      slideShow.current.style.transition = `none`;
      slideShow.current.style.transform = `translateX(0)`;

      slideShow.current.appendChild(firstElement);

      slideShow.current.removeEventListener("transitionend", transition);
      setIsAnimating(false);
    };

    slideShow.current.addEventListener("transitionend", transition);

    setActiveIndex((prevIndex) =>
      prevIndex === list.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const slideShowElement = slideShow.current;
    slideShowElement.addEventListener("touchstart", handleDragStart, {
      passive: false,
    });
    slideShowElement.addEventListener("touchmove", handleDragMove, {
      passive: false,
    });
    return () => {
      slideShowElement.removeEventListener("touchstart", handleDragStart);
      slideShowElement.removeEventListener("touchmove", handleDragMove);
    };
  }, []);

  return (
    <section
      id="projects"
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
      className="w-full max-w-[1440px] mx-auto overflow-hidden cursor-grab relative select-none"
    >
      <ul
        className="flex flex-nowrap w-full transition-all touch-pan-y"
        ref={slideShow}
      >
        {list.map((item, index) => (
          <li
            id={item.id}
            key={item.title}
            className="min-w-full px-6 relative flex flex-col-reverse justify-between items-center py-[8rem] z-10 lg:px-[10rem] lg:flex-row"
          >
            <Image
              className={`absolute top-[4rem] h-auto w-auto max-w-full left-[16rem] z-[-1] transition-all duration-1000 ease-in-out ${
                index === activeIndex ? "transform -translate-x-60" : ""
              }`}
              src={item.decoration}
              alt={item.title}
              width={950}
              height={263}
            />

            <div
              className={`w-full flex flex-col items-start gap-4 transform transition-all duration-1000 ease-in-out mt-[6rem] lg:w-auto  ${
                index === activeIndex ? "translate-y-[-6rem]" : ""
              }`}
            >
              <h3 className="flex flex-col items-start uppercase text-[3.625rem] font-bold">
                {item.title}
                <span className="text-gradient">{item.titleSpan}</span>
              </h3>
              <p className="block max-w-[420px] mb-4 text-gray">
                {item.description}
              </p>
              <a href={item.href}>{item.cta}</a>
            </div>

            <Image
              className={`w-full transition-all duration-1000 ease-in-out h-auto lg:w-[617.81px] ${
                index === activeIndex ? "transform scale-125" : ""
              }`}
              src={item.image}
              alt={item.title}
              width={617.81}
              height={463.36}
            />
          </li>
        ))}
      </ul>

      <div className="hidden absolute top-0 left-0 w-full h-full lg:flex justify-between items-center py-8 z-10">
        <Arrow direction="left" handleClick={handlePrevious} />
        <Arrow direction="right" handleClick={handleNext} />
      </div>

      <div className="flex justify-center items-center gap-2">
        {list.map((item, index) => (
          <span
            key={item.title}
            className={`block rounded-full bg-gray cursor-pointer transition-all ${
              index === activeIndex
                ? "bg-gradient w-4 h-4"
                : "w-[10px] h-[10px]"
            }`}
          >
            {/* Dot */}
          </span>
        ))}
      </div>
    </section>
  );
}
