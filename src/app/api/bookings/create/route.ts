// app/api/bookings/create/route.ts  (Next.js App Router)
// ─── OR ──────────────────────────────────────────────────
// pages/api/bookings/create.ts      (Next.js Pages Router)
// ============================================================
// Install:  npm install nodemailer
//           npm install --save-dev @types/nodemailer
// ============================================================

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ── Types ─────────────────────────────────────────────────────────────────────
interface BookingPayload {
  name: string;
  email: string;
  notes?: string;
  date: string;       // e.g. "Wednesday, 25 February 2026"
  time: string;       // e.g. "09:00 AM"
  timezone: string;   // e.g. "Asia/Calcutta"
}

// ── Nodemailer transporter ────────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,           // your Gmail address
    pass: process.env.EMAIL_APP_PASSWORD,   // Gmail App Password (16 chars)
  },
});

// ── Email: Confirmation to Student ───────────────────────────────────────────
function studentEmailHTML(data: BookingPayload): string {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  </head>
  <body style="margin:0;padding:0;background:#f4f6fb;font-family:'Segoe UI',Arial,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6fb;padding:40px 20px;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(27,58,107,.1);max-width:600px;width:100%;">

            <!-- Header -->
            <tr>
              <td style="background:#1B3A6B;padding:32px 40px;text-align:center;">
                <h1 style="color:#ffffff;margin:0;font-size:22px;font-weight:700;letter-spacing:-.3px;">
                  Stella College
                </h1>
                <p style="color:#a8bbdc;margin:4px 0 0;font-size:13px;">Institute of Education</p>
              </td>
            </tr>

            <!-- Green check banner -->
            <tr>
              <td style="background:#E8EEF7;padding:24px 40px;text-align:center;border-bottom:1px solid #dce6f5;">
                <div style="width:56px;height:56px;background:#1B3A6B;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;margin-bottom:12px;">
                  <span style="color:#fff;font-size:26px;">✓</span>
                </div>
                <h2 style="color:#1B3A6B;margin:0;font-size:20px;font-weight:700;">
                  Booking Confirmed!
                </h2>
                <p style="color:#4b6a9b;margin:6px 0 0;font-size:14px;">
                  We look forward to meeting you, ${data.name.split(" ")[0]}!
                </p>
              </td>
            </tr>

            <!-- Booking details -->
            <tr>
              <td style="padding:32px 40px;">
                <h3 style="color:#1B3A6B;font-size:15px;margin:0 0 16px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;">
                  Your Appointment Details
                </h3>

                <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6fb;border-radius:10px;overflow:hidden;">
                  <tr>
                    <td style="padding:14px 20px;border-bottom:1px solid #dce6f5;">
                      <span style="color:#6b7280;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;">Name</span><br/>
                      <span style="color:#1a1a2e;font-size:15px;font-weight:600;">${data.name}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:14px 20px;border-bottom:1px solid #dce6f5;">
                      <span style="color:#6b7280;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;">Date</span><br/>
                      <span style="color:#1a1a2e;font-size:15px;font-weight:600;">📅 ${data.date}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:14px 20px;border-bottom:1px solid #dce6f5;">
                      <span style="color:#6b7280;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;">Time</span><br/>
                      <span style="color:#1a1a2e;font-size:15px;font-weight:600;">🕐 ${data.time} (${data.timezone})</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:14px 20px;border-bottom:1px solid #dce6f5;">
                      <span style="color:#6b7280;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;">Duration</span><br/>
                      <span style="color:#1a1a2e;font-size:15px;font-weight:600;">⏱ 30 Minutes</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:14px 20px;">
                      <span style="color:#6b7280;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;">Meeting Platform</span><br/>
                      <span style="color:#1a1a2e;font-size:15px;font-weight:600;">💻 Microsoft Teams</span>
                    </td>
                  </tr>
                </table>

                ${data.notes ? `
                <div style="margin-top:20px;background:#fffbeb;border-left:3px solid #f59e0b;border-radius:6px;padding:14px 18px;">
                  <span style="color:#92400e;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;">Your Notes</span><br/>
                  <span style="color:#78350f;font-size:14px;">${data.notes}</span>
                </div>` : ""}
              </td>
            </tr>

            <!-- Checklist reminders -->
            <tr>
              <td style="padding:0 40px 28px;">
                <h3 style="color:#1B3A6B;font-size:14px;margin:0 0 12px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;">
                  Before Your Meeting
                </h3>
                <table cellpadding="0" cellspacing="0">
                  ${["Have your photo ID ready", "Ensure your camera works", "Read the course outline beforehand", "Join Microsoft Teams 10 minutes early"].map(item => `
                  <tr>
                    <td style="padding:4px 0;">
                      <span style="color:#22c55e;font-size:16px;margin-right:8px;">✔</span>
                      <span style="color:#4b5563;font-size:14px;">${item}</span>
                    </td>
                  </tr>`).join("")}
                </table>
              </td>
            </tr>

            <!-- CTA button -->
            <tr>
              <td style="padding:0 40px 36px;text-align:center;">
                <a href="https://teams.microsoft.com" style="display:inline-block;background:#1B3A6B;color:#ffffff;text-decoration:none;padding:14px 32px;border-radius:8px;font-weight:700;font-size:15px;">
                  Open Microsoft Teams
                </a>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background:#f4f6fb;padding:20px 40px;text-align:center;border-top:1px solid #dce6f5;">
                <p style="color:#9ca3af;font-size:12px;margin:0;">
                  © ${new Date().getFullYear()} Stella College – Institute of Education<br/>
                  <a href="mailto:info@stellacollege.edu.au" style="color:#1B3A6B;">info@stellacollege.edu.au</a> · 1800 069 877
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
}

// ── Email: Alert to Admin ─────────────────────────────────────────────────────
function adminEmailHTML(data: BookingPayload): string {
  return `
  <!DOCTYPE html>
  <html>
  <body style="font-family:'Segoe UI',Arial,sans-serif;background:#f4f6fb;padding:30px;">
    <div style="background:#fff;border-radius:12px;padding:30px;max-width:560px;margin:0 auto;box-shadow:0 2px 12px rgba(0,0,0,.08);">
      <div style="background:#1B3A6B;color:#fff;padding:16px 24px;border-radius:8px;margin-bottom:24px;">
        <h2 style="margin:0;font-size:18px;">🔔 New Booking Received</h2>
      </div>
      <table width="100%" cellpadding="8" cellspacing="0" style="font-size:14px;border-collapse:collapse;">
        <tr style="background:#f4f6fb;">
          <td style="font-weight:700;color:#1B3A6B;width:130px;padding:10px 12px;">Name</td>
          <td style="padding:10px 12px;">${data.name}</td>
        </tr>
        <tr>
          <td style="font-weight:700;color:#1B3A6B;padding:10px 12px;">Email</td>
          <td style="padding:10px 12px;"><a href="mailto:${data.email}">${data.email}</a></td>
        </tr>
        <tr style="background:#f4f6fb;">
          <td style="font-weight:700;color:#1B3A6B;padding:10px 12px;">Date</td>
          <td style="padding:10px 12px;">${data.date}</td>
        </tr>
        <tr>
          <td style="font-weight:700;color:#1B3A6B;padding:10px 12px;">Time</td>
          <td style="padding:10px 12px;">${data.time} (${data.timezone})</td>
        </tr>
        <tr style="background:#f4f6fb;">
          <td style="font-weight:700;color:#1B3A6B;padding:10px 12px;">Notes</td>
          <td style="padding:10px 12px;">${data.notes || "—"}</td>
        </tr>
      </table>
      <p style="color:#9ca3af;font-size:12px;margin-top:24px;text-align:center;">
        Stella College Admin Alert · ${new Date().toLocaleString()}
      </p>
    </div>
  </body>
  </html>
  `;
}

// ── POST handler ──────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body: BookingPayload = await req.json();
    const { name, email, date, time, timezone, notes } = body;

    // Basic validation
    if (!name || !email || !date || !time) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // ── 1. Send confirmation email to the student ───────────────────────────
    await transporter.sendMail({
      from: `"Stella College" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `✅ Booking Confirmed – ${date} at ${time}`,
      html: studentEmailHTML(body),
    });

    // ── 2. Send alert email to admin ────────────────────────────────────────
    await transporter.sendMail({
      from: `"Stella College Bookings" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,   // e.g. admin@stellacollege.edu.au
      subject: `🔔 New Booking: ${name} – ${date} at ${time}`,
      html: adminEmailHTML(body),
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Booking email error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send confirmation email" },
      { status: 500 }
    );
  }
}