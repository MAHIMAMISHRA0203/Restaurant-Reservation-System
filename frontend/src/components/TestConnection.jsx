import React, { useEffect, useState } from 'react';

const TestConnection = () => {
  const [message, setMessage] = useState('Testing connection...');
  const [error, setError] = useState(null);

  useEffect(() => {
    const testConnection = async () => {
      try {
        console.log('Attempting to connect to backend...');
        const response = await fetch('http://localhost:4000/test', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });

        console.log('Response status:', response.status);
        console.log('Response headers:', response.headers);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Backend response:', data);
        setMessage(data.message || 'Connected but no message received');
      } catch (err) {
        const errorMsg = `${err.name}: ${err.message}`;
        setError(errorMsg);
        console.error('Connection error:', errorMsg);
      }
    };

    testConnection();

    // Retry after 5 seconds if there's an error
    const retryTimer = setInterval(testConnection, 5000);
    return () => clearInterval(retryTimer);
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f5f5f5', margin: '10px', borderRadius: '5px' }}>
      <h2>Backend Connection Test</h2>
      {error ? (
        <p style={{ color: 'red', fontWeight: 'bold' }}>Error: {error}</p>
      ) : (
        <p style={{ color: 'green', fontWeight: 'bold' }}>{message}</p>
      )}
    </div>
  );
};

export default TestConnection;
