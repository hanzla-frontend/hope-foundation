import React from 'react';
import { Link } from 'react-router-dom';

const DonateCTA = () => {
  return (
    <section className="py-16 bg-secondary text-white">
      <div className="container mx-auto px-4 text-center" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-heading font-bold">Make a Difference Today</h2>
        <p className="mt-3 text-gray-200 max-w-2xl mx-auto">Your donation can change lives. Every contribution, big or small, helps us reach more communities.</p>
        <Link to="/donate" className="mt-6 inline-block bg-accent text-gray-900 font-bold py-3 px-10 rounded-full hover:bg-yellow-400 transition shadow-lg">Donate Now</Link>
      </div>
    </section>
  );
};

export default DonateCTA;