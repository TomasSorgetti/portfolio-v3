"use service";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { handleErrorResponse } from "@/lib/utils/error";

const { EMAIL_USER, EMAIL_TO, EMAIL_PASSWORD } = process.env;

const POST = async (req: Request) => {
  try {
    const body = await req.json();

    const { name, email, message } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: EMAIL_TO,
      subject: `Contacto desde el formulario de ${name}`,
      text: `
        Nombre: ${name}
        Correo: ${email}
        Mensaje: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Mail sent successfully" });
  } catch (error) {
    return handleErrorResponse(error as Error, "Error sending mail");
  }
};

export { POST };
