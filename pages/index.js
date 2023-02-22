import { Navbar, Hero, Grooming, Footer } from '../src/components';

export default function Home() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Grooming />
      <Footer />
    </div>
  );
}
