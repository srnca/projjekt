import Script from 'next/script';
import generateStylesheetObject from '@/common/generateStylesheetsObject';
import Loader from '@/components/Loader';
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

export const metadata = {
  title: 'projjekt',
  icons: {
    icon: '/assets/img/fav.png',
    shortcut: '/assets/img/fav.png',
    other: generateStylesheetObject([
      '/assets/css/lib/bootstrap.min.css',
      '/assets/css/lib/all.min.css',
      '/assets/css/lib/line-awesome.css',
      '/assets/css/lib/themify-icons.css',
      '/assets/css/lib/animate.css',
      '/assets/css/lib/jquery.fancybox.css',
      '/assets/css/lib/lity.css',
      '/assets/css/lib/swiper8.min.css',
      '/assets/css/common_style.css',
      '/assets/css/home_2_style.css',
      'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap',
      'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap',
    ]),
  },
};
export default function Home() {
  return (
    <body className="home-style2">
      <Loader />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Navbar />
          <Header />
          <main>
            <Services />
            <Process />
            <Projects />
            <Award />
            <Testimonials />
            <Blog />
            <Contact />
            {/*
             */}
          </main>
          <Footer />
        </div>
      </div>
      <Script
        src="/assets/js/ScrollTrigger.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/ScrollSmoother.min.js"
        strategy="beforeInteractive"
      />
      <Script
        strategy="beforeInteractive"
        src="/assets/js/plugins.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/TweenMax.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/charming.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/countdown.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/gsap.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/splitting.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/isotope.pkgd.min.js"
      ></Script>
      <Script
        src="/assets/js/smoother-script.js"
        strategy="lazyOnload"
      />
      <Script src="/assets/js/scripts.js"></Script>
    </body>
  );
}
