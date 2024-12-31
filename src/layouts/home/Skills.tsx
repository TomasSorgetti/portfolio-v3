import { technologies } from "@/data/technologies";

export default function Skills() {
  return (
    <section className="my-32 max-w-[1080px] mx-auto p-4 md:p-8 flex flex-col items-center text-center">
      <h2 className="text-gradient text-[42px] font-bold">Skills</h2>
      <p className="max-w-[468px] text-gray mt-4 mb-8 block leading-[26px]">
        Here’s a list of the technologies I’m passionate about. These are the
        tools that help me build the web the way I see it.
      </p>

      <div className="my-10 max-w-md md:max-w-lg lg:max-w-2xl mx-auto">
        <div className="relative w-full mx-auto max-w-4xl opacity-90 dark:opacity-70 overflow-hidden px-5 lg:px-12 flex justify-center items-center gap-4 lg:gap-8">
          {/* Pseudo-elemento de fondo con gradiente */}
          <div className="absolute inset-0 w-full bg-[linear-gradient(to_right, hsl(var(--background-default))_0%, transparent_10%, transparent_90%, hsl(var(--background-default))_100%)] z-10"></div>

          <ul className="flex gap-4 lg:gap-8 animate-marquee w-fit">
            {technologies.map(({ id, technology }) => {
              return (
                <li
                  key={`skill1-${id}`}
                  className="h-12 lg:h-12 w-max !inline-block"
                >
                  {technology}
                </li>
              );
            })}
          </ul>

          <ul className="flex gap-4 lg:gap-8 animate-marquee w-fit">
            {technologies.map(({ id, technology }) => {
              return (
                <li
                  key={`skill1-${id}`}
                  className="h-12 lg:h-12 w-max !inline-block"
                >
                  {technology}
                </li>
              );
            })}
          </ul>

          <ul className="flex gap-4 lg:gap-8 animate-marquee w-fit">
            {technologies.map(({ id, technology }) => {
              return (
                <li
                  key={`skill1-${id}`}
                  className="h-12 lg:h-12 w-max !inline-block"
                >
                  {technology}
                </li>
              );
            })}
          </ul>

          <ul className="flex gap-4 lg:gap-8 animate-marquee w-fit">
            {technologies.map(({ id, technology }) => {
              return (
                <li
                  key={`skill1-${id}`}
                  className="h-12 lg:h-12 w-max !inline-block"
                >
                  {technology}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
