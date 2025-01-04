import LinkedinIcon from "@/components/icons/LinkedinIcon";
import BehanceIcon from "../components/icons/BehanceIcon";
import GitHubIcon from "@/components/icons/GitHubIcon";
export default function Footer() {
  return (
    <footer className="bg-black text-white w-full">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center px-4 md:px-8 xl:p-0">
        <div className="w-full flex flex-col gap-8 py-8 text-center lg:flex-row lg:justify-between">
          <a href="#" className="text-[38px] font-bold uppercase text-gradient">
            Tomás Sorgetti
          </a>

          <div className="flex flex-col gap-8 items-center md:flex-row md:items-start md:justify-between md:gap-24 lg:gap-52">
            <section
              className="flex flex-col gap-8 lg:items-start lg:text-left"
              aria-label="Contact info"
            >
              <address className="flex flex-col gap-4 not-italic">
                <span className="text-[32px] font-bold">Contact info</span>
                <a
                  className="text-gray"
                  href="mailto:tomassorgetti456@gmail.com"
                >
                  tomassorgetti456@gmail.com
                </a>
                <a className="text-gray" href="tel:+5491136323780">
                  (+54 9) 11 3632-3780
                </a>
              </address>

              <ul
                aria-label="Social media"
                className="flex gap-4 justify-center"
              >
                <li>
                  <a href="#" target="blank">
                    <BehanceIcon />
                  </a>
                </li>
                <li>
                  <a href="#" target="blank">
                    <LinkedinIcon />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/TomasSorgetti" target="blank">
                    <GitHubIcon />
                  </a>
                </li>
              </ul>
            </section>

            <nav aria-label="Company navigation flex flex-col gap-8  ">
              <span className="text-[32px] font-bold">Company</span>
              <ul className="flex flex-col gap-4 mt-4  lg:items-start lg:text-left">
                <li>
                  <a className="text-gray hover:text-white" href="#">
                    Projects
                  </a>
                </li>
                <li>
                  <a className="text-gray hover:text-white" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="text-gray hover:text-white" href="#">
                    Skills
                  </a>
                </li>
                <li>
                  <a className="text-gray hover:text-white" href="#">
                    Get in touch
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <small className="w-full text-center text-gray py-2 border-t border-gray">
          &copy; 2024. Tomás Sorgetti
        </small>
      </div>
    </footer>
  );
}
