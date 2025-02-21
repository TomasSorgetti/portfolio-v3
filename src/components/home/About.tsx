import HobbyIcon from "@/components/ui/icons/HobbyIcon";
import MusicIcon from "@/components/ui/icons/MusicIcon";
import PcIcon from "@/components/ui/icons/PcIcon";
import WorldIcon from "@/components/ui/icons/WorldIcon";
import Image from "next/image";
import GmailIcon from "@/components/ui/icons/GmailIcon";
import WhatsappIcon from "@/components/ui/icons/WhatsappIcon";
import BehanceIcon from "@/components/ui/icons/BehanceIcon";
import GitHubIcon from "@/components/ui/icons/GitHubIcon";
import LinkedinIcon from "@/components/ui/icons/LinkedinIcon";
import MainCard from "@/components/ui/cards/mainCard/MainCard";

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
        <MainCard className="flex flex-col gap-16 h-[350px] bg-black p-8 rounded-[20px] hover:border-dark_gray border-2 border-transparent cursor-pointer transition-all">
          <div className="flex items-center gap-[21px]">
            <PcIcon />
            <h3 className="uppercase">MY JOURNEY</h3>
          </div>
          <p className="text-gray">
            It all started with a spark—an interest in how things work behind
            the screen. From experimenting with HTML in my free time to
            developing full-fledged web applications, my journey has been one of
            exploration, challenges, and growth. And the story is far from over!
          </p>
        </MainCard>

        {/* card 2 */}
        <MainCard className="relative flex flex-col gap-16 h-full bg-black p-8 rounded-[20px] row-span-2 hover:border-dark_gray border-2 border-transparent cursor-pointer transition-all group">
          <div className="flex items-center gap-[21px]">
            <HobbyIcon />
            <h3 className="uppercase">MY FAVORITES</h3>
          </div>
          <p className="text-gray">
            I’m a big fan of video games, cats, music, and of course, coding.
            These are the things that keep me inspired and motivated every day.
            But above all, what I love the most is my cat, Katy—my constant
            companion and source of joy.
          </p>
          <Image
            src="/images/about/katy.png"
            alt="my adorable cat"
            width={368.33}
            height={373.17}
            className="w-[368.33px] h-[373.17px] object-contain absolute bottom-0 right-0 filter grayscale transition-all duration-500 group-hover:grayscale-0"
          />
        </MainCard>

        {/* card 3 */}
        <MainCard className="flex flex-col gap-16 bg-black p-8 rounded-[20px] h-[350px] hover:border-dark_gray border-2 border-transparent cursor-pointer transition-all">
          <div className="flex items-center gap-[21px]">
            <MusicIcon />
            <h3 className="uppercase">MY MUSIC PICKS</h3>
          </div>
          <p className="text-gray">
            I’m a fan of a variety of music genres, including rock and roll,
            jazz, and classical. Each one brings its own vibe and inspiration.
          </p>
        </MainCard>

        {/* card 4 */}
        <MainCard className="flex flex-col gap-10 bg-black p-8 rounded-[20px] h-[350px] md:flex-row md:gap-32 md:items-center md:col-span-2 border-2 border-transparent hover:border-dark_gray cursor-pointer transition-all">
          <div className="flex flex-col gap-16 md:h-full md:items-start">
            <div className="flex items-center gap-[21px]">
              <WorldIcon />
              <h3 className="uppercase">GET IN TOUCH</h3>
            </div>
            <p className="text-gray max-w-[430px]">
              I’d love to hear from you! Whether it’s a question, a
              collaboration idea, or just to say hi, don’t hesitate to reach
              out.
            </p>
          </div>
          <ul className="flex flex-col gap-2">
            <li className="text-gray flex items-center gap-2 icon-hover">
              <GmailIcon />
              tomassorgetti456@gmail.com
            </li>
            <li className="text-gray flex items-center gap-2 icon-hover">
              <WhatsappIcon />
              (+54) 11 3632 3780
            </li>
            <li className="text-gray flex items-center gap-2 icon-hover">
              <BehanceIcon />
              Behance
            </li>
            <li className="text-gray flex items-center gap-2 icon-hover">
              <LinkedinIcon />
              Linkedin
            </li>
            <li className="text-gray flex items-center gap-2 icon-hover">
              <GitHubIcon />
              GitHub
            </li>
          </ul>
        </MainCard>
      </div>
    </section>
  );
}
