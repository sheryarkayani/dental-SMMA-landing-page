import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import LocalPresence from './components/LocalPresence';
import OrthopedicPractice from './components/OrthopedicPractice';
import BariatricSuccess from './components/BariatricSuccess';
import BookAppointment from './components/BookAppointment';
import LaformaClinic from './components/LaformaClinic';
import CallToAction from './components/CallToAction';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#F4F4F4]">
        <Navbar />
        <Hero />
        <VideoSection />
        <Testimonials />
        <Services />
        
        <CallToAction />
        <CaseStudies />
        <LocalPresence />
        <OrthopedicPractice />
        <BariatricSuccess />
        <BookAppointment />
        <LaformaClinic />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}
