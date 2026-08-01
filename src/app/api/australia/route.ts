import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_APP_PASSWORD:", process.env.EMAIL_APP_PASSWORD);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { user_name, user_email, user_phone, australian, postcode } = body;

    if (!user_name || !user_email ||!user_phone || !postcode) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // ✅ Create transporter
   const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});


    // Verify connection
    await transporter.verify();

    // ✅ Email structure
    const mailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Contact Message from ${user_name}`,
      html: `
        <h2>New Contact Form Submission For CHC33021 Certificate III in Individual Support (Ageing & Disability) (R1) </h2>
        <p><strong>Name:</strong> ${user_name}</p>
        <p><strong>Email:</strong> ${user_email}</p>
        <p><strong>Phone:</strong> ${user_phone || "N/A"}</p>
        <p><strong>Australian:</strong> ${australian}</p>
        <p><strong>PostCode:</strong> ${postcode || "N/A"}</p>
        <p>Submitted on: ${new Date().toLocaleString()}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
