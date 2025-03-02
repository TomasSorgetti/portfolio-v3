"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";
import SlideNextButton from "./sliderButtons/SlideNextButton";
import SlidePrevButton from "./sliderButtons/SlidePrevButton";
import CustomDots from "./dots/CustomDots";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import MainButton from "../buttons/MainButton";
import Image from "next/image";

export default function CustomSlider({ list }) {
  return (
    <section id="projects">
      <Swiper
        className="cursor-pointer"
        modules={[A11y]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
      >
        {list.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div className="min-w-full relative flex flex-col-reverse items-center px-4 py-[8rem] z-10 lg:flex-row lg:px-[8rem] lg:justify-between">
                <Image
                  className={`absolute top-[4rem] h-auto w-auto max-w-[100%] left-[16rem] z-[-1] transition-all duration-1000 ease-in-out ${
                    isActive
                      ? "transform -translate-x-60 opacity-1"
                      : "opacity-0"
                  } md:top-[2rem]`}
                  src={item.decoration}
                  alt={item.title}
                  width={950}
                  height={263}
                  draggable={false}
                  loading="lazy"
                />

                <div
                  className={`flex flex-col items-center text-center gap-4 transform transition-all duration-1000 ease-in-out mt-[8rem]  ${
                    isActive ? "translate-y-[-6rem]" : ""
                  } lg:items-start lg:text-left`}
                >
                  <h2 className="font-bold flex flex-col items-center uppercase text-[2.5rem] md:text-[3.5rem] lg:items-start">
                    {item.title}
                    <span className="text-gradient">{item.titleSpan}</span>
                  </h2>
                  <p className="block max-w-[420px] mb-4 text-gray">
                    {item.description}
                  </p>
                  <MainButton href={item.href} target="blank">
                    {item.cta}
                  </MainButton>
                </div>

                <Image
                  className={`transition-all duration-1000 ease-in-out h-auto w-full ${
                    isActive ? "transform scale-125" : ""
                  } lg:w-[50%]`}
                  src={item.image}
                  alt={item.title}
                  width={540.8}
                  height={428.3}
                  draggable={false}
                  loading="lazy"
                />
              </div>
            )}
          </SwiperSlide>
        ))}

        <SlidePrevButton />
        <SlideNextButton />

        <CustomDots totalSlides={list.length} />
      </Swiper>
    </section>
  );
}
