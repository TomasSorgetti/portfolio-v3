export default function Cta() {
  return (
    <section className="relative flex flex-col justify-center items-center text-center gap-8 w-full max-w-[1080px] mx-auto py-32 rounded-[60px] bg-gradient-to-r from-[#8803FF] to-[#F469E2]">
      <h2 className="text-[42px] font-bold uppercase">
        DISCOVER GLITCH DESIGN LAB
      </h2>
      <p className="max-w-[600px] text-white block leading-[26px]">
        Co-founded a venture to craft scalable, modern web solutions with React,
        Next.js, and Node.js. Check out what we’re building!
      </p>
      <a
        className="uppercase font-bold py-4 bg-white text-black px-8 hover:shadow-[0px_0px_16px_0px_rgba(0,0,0,0.4)] transition-all duration-450 ease-in-out rounded-full"
        href="https://glitchdesignlab.com"
        target="_blank"
        rel="noopener noreferrer"
        title="Visit Glitch Design Lab"
        aria-label="Visit Glitch Design Lab"
      >
        Visit Glitch
      </a>
    </section>
  );
}
