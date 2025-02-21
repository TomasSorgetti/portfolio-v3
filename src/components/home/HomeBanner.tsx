import MainButton from "@/components/ui/buttons/MainButton";
import Image from "next/image";

export default function HomeBanner() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-[1280px] mx-auto flex justify-between items-center">
        <div>
          <span className="uppercase text-gray">
            working at{" "}
            <a
              href="https://glitchdesignlab.com"
              target="blank"
              className="text-gradient"
              rel="noopener noreferrer"
              title="Glitch Design Lab"
              aria-label="Glitch Design Lab"
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
          <MainButton href="#contact" target="_self">
            Get in Touch
          </MainButton>
        </div>
        <Image
          className="hidden lg:block filter grayscale"
          src="/images/banner/banner.png"
          alt="horse"
          width={584}
          height={584}
          unoptimized
          draggable={false}
          loading="eager"
          priority
        />
      </div>
    </section>
  );
}
