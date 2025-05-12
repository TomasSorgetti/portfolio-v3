"use server";

import Contact from "@/components/home/Contact";
import Glitch from "@/components/home/glitch";
import WhoIAm from "@/components/home/WhoIAm";

export default async function Home() {
  return (
    <main>
      <Glitch />
      <WhoIAm />
      <Contact />
    </main>
  );
}
