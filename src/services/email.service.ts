import { createCustomError } from "@/utils/error";

export const sendEmail = async (formData: Record<string, string>) => {
  try {
    const response = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    console.log(response);

    if (!response.ok)
      throw createCustomError("Failed to send message.", 500, null);

    return { success: true, message: "Message sent successfully!" };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error sending contact form:", error);
      return {
        success: false,
        message: error.message || "There was an error. Please try again later.",
      };
    } else {
      console.error("An unknown error occurred:", error);
      return {
        success: false,
        message: "An unknown error occurred.",
      };
    }
  }
};
