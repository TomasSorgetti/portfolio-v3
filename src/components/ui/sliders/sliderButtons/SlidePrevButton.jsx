"use client";

import { React } from "react";
import { useSwiper } from "swiper/react";

export default function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <button
      className="hidden md:flex absolute h-full top-0 left-0 z-40 items-center justify-center w-16 bg-gray-200 bg-opacity-50 hover:bg-opacity-75 transition-opacity group"
      onClick={() => swiper.slidePrev()}
    >
      <svg
        width="60"
        height="120"
        viewBox="0 0 60 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M47.7401 87.0998L42.4351 92.3998L13.5401 63.5148C13.0743 63.052 12.7046 62.5016 12.4524 61.8953C12.2002 61.2891 12.0703 60.6389 12.0703 59.9823C12.0703 59.3257 12.2002 58.6755 12.4524 58.0693C12.7046 57.463 13.0743 56.9126 13.5401 56.4498L42.4351 27.5498L47.7351 32.8498L20.6151 59.9748L47.7401 87.0998Z"
          fill="#727272"
          className="fill-gray-500 group-hover:fill-pink-500"
        />
      </svg>
    </button>
  );
}
