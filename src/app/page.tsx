import About from "@/layouts/home/About";
import Contact from "@/layouts/home/Contact";
import Cta from "@/layouts/home/Cta";
import HomeBanner from "@/layouts/home/HomeBanner";
import Skills from "@/layouts/home/Skills";

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <About />
      <Skills />
      <Cta />
      <Contact />
    </main>
  );
}
