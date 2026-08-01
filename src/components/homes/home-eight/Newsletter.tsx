"use client"
import Image from "next/image"
import { useState } from 'react'

import newsletter_shape1 from "@/assets/img/others/h7_newsletter_shape01.svg"
import newsletter_shape2 from "@/assets/img/others/h7_newsletter_shape02.svg"

const Newsletter = () => {
   const [email, setEmail] = useState('');
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsSubmitting(true);
      setMessage(null);

      console.log("Newsletter home-eight email:", email);

      // Additional validation
      if (!email || email.trim() === '') {
         setMessage({ type: 'error', text: 'Please enter your email address' });
         setIsSubmitting(false);
         return;
      }

      try {
         const response = await fetch('/api/newsletter', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_email: email }),
         });

         const result = await response.json();

         if (result.success) {
            setMessage({ type: 'success', text: result.message || 'Successfully subscribed!' });
            setEmail(''); // Clear the email input
         } else {
            console.error("API Error Response:", result);
            setMessage({ type: 'error', text: result.error || 'Failed to subscribe' });
         }
      } catch (error) {
         setMessage({ type: 'error', text: 'Network error. Please try again.' });
      } finally {
         setIsSubmitting(false);
      }
   };

   return (
      <section className="newsletter__area-three">
         <div className="container">
            <div className="newsletter__inner-wrap newsletter__inner-wrap-two">
               <h2 className="title">Start today and get certified in Fundamentals of Business Core</h2>
               <form onSubmit={handleSubmit} className="newsletter__form-two">
                  <input 
                     type="email" 
                     name="user_email"
                     placeholder="Enter your e-mail" 
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     required 
                     disabled={isSubmitting}
                  />
                  <button type="submit" className="btn arrow-btn" disabled={isSubmitting}>
                     {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
                  </button>
               </form>
               
               {/* Response messages */}
               {message && (
                  <p style={{
                     color: message.type === 'success' ? '#28a745' : '#dc3545', 
                     marginTop: '15px', 
                     textAlign: 'center', 
                     fontSize: '14px'
                  }}>
                     {message.type === 'success' ? '✅' : '❌'} {message.text}
                  </p>
               )}
               
               <Image src={newsletter_shape1} alt="shape" data-aos="fade-down-right" data-aos-delay="400" className="shape shape-one" />
               <Image src={newsletter_shape2} alt="shape" className="shape shape-two rotateme" />
            </div>
         </div>
      </section>
   )
}

export default Newsletter
