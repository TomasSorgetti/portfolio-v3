import MainButton from "@/components/buttons/MainButton";

export default function Cta() {
  return (
    <section className="relative flex justify-center items-center h-screen bg-[url('/images/cta/bg.png')] bg-cover bg-center bg-no-repeat">
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
          <a
            className="uppercase border border-white py-4 px-8 rounded-full hover:bg-white hover:text-black hover:shadow-[0px_0px_20px_0px_rgba(255,255,255,0.1)]"
            href="https://github.com/TomasSorgetti"
            target="blank"
          >
            View GitHub
          </a>
          <MainButton variant="primary" href="#contact" target="_self">
            Get in Touch
          </MainButton>
        </div>
      </div>
    </section>
  );
}
