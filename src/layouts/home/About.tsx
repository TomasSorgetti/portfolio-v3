import HobbyIcon from "@/components/icons/HobbyIcon";
import MusicIcon from "@/components/icons/MusicIcon";
import PcIcon from "@/components/icons/PcIcon";
import WorldIcon from "@/components/icons/WorldIcon";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-[1080px] mx-auto flex flex-col items-start p-4 md:p-8"
    >
      <h2 className="text-gradient uppercase text-[48px] font-bold">
        About me
      </h2>
      <span className="text-gray">Buenos Aires Province, Argentina</span>
      <div className="mt-6 grid grid-cols-1 gap-4 grid-rows-5 md:grid-cols-2 md:grid-rows-3">
        {/* card 1 */}
        <div className="flex flex-col gap-16 h-[350px] bg-black p-8 rounded-[20px] hover:border-pink border-2 border-transparent cursor-pointer transition-all">
          <div className="flex items-center gap-[21px]">
            <HobbyIcon />
            <h3 className="uppercase">MY FAVORITES</h3>
          </div>
          <p className="text-gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            sapiente nulla, sint error odit, repellendus nemo perferendis minima
          </p>
        </div>

        {/* card 2 */}
        <div className="flex flex-col gap-16 h-full bg-black p-8 rounded-[20px] row-span-2 hover:border-pink border-2 border-transparent cursor-pointer transition-all">
          <div className="flex items-center gap-[21px]">
            <PcIcon />
            <h3 className="uppercase">MY JOURNEY</h3>
          </div>
          <p className="text-gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            sapiente nulla, sint error odit, repellendus nemo perferendis minima
          </p>
        </div>

        {/* card 3 */}
        <div className="flex flex-col gap-16 bg-black p-8 rounded-[20px] h-[350px] hover:border-pink border-2 border-transparent cursor-pointer transition-all">
          <div className="flex items-center gap-[21px]">
            <MusicIcon />
            <h3 className="uppercase">MY MUSIC PICKS</h3>
          </div>
          <p className="text-gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            sapiente nulla, sint error odit, repellendus nemo perferendis minima
          </p>
        </div>

        {/* card 4 */}
        <div className="flex flex-col gap-16 bg-black p-8 rounded-[20px] h-[350px] md:col-span-2 border-2 border-transparent hover:border-pink cursor-pointer transition-all">
          <div className="flex items-center gap-[21px]">
            <WorldIcon />
            <h3 className="uppercase">GET IN TOUCH</h3>
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
