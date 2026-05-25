import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import WhyChooseUs from '@/components/WhyChooseUs';
 
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="bg-dark text-white overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />      
      <Contact />
      <Footer />
    </main>
  );
}