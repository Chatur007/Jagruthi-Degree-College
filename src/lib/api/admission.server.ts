import { createServerFn } from "@tanstack/react-start";
import nodemailer from "nodemailer";
import { z } from "zod";

const admissionSchema = z.object({
  fullName: z.string().trim().min(2),
  gender: z.string().min(1),
  dob: z.string().min(1),
  mobile: z.string().regex(/^[0-9]{10}$/),
  email: z.string().trim().email(),
  qualification: z.string().trim().min(2),
  percentage: z.string().regex(/^\d{1,3}(\.\d+)?$/),
  passingYear: z.string().regex(/^\d{4}$/),
  course: z.string().trim().min(1),
  address: z.string().trim().min(3),
  city: z.string().trim().min(2),
  state: z.string().trim().min(2),
  pin: z.string().regex(/^\d{6}$/),
});

export const sendAdmissionEmail = createServerFn({ method: "POST" })
  .inputValidator(admissionSchema)
  .handler(async ({ data }) => {
    const {
      fullName,
      gender,
      dob,
      mobile,
      email,
      qualification,
      percentage,
      passingYear,
      course,
      address,
      city,
      state,
      pin,
    } = data;

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
        subject: `New Admission Application - ${fullName}`,
        html: `
          <h2>New Admission Application</h2>
          <h3>Personal Details</h3>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Gender:</strong> ${gender}</p>
          <p><strong>Date of Birth:</strong> ${dob}</p>
          <p><strong>Mobile:</strong> ${mobile}</p>
          <p><strong>Email:</strong> ${email}</p>

          <h3>Academic Details</h3>
          <p><strong>Qualification:</strong> ${qualification}</p>
          <p><strong>Percentage:</strong> ${percentage}</p>
          <p><strong>Passing Year:</strong> ${passingYear}</p>

          <h3>Course Details</h3>
          <p><strong>Course:</strong> ${course}</p>

          <h3>Address Details</h3>
          <p><strong>Address:</strong> ${address}</p>
          <p><strong>City:</strong> ${city}</p>
          <p><strong>State:</strong> ${state}</p>
          <p><strong>PIN Code:</strong> ${pin}</p>
        `,
        replyTo: email,
      });

      return { success: true };
    } catch (error: any) {
      console.error("Nodemailer Email Error:", error);
      throw new Error(error?.message || "Failed to send email");
    }
  });
