"use server";

import About from "@/layouts/home/About";
import Contact from "@/layouts/home/Contact";
import HomeBanner from "@/layouts/home/HomeBanner";
import Skills from "@/layouts/home/Skills";
import Cta from "@/layouts/home/Cta";
import ProjectSlider from "@/components/sliders/ProjectSlider";
import { projectList } from "@/data/projects";

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
