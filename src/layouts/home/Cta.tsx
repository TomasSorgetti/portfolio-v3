import MainButton from "@/components/buttons/MainButton";
import Image from "next/image";

export default function Cta() {
  return (
    <section className="relative flex justify-center items-center">
      <Image
        className="w-full h-auto"
        src="/videos/cta.png"
        alt="cta"
        width={1440}
        height={680}
      />
      <div className="absolute z-10 flex flex-col items-center gap-16 text-center">
        <h2 className="text-[42px] font-bold uppercase">
          Take the First Step –{" "}
          <span className="text-gradient">
            Let´s <br /> Work Together
          </span>
        </h2>
        <p className="max-w-[600px] text-gray block leading-[26px]">
          Ready to elevate your business with expert web development? I´m ready
          to bring my expertise in design and development to help you achieve
          your goals.
        </p>
        <div className="flex gap-4 justify-center">
          <MainButton href="">View GitHub</MainButton>
          <MainButton variant="primary" href="#contact">
            Get in Touch
          </MainButton>
        </div>
      </div>
    </section>
  );
}
