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
    errors.name = "El nombre es obligatorio";
  } else if (name.length < 3) {
    errors.name = "El nombre debe tener al menos 3 caracteres";
  }

  //* Email validation
  if (email.trim() === "") {
    errors.email = "El email es obligatorio";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "El email no es válido";
  }

  //* Message validation
  if (message.trim() === "") {
    errors.message = "El mensaje es obligatorio";
  }

  return errors;
}
