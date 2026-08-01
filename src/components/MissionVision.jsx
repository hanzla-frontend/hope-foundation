import React from 'react';
import { FaBullseye, FaEye, FaHeart, FaHands, FaLightbulb, FaLeaf } from 'react-icons/fa';

const MissionVision = () => {
  const values = [
    { icon: <FaHeart />, title: 'Compassion' },
    { icon: <FaHands />, title: 'Integrity' },
    { icon: <FaLightbulb />, title: 'Innovation' },
    { icon: <FaLeaf />, title: 'Sustainability' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-light p-8 rounded-2xl shadow-sm" data-aos="fade-up">
            <FaBullseye className="text-4xl text-primary mb-4" />
            <h3 className="text-2xl font-heading font-bold">Our Mission</h3>
            <p className="mt-3 text-gray-700">To empower underserved communities by providing access to education, healthcare, and economic opportunities, fostering self-reliance and dignity.</p>
          </div>
          <div className="bg-light p-8 rounded-2xl shadow-sm" data-aos="fade-up" data-aos-delay="100">
            <FaEye className="text-4xl text-secondary mb-4" />
            <h3 className="text-2xl font-heading font-bold">Our Vision</h3>
            <p className="mt-3 text-gray-700">A world where every individual has the opportunity to reach their full potential in a just, equitable, and sustainable society.</p>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-heading font-bold text-center mb-8">Our Core Values</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <div key={idx} className="text-center p-4 bg-light rounded-xl" data-aos="zoom-in" data-aos-delay={idx * 100}>
                <div className="text-3xl text-primary mb-2">{val.icon}</div>
                <p className="font-semibold">{val.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;