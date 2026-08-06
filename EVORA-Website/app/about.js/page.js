function AboutIntro() {
  return <section><h1>About Us</h1></section>;
}

function TeamSection() {
  return <section><h2>Our Team</h2></section>;
}

export default function About() {
  return (
    <>
      <AboutIntro />
      <TeamSection />
    </>
  );
}