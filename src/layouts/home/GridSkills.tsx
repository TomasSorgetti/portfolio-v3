/* eslint-disable */
import GridMotion from "@/components/gridMotion/GridMotion";
import { technologies } from "@/data/technologies";
import Image from "next/image";
import { JSX } from "react";

export default function GridSkills() {
  const items: JSX.Element[] = [];
  technologies.forEach(({ id, technology }) => {
    items.push(
      <div key={`skill1-${id}`}>
        <Image
          src={technology}
          alt="technology"
          width={131}
          height={80}
          unoptimized
          className="w-[131px] h-[80px] object-contain"
        />
      </div>
    );
  });
  technologies.forEach(({ id, technology }) => {
    items.push(
      <div key={`skill2-${id}`}>
        <Image
          src={technology}
          alt="technology"
          width={131}
          height={80}
          unoptimized
          className="w-[131px] h-[80px] object-contain"
        />
      </div>
    );
  });

  return (
    <section
      id="skills"
      className="my-32 flex flex-col items-center text-center"
    >
      <h2 className="uppercase text-gradient text-[42px] font-bold">Skills</h2>
      <p className="max-w-[468px] text-gray mt-4 mb-8 block leading-[26px]">
        Here’s a list of the technologies I’m passionate about. These are the
        tools that help me build the web the way I see it.
      </p>
      <GridMotion items={items} />
    </section>
  );
}
