"use client";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <div className="mt-16 md:mt-0">
        <Hero />
      </div>
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
