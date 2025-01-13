"use client";

import FormField from "../formField/FormField";
import { useState } from "react";
import { validateForm } from "./contact.validation";
import { sendEmail } from "@/services/email.service";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorData, setErrorData] = useState({
    name: "",
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
    setIsLoading(true);
    await sendEmail(formData).then(() => {
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setErrorData({
        name: "",
        email: "",
        message: "",
      });
      setIsLoading(false);
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center max-w-[500px] min-w-[300px] w-full mt-8"
    >
      <FormField
        id="contact-name"
        label="Name:"
        placeholder="John Doe"
        name="name"
        type="text"
        autocomplete="name"
        value={formData.name}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errorData.name}
      />
      <FormField
        id="contact-email"
        label="Email:"
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
        label="Message:"
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
        type="submit"
        className="w-full text-white py-4 px-8 mt-8 bg-gradient shadow rounded-md uppercase font-bold transition-all"
        disabled={isLoading}
      >
        Get in Touch
      </button>
    </form>
  );
}
