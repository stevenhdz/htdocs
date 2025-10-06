// pages/ssr.js

export async function getServerSideProps() {
  const data = await fetch('https://api.chucknorris.io/jokes/random').then(res => res.json());

  return {
    props: {
      joke: data.value,
      time: new Date().toLocaleTimeString(),
    },
  };
}

export default function SSRPage({ joke, time }) {
  return (
    <div>
      <h1>SSR Page</h1>
      <p><strong>Joke:</strong> {joke}</p>
      <p><strong>Rendered at:</strong> {time}</p>
    </div>
  );
}
