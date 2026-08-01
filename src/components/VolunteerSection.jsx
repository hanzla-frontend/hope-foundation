import React from 'react';
import { Link } from 'react-router-dom';
import { FaHandsHelping, FaHeart, FaStar, FaUsers } from 'react-icons/fa';

const VolunteerSection = () => {
  return (
    <section className="py-16 bg-primary text-white pt-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold" data-aos="fade-up">Become a Volunteer</h2>
        <p className="mt-3 text-gray-200 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">Join our team of passionate volunteers and make a tangible difference in communities.</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          <div className="p-4 bg-white/10 rounded-xl" data-aos="zoom-in"><FaHandsHelping className="text-3xl mx-auto" /><p className="mt-2 font-semibold">Make an Impact</p></div>
          <div className="p-4 bg-white/10 rounded-xl" data-aos="zoom-in" data-aos-delay="100"><FaUsers className="text-3xl mx-auto" /><p className="mt-2 font-semibold">Meet New People</p></div>
          <div className="p-4 bg-white/10 rounded-xl" data-aos="zoom-in" data-aos-delay="200"><FaStar className="text-3xl mx-auto" /><p className="mt-2 font-semibold">Gain Experience</p></div>
          <div className="p-4 bg-white/10 rounded-xl" data-aos="zoom-in" data-aos-delay="300"><FaHeart className="text-3xl mx-auto" /><p className="mt-2 font-semibold">Spread Love</p></div>
        </div>
        <Link to="/volunteer" className="mt-10 inline-block bg-white text-primary font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition shadow-lg">Join Us Today</Link>
      </div>
    </section>
  );
};

export default VolunteerSection; // ← Make sure this line exists