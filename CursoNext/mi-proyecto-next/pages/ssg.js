// pages/ssg.js

export async function getStaticProps() {
  const data = await fetch('https://api.chucknorris.io/jokes/random').then(res => res.json());

  return {
    props: {
      joke: data.value,
      time: new Date().toLocaleTimeString(),
    },
  };
}

export default function SSGPage({ joke, time }) {
  return (
    <div>
      <h1>SSG Page</h1>
      <p><strong>Joke:</strong> {joke}</p>
      <p><strong>Built at:</strong> {time}</p>
    </div>
  );
}
