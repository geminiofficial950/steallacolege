'use server'
import nodemailer from 'nodemailer'

export async function sendContactEmail(formData: FormData) {
   const user_name = formData.get('user_name') as string
   const user_email = formData.get('user_email') as string
   const user_phone = formData.get('user_phone') as string
   const designation = formData.get('designation') as string
   const company_name = formData.get('company_name') as string
   const message = formData.get('message') as string

   // Validate required fields
   if (!user_name || !user_email || !message) {
      return { success: false, error: 'Missing required fields' }
   }

   // Validate environment variables
   const EMAIL_USER = process.env.EMAIL_USER
   const EMAIL_APP_PASSWORD = process.env.EMAIL_APP_PASSWORD
   const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL

   if (!EMAIL_USER || !EMAIL_APP_PASSWORD || !RECIPIENT_EMAIL) {
      console.error('Missing email configuration')
      return { success: false, error: 'Email configuration missing' }
   }

   // Create transporter with robust configuration
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
   })

   const mailOptions = {
      from: `"Contact Form" <${EMAIL_USER}>`,
      to: RECIPIENT_EMAIL,
      subject: `New Contact Message from ${user_name}`,
      html: `
         <h2>New Contact Form Submission</h2>
         <p><strong>Name:</strong> ${user_name}</p>
         <p><strong>Email:</strong> ${user_email}</p>
         <p><strong>Phone:</strong> ${user_phone || "N/A"}</p>
         ${designation ? `<p><strong>Designation:</strong> ${designation}</p>` : ''}
         ${company_name ? `<p><strong>Company:</strong> ${company_name}</p>` : ''}
         <p><strong>Message:</strong><br>${message}</p>
         <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
      `,
   }

   try {
      // Verify connection first
      await transporter.verify()
      console.log('SMTP connection verified successfully')
      
      // Send email
      await transporter.sendMail(mailOptions)
      console.log('Email sent successfully')
      return { success: true }
   } catch (err: any) {
      console.error('Email send error:', err)
      return { success: false, error: err.message }
   }
}

export async function handleContactFormAction(
   _: any,
   formData: FormData
) {
   return await sendContactEmail(formData)
}
