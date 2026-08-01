import React from 'react';
import { testimonials } from '../data/mockData';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-primary mb-12" data-aos="fade-up">What Our Supporters Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm" data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="flex items-center space-x-3">
                <img src={item.photo} alt={item.name} className="w-12 h-12 rounded-full object-cover" loading="lazy" />
                <div>
                  <h4 className="font-heading font-bold">{item.name}</h4>
                  <div className="flex text-accent text-sm">{Array(5).fill(0).map((_, i) => <FaStar key={i} />)}</div>
                </div>
              </div>
              <p className="mt-4 text-gray-700 italic text-sm">"{item.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;