'use server'
import nodemailer from 'nodemailer'

export async function sendNewsletterEmail(formData: FormData) {
   const user_email = formData.get('user_email') as string

   // Validate required fields
   if (!user_email) {
      return { success: false, error: 'Email is required' }
   }

   // Validate email format
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
   if (!emailRegex.test(user_email)) {
      return { success: false, error: 'Please enter a valid email address' }
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
   }

   try {
      // Verify connection first
      await transporter.verify()
      console.log('SMTP connection verified successfully for newsletter')
      
      // Send email
      await transporter.sendMail(mailOptions)
      console.log('Newsletter subscription email sent successfully')
      return { success: true, message: 'Successfully subscribed to newsletter!' }
   } catch (err: any) {
      console.error('Newsletter email send error:', err)
      return { success: false, error: err.message }
   }
}

export async function handleNewsletterFormAction(
   prevState: any,
   formData: FormData
) {
   return await sendNewsletterEmail(formData)
}