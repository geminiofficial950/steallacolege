import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, postcode, phone, country, countryCode, dialCode, captchaToken } = body;

    console.log("Received form data:", {
      fullName,
      email,
      postcode,
      phone,
      country,
      countryCode,
      dialCode,
      captchaToken,
    });

    // Verify reCAPTCHA token
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
      { method: "POST" }
    );
    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success) {
      console.error("reCAPTCHA verification failed:", recaptchaData);
      return NextResponse.json(
        { error: "reCAPTCHA verification failed" },
        { status: 400 }
      );
    }

    // Create transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

    // Verify transporter configuration
    await transporter.verify();
    console.log("SMTP connection verified successfully");

    // Email content with improved formatting
    const mailOptions = {
      from: `"Stella College" <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Course Enquiry from ${fullName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #4CAF50; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
            .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-radius: 0 0 5px 5px; }
            .field { margin-bottom: 15px; padding: 10px; background-color: white; border-left: 3px solid #4CAF50; }
            .label { font-weight: bold; color: #555; display: block; margin-bottom: 5px; }
            .value { color: #333; }
            .footer { text-align: center; margin-top: 20px; color: #777; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Course Enquiry</h2>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Full Name:</span>
                <span class="value">${fullName}</span>
              </div>
              <div class="field">
                <span class="label">Email:</span>
                <span class="value">${email}</span>
              </div>
              <div class="field">
                <span class="label">Phone Number:</span>
                <span class="value">${phone || 'Not provided'}</span>
              </div>
              <div class="field">
                <span class="label">Country:</span>
                <span class="value">${country} (${countryCode})</span>
              </div>
              <div class="field">
                <span class="label">Dial Code:</span>
                <span class="value">+${dialCode}</span>
              </div>
              <div class="field">
                <span class="label">Postcode:</span>
                <span class="value">${postcode}</span>
              </div>
              <div class="field">
                <span class="label">Submitted at:</span>
                <span class="value">${new Date().toLocaleString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}</span>
              </div>
            </div>
            <div class="footer">
              <p>This enquiry was submitted through your course enquiry form.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);

    return NextResponse.json({ 
      success: true, 
      message: "Email sent successfully",
      messageId: info.messageId 
    });
  } catch (error) {
    console.error("Error sending email:", error);
    
    return NextResponse.json(
      { 
        error: "Failed to send email", 
        details: error instanceof Error ? error.message : "Unknown error" 
      },
      { status: 500 }
    );
  }
}