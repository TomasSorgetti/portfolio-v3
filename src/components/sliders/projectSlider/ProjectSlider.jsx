"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./ProjectSlider.module.css";
import Arrow from "../arrow/Arrow";

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
    <div
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
      className={styles.projectSlider}
    >
      <ul className={styles.sliderCont} ref={slideShow}>
        {list.map((item, index) => (
          <li
            id={item.id}
            key={item.title}
            className={`${styles.slide} ${
              index === activeIndex ? styles.active : ""
            }`}
          >
            <Image
              className={styles.decoration}
              src={item.decoration}
              alt={item.title}
              width={950}
              height={263}
            />
            <div className={styles.textCont}>
              <h3>
                {item.title}
                <span>{item.titleSpan}</span>
              </h3>
              <p>{item.description}</p>
              <a href={item.href}>{item.cta}</a>
            </div>
            <Image
              className={styles.image}
              src={item.image}
              alt={item.title}
              width={540.8}
              height={428.3}
            />
          </li>
        ))}
      </ul>

      <div className={styles.arrows}>
        <Arrow direction="left" handleClick={handlePrevious} />
        <Arrow direction="right" handleClick={handleNext} />
      </div>
      <div className={styles.dots}>
        {list.map((item, index) => (
          <span key={item.title} className={`${styles.dot}`}>
            {/* Dot */}
          </span>
        ))}
      </div>
    </div>
  );
}
