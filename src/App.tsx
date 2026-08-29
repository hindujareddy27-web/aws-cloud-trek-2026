import { useEffect } from 'react';
import { RegisterHoverProvider } from '@/components/RegisterHoverContext';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import GetToKnow from '@/components/GetToKnow';
import Gallery from '@/components/Gallery';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';
import FinalCta from '@/components/FinalCta';

function App() {
  // Enable custom-cursor CSS (hides native cursor) only on fine-pointer desktops
  useEffect(() => {
    if (window.matchMedia('(pointer: fine)').matches && window.innerWidth >= 768) {
      document.documentElement.classList.add('has-custom-cursor');
    }
  }, []);

  return (
    <RegisterHoverProvider>
      <CustomCursor />
      <div className="min-h-screen bg-cream">
        <Navbar />
        <main>
          <Hero />
          <GetToKnow />
          <Gallery />
          <Faq />
          <Contact />
          <FinalCta />
        </main>
      </div>
    </RegisterHoverProvider>
  );
}

export default App;
