"use client";

import FormField from "../FormField";
import { useState } from "react";
import { validateForm } from "./contact.validation";
import { sendEmail } from "@/lib/services/email.service";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const [errorData, setErrorData] = useState({
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrorData((prev) => ({ ...prev, [name]: "" }));
  };

  const handleBlur = async (event) => {
    const { name, value } = event.target;

    const validationErrors = validateForm({ [name]: value });
    setErrorData((prev) => ({ ...prev, [name]: validationErrors[name] || "" }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateForm(formData);
    setErrorData(validationErrors);

    if (Object.values(validationErrors).some((error) => error !== "")) return;

    setIsLoading(true);

    await sendEmail(formData)
      .then(() => {
        setFormData({
          email: "",
          message: "",
        });
        setErrorData({
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error sending contact form:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center max-w-[460px] min-w-[300px] w-full"
    >
      <FormField
        id="contact-email"
        label=""
        placeholder="johnDoe@example.com"
        name="email"
        type="text"
        autocomplete="email"
        value={formData.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errorData.email}
      />
      <FormField
        id="contact-message"
        label=""
        placeholder="Your message here..."
        name="message"
        type="text"
        autocomplete="off"
        value={formData.message}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errorData.message}
      />
      <button
        className="bg-black text-white mt-2 py-4 w-full rounded-2xl uppercase hover:shadow-xl font-bold text-2xl"
        type="submit"
        disabled={isLoading}
        aria-busy={isLoading}
        aria-live="polite"
        aria-label="Get in touch"
        aria-disabled={isLoading}
        title="Get in touch"
        aria-pressed={isLoading}
        tabIndex={isLoading ? -1 : 0}
      >
        {isLoading ? "Sending..." : "Get in Touch"}
      </button>
      <small className="text-gray mt-4">
        You can send an email to tomassorgetti456@gmail.com
      </small>
    </form>
  );
}
