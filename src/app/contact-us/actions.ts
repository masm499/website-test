"use server";

import nodemailer from "nodemailer";

export type FormState = {
  status: "idle" | "success" | "error";
  message: string;
  values: { name: string; email: string; company: string; message: string };
};

const EMPTY_VALUES = { name: "", email: "", company: "", message: "" };

const oneLine = (value: string) => value.replace(/[\r\n]+/g, " ");

export async function sendMessage(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const values = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    company: String(formData.get("company") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  const fail = (message: string): FormState => ({
    status: "error",
    message,
    values,
  });

  // Honeypot: real visitors never see or fill this field
  if (String(formData.get("website") ?? "")) {
    return {
      status: "success",
      message: "Thanks! Your message has been sent.",
      values: EMPTY_VALUES,
    };
  }

  if (!values.name || values.name.length > 100) {
    return fail("Please enter your name.");
  }
  if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email) ||
    values.email.length > 200
  ) {
    return fail("Please enter a valid email address.");
  }
  if (values.company.length > 150) {
    return fail("Company name is too long.");
  }
  if (values.message.length < 10 || values.message.length > 5000) {
    return fail("Please write a message between 10 and 5000 characters.");
  }

  const token = String(formData.get("cf-turnstile-response") ?? "");
  if (!token) {
    return fail("Please complete the captcha.");
  }

  try {
    const verifyResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY ?? "",
          response: token,
        }),
      },
    );
    const verification = (await verifyResponse.json()) as { success: boolean };
    if (!verification.success) {
      return fail("Captcha check failed. Please try again.");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const safeName = oneLine(values.name);

    await transporter.sendMail({
      from: `"innovative-aiagents website" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_TO_EMAIL ?? "innovations2000@gmail.com",
      replyTo: `"${safeName.replace(/"/g, "")}" <${values.email}>`,
      subject: `New enquiry from ${safeName}`,
      text: [
        `Name: ${safeName}`,
        `Email: ${values.email}`,
        `Company: ${oneLine(values.company) || "-"}`,
        "",
        values.message,
      ].join("\n"),
    });

    return {
      status: "success",
      message: "Thanks! Your message has been sent. I'll reply soon.",
      values: EMPTY_VALUES,
    };
  } catch (error) {
    console.error("Contact form error:", error);
    return fail(
      "Something went wrong while sending your message. Please try again later.",
    );
  }
}
