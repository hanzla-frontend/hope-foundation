import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { faqs } from '../data/mockData';

const FAQ = () => {
  const [active, setActive] = useState(null);

  const toggle = (idx) => setActive(active === idx ? null : idx);

  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-primary mb-12" data-aos="fade-up">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm overflow-hidden" data-aos="fade-up" data-aos-delay={idx * 50}>
              <button 
                className="w-full flex justify-between items-center p-5 text-left font-semibold text-gray-800 hover:bg-gray-50 transition" 
                onClick={() => toggle(idx)}
                aria-expanded={active === idx}
              >
                {item.question}
                <span>{active === idx ? <FaChevronUp /> : <FaChevronDown />}</span>
              </button>
              {active === idx && <div className="px-5 pb-5 text-gray-600">{item.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;