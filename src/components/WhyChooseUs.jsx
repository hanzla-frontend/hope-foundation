import React from 'react';
import { FaShieldAlt, FaUsers, FaHands, FaGlobe, FaLeaf, FaHeart } from 'react-icons/fa';

const WhyChooseUs = () => {
  const reasons = [
    { icon: <FaShieldAlt />, title: 'Transparency', desc: 'We ensure 100% transparency in all our operations and funds.' },
    { icon: <FaUsers />, title: 'Trusted Team', desc: 'Our team consists of experienced professionals and volunteers.' },
    { icon: <FaHands />, title: 'Experienced Volunteers', desc: 'Over 200 dedicated volunteers working across the country.' },
    { icon: <FaGlobe />, title: 'Nationwide Impact', desc: 'We operate in 30+ cities, reaching thousands of families.' },
    { icon: <FaLeaf />, title: 'Sustainable Projects', desc: 'We focus on long-term, sustainable solutions.' },
    { icon: <FaHeart />, title: 'Community Focus', desc: 'We work closely with communities to understand their needs.' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">Why Choose Us</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => (
            <div key={idx} className="p-6 bg-light rounded-2xl hover:shadow-md transition" data-aos="flip-up" data-aos-delay={idx * 100}>
              <div className="text-3xl text-primary mb-3">{item.icon}</div>
              <h4 className="text-xl font-heading font-bold">{item.title}</h4>
              <p className="mt-2 text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;