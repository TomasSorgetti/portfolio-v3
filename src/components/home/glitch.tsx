import Image from "next/image";

export default function Glitch() {
  return (
    <section className="max-w-[1024px] mx-auto py-32 text-center flex flex-col items-center gap-8 px-4">
      <h2 className="uppercase font-bold text-2xl md:text-3xl lg:text-5xl lg:max-w-[500px]">
        Step Into Glitch Design Lab’s Glow
      </h2>
      <p className="max-w-[466px] text-black mb-8 block leading-[26px]">
        I co-founded a space where daring ideas morph into web creations that
        pulse with life. Come see what we’re bringing to light!
      </p>
      <a
        href="https://glitchdesignlab.com"
        target="_blank"
        rel="noopener noreferrer"
        title="Visit Glitch Design Lab"
        aria-label="Visit Glitch Design Lab"
        className="group relative max-w-[1024px] mx-auto rounded-[60px] overflow-hidden hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
      >
        <Image
          src="/images/glitch/glitch.png"
          alt="glitch"
          width={1280}
          height={749}
          draggable="false"
          loading="eager"
          priority
          className="w-full object-cover transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:from-transparent" />
      </a>
    </section>
  );
}
