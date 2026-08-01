'use client';
import { useState } from 'react';

interface NewsletterFormProps {
  className?: string;
  placeholder?: string;
  buttonText?: string;
  showMessages?: boolean;
}

export default function NewsletterForm({ 
  className = "footer__newsletter-form", 
  placeholder = "Type your E-mail",
  buttonText = "Subscribe",
  showMessages = true 
}: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    console.log("Email from state:", email);
    console.log("Sending to API:", { user_email: email });

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
    <>
      <form onSubmit={handleSubmit} className={className}>
        <input 
          type="email" 
          name="user_email"
          id="newsletter_email"
          placeholder={placeholder} 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
          disabled={isSubmitting}
          autoComplete="email"
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Subscribing...' : buttonText}
        </button>
      </form>
      
      {showMessages && message && (
        <p style={{
          color: message.type === 'success' ? '#28a745' : '#dc3545', 
          marginTop: '10px', 
          fontSize: '12px'
        }}>
          {message.type === 'success' ? '✅' : '❌'} {message.text}
        </p>
      )}
    </>
  );
}