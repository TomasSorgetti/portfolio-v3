import ContactForm from "@/components/ui/forms/contactForm/ContactForm";
export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 max-w-[1024px] mx-auto flex flex-col items-center text-center lg:flex-row lg:justify-between lg:items-start lg:text-left"
    >
      <div>
        <h2 className="font-bold uppercase max-w-[468px] text-2xl md:text-3xl lg:text-5xl">
          Frame the Next Step
        </h2>
        <p className="max-w-[468px] text-gray mt-4 mb-8 block leading-[26px]">
          I turn ideas into bold realities with code and creativity. Got a spark
          to ignite? Let’s make something epic together, say hi!
        </p>
      </div>
      <ContactForm />
    </section>
  );
}
