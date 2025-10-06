// pages/isr.js

export async function getStaticProps() {
  const data = await fetch('https://api.chucknorris.io/jokes/random').then(res => res.json());

  return {
    props: {
      joke: data.value,
      time: new Date().toLocaleTimeString(),
    },
    revalidate: 10, // Regenera la página cada 10 segundos
  };
}

export default function ISRPage({ joke, time }) {
  return (
    <div>
      <h1>ISR Page</h1>
      <p><strong>Joke:</strong> {joke}</p>
      <p><strong>Built at:</strong> {time}</p>
      <p><em>(Regenera cada 10 segundos)</em></p>
    </div>
  );
}
