"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./ProjectSlider.module.css";
import Arrow from "../arrow/Arrow";

export default function ProjectSlider({ list }) {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const slideShow = useRef(null);

  const handleDragStart = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.pageX || e.touches[0].pageX);
  };
  const handleDragMove = (e) => {
    if (!isDragging) return;
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
    if (slideShow.current.children.length > 0) {
      const lastElement =
        slideShow.current.children[slideShow.current.children.length - 1];

      slideShow.current.insertBefore(lastElement, slideShow.current.firstChild);

      slideShow.current.style.transition = "none";
      slideShow.current.style.transform = `translateX(-${lastElement.offsetWidth}px)`;

      requestAnimationFrame(() => {
        slideShow.current.style.transition = `0.5s ease-out all`;
        slideShow.current.style.transform = `translateX(0)`;
      });
    }
  };

  const handleNext = () => {
    if (slideShow.current.children.length > 0) {
      const firstElement = slideShow.current.children[0];
      const slideWidth = firstElement.offsetWidth;

      slideShow.current.style.transition = `0.45s ease-out all`;
      slideShow.current.style.transform = `translateX(-${slideWidth}px)`;

      const transition = () => {
        slideShow.current.style.transition = `none`;
        slideShow.current.style.transform = `translateX(0)`;

        slideShow.current.appendChild(firstElement);

        slideShow.current.removeEventListener("transitionend", transition);
      };

      slideShow.current.addEventListener("transitionend", transition);
    }
  };

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
          <li id={item.id} key={item.title} className={`${styles.slide}`}>
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
              width={697.36}
              height={523.02}
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
