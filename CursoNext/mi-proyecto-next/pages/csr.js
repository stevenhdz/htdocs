// pages/csr.js
import { useEffect, useState } from 'react';

export default function CSRPage() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(true);
  const [time, setTime] = useState(null);

  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(res => res.json())
      .then(data => {
        setJoke(data.value);
        setTime(new Date().toLocaleTimeString());
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>CSR Page</h1>
      <p><strong>Joke:</strong> {joke}</p>
      <p><strong>Fetched at:</strong> {time}</p>
      <p><em>(Los datos se cargan en el cliente)</em></p>
    </div>
  );
}
