import { createCustomError } from "@/utils/error";

<<<<<<< HEAD
export const sendEmail = async (formData: Record<string, string>) => {
=======
export const sendEmail = async (formData: {
  name: string;
  email: string;
  message: string;
}) => {
>>>>>>> 50e26751329e18e63b5d87c62260bc5f1760d5af
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
<<<<<<< HEAD
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
=======
  } catch (error) {
    const errorAsError = error as Error;
    console.error("Error sending contact form:", errorAsError);
    return {
      success: false,
      message:
        errorAsError.message || "There was an error. Please try again later.",
    };
>>>>>>> 50e26751329e18e63b5d87c62260bc5f1760d5af
  }
};
