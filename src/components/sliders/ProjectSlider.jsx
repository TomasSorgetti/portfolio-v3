"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Arrow from "./arrow/Arrow";
import MainButton from "../buttons/MainButton";

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
            className="min-w-full relative flex flex-col-reverse items-center px-4 py-[8rem] z-10 lg:flex-row lg:px-[8rem] lg:justify-between"
          >
            <Image
              className={`absolute top-[4rem] h-auto w-auto max-w-[100%] left-[16rem] z-[-1] transition-all duration-1000 ease-in-out ${
                index === activeIndex ? "transform -translate-x-60" : ""
              } md:top-[2rem]`}
              src={item.decoration}
              alt={item.title}
              width={950}
              height={263}
              draggable={false}
            />

            <div
              className={`flex flex-col items-center text-center gap-4 transform transition-all duration-1000 ease-in-out mt-[8rem]  ${
                index === activeIndex ? "translate-y-[-6rem]" : ""
              } lg:items-start lg:text-left`}
            >
              <h3 className="font-bold flex flex-col items-center uppercase text-[2.5rem] md:text-[3.5rem] lg:items-start">
                {item.title}
                <span className="text-gradient">{item.titleSpan}</span>
              </h3>
              <p className="block max-w-[420px] mb-4 text-gray">
                {item.description}
              </p>
              <MainButton href={item.href} target="blank">
                {item.cta}
              </MainButton>
            </div>

            <Image
              className={`transition-all duration-1000 ease-in-out h-auto w-full ${
                index === activeIndex ? "transform scale-125" : ""
              } lg:w-[50%]`}
              src={item.image}
              alt={item.title}
              width={540.8}
              height={428.3}
              draggable={false}
            />
          </li>
        ))}
      </ul>

      <div className="hidden absolute h-full top-0 left-0 z-10 lg:flex">
        <Arrow direction="left" handleClick={handlePrevious} />
      </div>
      <div className="hidden absolute h-full top-0 right-0 z-10 lg:flex">
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
