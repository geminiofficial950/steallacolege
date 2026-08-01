import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    let body;
    try {
      body = await req.json();
    } catch (parseError) {
      console.error("Failed to parse JSON:", parseError);
      return NextResponse.json({ error: "Invalid JSON in request body" }, { status: 400 });
    }

    console.log("Newsletter API received body:", body);
    
    // Handle both 'user_email' and 'email' field names for flexibility
    const user_email = body.user_email || body.email;

    console.log("Extracted user_email:", user_email);

    if (!user_email || user_email.trim() === '') {
      console.log("No user_email found in request or empty email");
      return NextResponse.json({ 
        error: "Email is required", 
        debug: {
          received_body: body,
          user_email_value: user_email,
          user_email_type: typeof user_email,
          body_keys: Object.keys(body || {}),
          available_fields: {
            user_email: body.user_email,
            email: body.email
          }
        }
      }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user_email)) {
      return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 });
    }

    // Validate environment variables
    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_APP_PASSWORD = process.env.EMAIL_APP_PASSWORD;
    const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL;

    if (!EMAIL_USER || !EMAIL_APP_PASSWORD || !RECIPIENT_EMAIL) {
      console.error("Missing email configuration:", { 
        EMAIL_USER: !!EMAIL_USER, 
        EMAIL_APP_PASSWORD: !!EMAIL_APP_PASSWORD, 
        RECIPIENT_EMAIL: !!RECIPIENT_EMAIL 
      });
      return NextResponse.json({ 
        error: 'Email credentials not configured. Set EMAIL_USER, EMAIL_APP_PASSWORD, and RECIPIENT_EMAIL in .env.local and restart the dev server.' 
      }, { status: 500 });
    }

    // Create transporter with robust Gmail configuration
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

    // Verify connection
    try {
      await transporter.verify();
      console.log("Newsletter SMTP connection verified successfully");
    } catch (verifyError) {
      console.error("Newsletter SMTP verification failed:", verifyError);
      return NextResponse.json({ 
        error: "Email server connection failed", 
        details: verifyError instanceof Error ? verifyError.message : "Unknown verification error" 
      }, { status: 500 });
    }

    // Email structure
    const mailOptions = {
      from: `"Newsletter Subscription" <${EMAIL_USER}>`,
      to: RECIPIENT_EMAIL,
      subject: `New Newsletter Subscription`,
      html: `
        <h2>🎉 New Newsletter Subscription!</h2>
        <p><strong>Email:</strong> ${user_email}</p>
        <p><strong>Subscribed on:</strong> ${new Date().toLocaleString()}</p>
        <hr>
        <p><em>This subscriber is interested in receiving updates about courses and educational content.</em></p>
      `,
    };

    // Send email
    console.log("Sending newsletter subscription email...");
    const emailResult = await transporter.sendMail(mailOptions);
    console.log("Newsletter email sent successfully:", emailResult.messageId);

    return NextResponse.json({ 
      success: true, 
      message: "Successfully subscribed to newsletter!",
      timestamp: new Date().toLocaleString()
    });
  } catch (error) {
    console.error("Error sending newsletter email:", error);
    return NextResponse.json(
      { 
        error: "Failed to subscribe to newsletter", 
        details: error instanceof Error ? error.message : "Unknown error" 
      },
      { status: 500 }
    );
  }
}