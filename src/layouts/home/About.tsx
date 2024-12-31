import HobbyIcon from "@/components/icons/HobbyIcon";
import MusicIcon from "@/components/icons/MusicIcon";
import PcIcon from "@/components/icons/PcIcon";
import WorldIcon from "@/components/icons/WorldIcon";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-[1080px] mx-auto flex flex-col items-start"
    >
      <h2 className="text-gradient uppercase text-[48px] font-bold">
        About me
      </h2>
      <span className="text-gray">Buenos Aires, Argentina</span>
      <div className="mt-6 grid grid-cols-2 gap-4 grid-rows-4">
        {/* card 1 */}
        <div className="flex flex-col gap-16 h-[350px] bg-black p-8 rounded-[20px] row-span-1">
          <div className="flex items-center gap-[21px]">
            <HobbyIcon />
            <h3 className="uppercase">pasatiempos</h3>
          </div>
          <p className="text-gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            sapiente nulla, sint error odit, repellendus nemo perferendis minima
          </p>
        </div>

        {/* card 2 */}
        <div className="flex flex-col gap-16 h-full bg-black p-8 rounded-[20px] row-span-2 col-span-1">
          <div className="flex items-center gap-[21px]">
            <PcIcon />
            <h3 className="uppercase">pasatiempos</h3>
          </div>
          <p className="text-gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            sapiente nulla, sint error odit, repellendus nemo perferendis minima
          </p>
        </div>

        {/* card 3 */}
        <div className="flex flex-col gap-16 bg-black p-8 rounded-[20px] h-[350px] row-span-1">
          <div className="flex items-center gap-[21px]">
            <MusicIcon />
            <h3 className="uppercase">pasatiempos</h3>
          </div>
          <p className="text-gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            sapiente nulla, sint error odit, repellendus nemo perferendis minima
          </p>
        </div>

        {/* card 4 */}
        <div className="flex flex-col gap-16 bg-black p-8 rounded-[20px] h-[350px] col-span-2">
          <div className="flex items-center gap-[21px]">
            <WorldIcon />
            <h3 className="uppercase">pasatiempos</h3>
          </div>
          <p className="text-gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            sapiente nulla, sint error odit, repellendus nemo perferendis minima
          </p>
        </div>
      </div>
    </section>
  );
}
