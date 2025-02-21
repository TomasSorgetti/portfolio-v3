"use server";

import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import HomeBanner from "@/components/home/HomeBanner";
import Skills from "@/components/home/Skills";
import Cta from "@/components/home/Cta";
import ProjectSlider from "@/components/ui/sliders/ProjectSlider";
import { projectList } from "@/lib/data/projects";

export default async function Home() {
  return (
    <main>
      <HomeBanner />
      <ProjectSlider list={projectList} />
      <About />
      <Skills />
      <Cta />
      <Contact />
    </main>
  );
}
