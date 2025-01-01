import MainButton from "@/components/buttons/MainButton";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full py-6 px-4">
      <nav className="w-full max-w-[1440px] mx-auto flex justify-between items-center">
        <a className="uppercase font-bold text-gradient" href="#">
          Tomás Sorgetti
        </a>
        <ul className="gap-6 hidden lg:flex">
          <li className="flex items-center">
            <a className="uppercase" href="#projects">
              Projects
            </a>
          </li>
          <li className="flex items-center">
            <a className="uppercase" href="#about">
              About me
            </a>
          </li>
          <li className="flex items-center">
            <a className="uppercase" href="#skills">
              Skills
            </a>
          </li>
          <li>
            <MainButton href="#contact">Get in Touch</MainButton>
          </li>
        </ul>
      </nav>
    </header>
  );
}
