import About from "@/layouts/home/About";
import Contact from "@/layouts/home/Contact";
import Cta from "@/layouts/home/Cta";
import HomeBanner from "@/layouts/home/HomeBanner";

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <About />
      <Cta />
      <Contact />
    </main>
  );
}
