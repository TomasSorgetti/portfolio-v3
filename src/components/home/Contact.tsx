import ContactForm from "@/components/ui/forms/contactForm/ContactForm";
export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 flex flex-col items-center text-center"
    >
      <h2 className="text-[42px] font-bold uppercase">
        Get in <span className="text-gradient">touch</span>
      </h2>
      <p className="max-w-[468px] text-gray mt-4 mb-8 block leading-[26px]">
        Have questions, need more information, or ready to start your project?
        Get in touch!
      </p>
      <ContactForm />
    </section>
  );
}
