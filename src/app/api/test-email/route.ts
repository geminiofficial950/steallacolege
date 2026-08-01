import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET() {
  try {
    console.log("Testing email configuration...");
    
    // Check environment variables
    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_APP_PASSWORD = process.env.EMAIL_APP_PASSWORD;
    const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL;

    console.log("EMAIL_USER:", EMAIL_USER);
    console.log("EMAIL_APP_PASSWORD:", EMAIL_APP_PASSWORD ? "***SET***" : "NOT SET");
    console.log("RECIPIENT_EMAIL:", RECIPIENT_EMAIL);

    if (!EMAIL_USER || !EMAIL_APP_PASSWORD || !RECIPIENT_EMAIL) {
      return NextResponse.json({ 
        error: "Missing email configuration",
        config: {
          EMAIL_USER: !!EMAIL_USER,
          EMAIL_APP_PASSWORD: !!EMAIL_APP_PASSWORD,
          RECIPIENT_EMAIL: !!RECIPIENT_EMAIL
        }
      }, { status: 500 });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_APP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Test connection
    console.log("Testing SMTP connection...");
    await transporter.verify();
    console.log("SMTP connection successful!");

    // Send test email
    const mailOptions = {
      from: `"Test Email" <${EMAIL_USER}>`,
      to: RECIPIENT_EMAIL,
      subject: `🧪 Newsletter System Test - ${new Date().toLocaleString()}`,
      html: `
        <h2>✅ Newsletter System Test Successful!</h2>
        <p>This is a test email to verify your newsletter system is working correctly.</p>
        <p><strong>Sent at:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>From:</strong> ${EMAIL_USER}</p>
        <p><strong>To:</strong> ${RECIPIENT_EMAIL}</p>
        <hr>
        <p><em>If you received this email, your newsletter subscription system is working perfectly!</em></p>
      `,
    };

    console.log("Sending test email...");
    await transporter.sendMail(mailOptions);
    console.log("Test email sent successfully!");

    return NextResponse.json({ 
      success: true, 
      message: "Test email sent successfully!",
      config: {
        from: EMAIL_USER,
        to: RECIPIENT_EMAIL,
        timestamp: new Date().toLocaleString()
      }
    });

  } catch (error) {
    console.error("Test email error:", error);
    return NextResponse.json(
      { 
        error: "Test email failed", 
        details: error instanceof Error ? error.message : "Unknown error",
        timestamp: new Date().toLocaleString()
      },
      { status: 500 }
    );
  }
}