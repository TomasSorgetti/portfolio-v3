import { createCustomError } from "@/utils/error";

export const sendEmail = async (formData: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const response = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok)
      throw createCustomError("Failed to send message.", 500, null);

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    const errorAsError = error as Error;
    console.error("Error sending contact form:", errorAsError);
    return {
      success: false,
      message:
        errorAsError.message || "There was an error. Please try again later.",
    };
  }
};
