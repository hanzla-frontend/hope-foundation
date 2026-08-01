import React from 'react';
import { Link } from 'react-router-dom';
import { programsData } from '../data/mockData';
import ProgramCard from './ProgramCard';

const Programs = () => {
  return (
    <section className="py-16 bg-light pt-24" id="programs">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">Our Programs</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">We run diverse programs to address critical needs in communities.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programsData.map((program, idx) => (
            <ProgramCard key={idx} program={program} delay={idx * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;