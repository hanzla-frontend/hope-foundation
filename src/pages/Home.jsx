import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import MissionVision from '../components/MissionVision';
import Programs from '../components/Programs';
import Impact from '../components/Impact';
import WhyChooseUs from '../components/WhyChooseUs';
import SuccessStories from '../components/SuccessStories';
import UpcomingEvents from '../components/UpcomingEvents';
import VolunteerSection from '../components/VolunteerSection';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import DonateCTA from '../components/DonateCTA';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <MissionVision />
      <Programs />
      <Impact />
      <WhyChooseUs />
      <SuccessStories />
      <UpcomingEvents />
      <VolunteerSection />
      <Testimonials />
      <Gallery />
      <DonateCTA />
      <FAQ />
      <Contact />
    </>
  );
};

export default Home;