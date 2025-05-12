import Image from "next/image";

export default function WhoIAm() {
  return (
    <section className="max-w-[1024px] mx-auto py-32 text-center flex flex-col items-center gap-8 px-4">
      <h2 className="uppercase font-bold text-2xl md:text-3xl lg:text-5xl lg:max-w-[437px]">
        Who I Am Off the Screen
      </h2>
      <p className="max-w-[466px] text-black mb-8 block leading-[26px]">
        I live for building what matters, fueled by endless curiosity and a good
        playlist. Let’s swap stories sometime.
      </p>

      <div className="text-left grid grid-cols-1 md:grid-cols-3 gap-2">
        {/* Card 1 */}
        <div className="border-[1px] border-[#E6E6E6] rounded-[50px] shadow-md px-8 py-12 w-full md:col-span-2 lg:py-16">
          <h3 className="font-bold uppercase mb-8 text-2xl lg:text-3xl">
            Off the Grid
          </h3>
          <p className="max-w-[400px]">
            When I step away from screens, I’m brewing the perfect pour-over or
            sketching random thoughts. It’s where I recharge and dream bigger.
          </p>
        </div>

        {/* Card 2 */}
        <div className="border-[1px] border-[#E6E6E6] rounded-[50px] shadow-md px-8 py-12 w-full md:col-span-1 lg:py-16">
          <h3 className="font-bold uppercase mb-8 text-2xl lg:text-3xl">
            What Lights Me Up
          </h3>
          <p>
            I thrive on turning wild ideas into sleek, living solutions. Every
            line of code and pixel I tweak is a chance to make something click.
          </p>
        </div>

        {/* Card 3 */}
        <div className="border-[1px] border-[#E6E6E6] rounded-[50px] shadow-md px-8 py-12 w-full md:col-span-1 lg:py-16">
          <h3 className="font-bold uppercase mb-8 text-2xl lg:text-3xl">
            Why I Build
          </h3>
          <p>
            I’m hooked on crafting things that feel effortless and spark joy.
            Let’s shape ideas that stick with people long after they scroll.
          </p>
        </div>

        {/* Discord Card */}
        <div className="bg-[#5865F2] text-white border-[1px] border-[#E6E6E6] rounded-[50px] shadow-md px-8 py-12 w-full flex flex-col items-center md:col-span-2 lg:py-16 lg:flex-row lg:gap-8">
          <Image
            src="/images/whoiam/discord.png"
            alt="discord icon"
            width={282}
            height={222}
            draggable={false}
            loading="lazy"
            className="object-contain lg:w-[200px]"
          />

          <div className="text-center flex flex-col items-center lg:items-start lg:text-left">
            <h3 className="font-bold uppercase mb-8 text-2xl lg:text-3xl">
              Fancy a Chat?
            </h3>
            <p className="max-w-[300px]">
              Hit me up on Discord for a quick game, a coding jam, or just to
              shoot the breeze. I’m always up for a good vibe.
            </p>
            <a
              href="#"
              target="_blank"
              className="uppercase bg-white text-black font-bold py-3 px-10 rounded-full mt-8 inline-block hover:shadow-[0px_2px_10px_0px_rgba(0,0,0,0.2)] transition-all duration-450 ease-in-out"
            >
              Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
