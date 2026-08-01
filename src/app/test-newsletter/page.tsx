'use client';
import { useState } from 'react';

export default function TestNewsletterPage() {
  const [testResult, setTestResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const testEmailConfig = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/test-email');
      const result = await response.json();
      setTestResult(result);
    } catch (error) {
      setTestResult({ error: 'Network error', details: error });
    } finally {
      setIsLoading(false);
    }
  };

  const testNewsletterSubscription = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_email: 'test@example.com' }),
      });
      const result = await response.json();
      setTestResult(result);
    } catch (error) {
      setTestResult({ error: 'Network error', details: error });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Newsletter System Test</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <h2>Test Email Configuration</h2>
        <button 
          onClick={testEmailConfig}
          disabled={isLoading}
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px',
            cursor: 'pointer',
            marginRight: '10px'
          }}
        >
          {isLoading ? 'Testing...' : 'Test Email Config'}
        </button>
        
        <button 
          onClick={testNewsletterSubscription}
          disabled={isLoading}
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#28a745', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          {isLoading ? 'Testing...' : 'Test Newsletter API'}
        </button>
      </div>

      {testResult && (
        <div style={{ 
          padding: '15px', 
          backgroundColor: testResult.success ? '#d4edda' : '#f8d7da',
          border: `1px solid ${testResult.success ? '#c3e6cb' : '#f5c6cb'}`,
          borderRadius: '5px',
          marginTop: '20px'
        }}>
          <h3>{testResult.success ? '✅ Success' : '❌ Error'}</h3>
          <pre style={{ whiteSpace: 'pre-wrap', fontSize: '12px' }}>
            {JSON.stringify(testResult, null, 2)}
          </pre>
        </div>
      )}

      <div style={{ marginTop: '30px' }}>
        <h2>Newsletter Form Test</h2>
        <form onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const email = formData.get('email') as string;
          
          setIsLoading(true);
          try {
            const response = await fetch('/api/newsletter', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ user_email: email }),
            });
            const result = await response.json();
            setTestResult(result);
          } catch (error) {
            setTestResult({ error: 'Network error', details: error });
          } finally {
            setIsLoading(false);
          }
        }}>
          <input 
            type="email" 
            name="email" 
            placeholder="Enter your email" 
            required 
            style={{ 
              padding: '10px', 
              width: '300px', 
              marginRight: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px'
            }}
          />
          <button 
            type="submit"
            disabled={isLoading}
            style={{ 
              padding: '10px 20px', 
              backgroundColor: '#17a2b8', 
              color: 'white', 
              border: 'none', 
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      </div>

      <div style={{ marginTop: '30px', fontSize: '14px', color: '#666' }}>
        <h3>Instructions:</h3>
        <ol>
          <li>Click "Test Email Config" to verify your Gmail settings</li>
          <li>Click "Test Newsletter API" to test the subscription endpoint</li>
          <li>Use the form above to test with a real email address</li>
          <li>Check your Gmail ({process.env.NEXT_PUBLIC_RECIPIENT_EMAIL || 'rshobhit255@gmail.com'}) for notifications</li>
        </ol>
      </div>
    </div>
  );
}