"use client"
import Image from "next/image"
import { useState } from 'react'

import newsletter_img1 from "@/assets/img/others/newsletter_img.png"
import newsletter_img2 from "@/assets/img/others/newsletter_shape01.png"
import newsletter_img3 from "@/assets/img/others/newsletter_shape02.png"
import newsletter_img4 from "@/assets/img/others/newsletter_shape03.png"

const Newsletter = () => {
   const [email, setEmail] = useState('');
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsSubmitting(true);
      setMessage(null);

      console.log("Newsletter home-two email:", email);

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
      <section className="newsletter__area">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-4">
                  <div className="newsletter__img-wrap">
                     <Image src={newsletter_img1} alt="img" />
                     <Image src={newsletter_img2} alt="img" data-aos="fade-up" data-aos-delay="400" />
                     <Image src={newsletter_img3} alt="img" className="alltuchtopdown" />
                  </div>
               </div>
               <div className="col-lg-8">
                  <div className="newsletter__content">
                     <h2 className="title">Want to stay <span>informed</span> about <br /> new <span>courses & study?</span></h2>
                     <div className="newsletter__form">
                        <form onSubmit={handleSubmit}>
                           <input 
                              type="email" 
                              name="user_email"
                              placeholder="Type your e-mail" 
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required 
                              disabled={isSubmitting}
                           />
                           <button type="submit" className="btn" disabled={isSubmitting}>
                              {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
                           </button>
                        </form>
                        
                        {/* Response messages */}
                        {message && (
                           <p style={{
                              color: message.type === 'success' ? '#28a745' : '#dc3545', 
                              marginTop: '10px', 
                              fontSize: '14px'
                           }}>
                              {message.type === 'success' ? '✅' : '❌'} {message.text}
                           </p>
                        )}
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="newsletter__shape">
            <Image src={newsletter_img4} alt="img" data-aos="fade-left" data-aos-delay="400" />
         </div>
      </section>
   )
}

export default Newsletter
