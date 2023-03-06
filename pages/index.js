import { Navbar, Hero, Grooming, Footer, About } from '../src/components';

export default function Home() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Grooming />
      <About />
      <Footer />
    </div>
  );
}
