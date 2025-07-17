import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Projects from '@/components/Projects';
import Award from '@/components/Award';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Navbar />
        <Header />
        <main>
          <Services />
          <Process />
          <Projects />
          {/* <Award /> */}
          {/* <Testimonials /> */}
          {/* <Blog /> */}
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
