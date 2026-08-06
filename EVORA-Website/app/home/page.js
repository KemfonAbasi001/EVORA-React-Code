function Hero() {
  return <section><h1>Welcome</h1></section>;
}

function Services() {
  return <section><h2>Services</h2></section>;
}

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
    </>
  );
}