import MainButton from "@/components/buttons/MainButton";

export default function Navbar() {
  return (
    <header className="w-full py-6 px-4">
      <nav className="w-full max-w-[1440px] mx-auto flex justify-between items-center">
        <a className="uppercase font-bold text-gradient" href="#">
          Tomás Sorgetti
        </a>
        <ul className="flex gap-6">
          <li className="flex items-center">
            <a className="uppercase" href="#">
              Projects
            </a>
          </li>
          <li className="flex items-center">
            <a className="uppercase" href="#">
              About me
            </a>
          </li>
          <li className="flex items-center">
            <a className="uppercase" href="#">
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
