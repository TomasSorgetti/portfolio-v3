export function validateForm(data) {
  const errors = {
    name: "",
    email: "",
    message: "",
  };

  const name = data.name || "";
  const email = data.email || "";
  const message = data.message || "";

  //* Name validation
  if (name.trim() === "") {
    errors.name = "Name is required";
  } else if (name.length < 3) {
    errors.name = "Name must be at least 3 characters long";
  }

  //* Email validation
  if (email.trim() === "") {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "Invalid email format";
  }

  //* Message validation
  if (message.trim() === "") {
    errors.message = "Message is required";
  }

  return errors;
}
