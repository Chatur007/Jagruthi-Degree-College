import { createServerFn } from "@tanstack/react-start";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2),
  mobile: z.string().regex(/^[0-9]{10}$/),
  email: z.string().trim().email(),
  subject: z.string().trim().min(2),
  message: z.string().trim().min(5),
});

export const sendContactEmail = createServerFn({ method: "POST" })
  .inputValidator(contactSchema)
  .handler(async ({ data }) => {
    const { name, mobile, email, subject, message } = data;

    const mailUser = process.env.MAIL_USER;
    const mailPass = process.env.MAIL_PASS;

    if (!mailUser || !mailPass) {
      console.error("Missing MAIL_USER or MAIL_PASS in server environment variables");
      throw new Error("Email service is not configured on the server.");
    }

    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: mailUser,
          pass: mailPass,
        },
      });

      await transporter.sendMail({
        from: mailUser,
        to: mailUser,
        subject: `New Contact Inquiry - ${subject}`,
        html: `
          <h2>New Contact Form Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Mobile:</strong> ${mobile}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
        replyTo: email,
      });

      return { success: true };
    } catch (error: any) {
      console.error("Nodemailer Email Error:", error);
      throw new Error(error?.message || "Failed to send email");
    }
  });
