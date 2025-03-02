"use client";

import { React } from "react";
import { useSwiper } from "swiper/react";

export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button
      className="hidden md:flex absolute h-full top-0 right-0 z-40 items-center justify-center w-16 bg-gray-200 bg-opacity-50 hover:bg-opacity-75 transition-opacity group "
      onClick={() => swiper.slideNext()}
    >
      <svg
        width="60"
        height="120"
        viewBox="0 0 60 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.2599 87.0998L17.5649 92.3998L46.4599 63.5148C46.9257 63.052 47.2954 62.5016 47.5476 61.8953C47.7998 61.2891 47.9297 60.6389 47.9297 59.9823C47.9297 59.3257 47.7998 58.6755 47.5476 58.0693C47.2954 57.463 46.9257 56.9126 46.4599 56.4498L17.5649 27.5498L12.2649 32.8498L39.3849 59.9748L12.2599 87.0998Z"
          fill="#727272"
          className="fill-gray-500 group-hover:fill-pink-500"
        />
      </svg>
    </button>
  );
}
