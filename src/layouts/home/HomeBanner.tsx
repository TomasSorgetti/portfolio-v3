import MainButton from "@/components/buttons/MainButton";
import Image from "next/image";

export default function HomeBanner() {
  return (
    <section className="py-24">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center">
        <div>
          <span className="uppercase text-gray">
            working on{" "}
            <a
              href="https://glitchdesignlab.com"
              target="blank"
              className="text-gradient"
            >
              #glitch design lab
            </a>
          </span>
          <h1 className="text-[52px] font-bold leading-[58px] mt-2">
            WEB DESIGNER &
            <br />
            <span className="text-gradient">FULL STACK WEB</span>
            <br />
            <span className="text-gradient">DEVELOPER</span>
          </h1>
          <p className="max-w-[468px] text-gray mt-4 mb-8 block leading-[26px]">
            I create digital solutions that blend innovative design and
            efficient development, helping businesses stand out in the digital
            world. Ready to turn your vision into a unique web experience?
          </p>
          <MainButton href="#contact">Get in Touch</MainButton>
        </div>
        <Image
          className="hidden lg:block filter grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
          src="/images/banner/banner.png"
          alt="horse"
          width={584}
          height={584}
          unoptimized
        />
      </div>
    </section>
  );
}
