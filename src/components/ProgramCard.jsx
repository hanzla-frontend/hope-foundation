import React from 'react';
import { Link } from 'react-router-dom';

const ProgramCard = ({ program, delay }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300" data-aos="fade-up" data-aos-delay={delay}>
      <img 
        src={program.image} 
        alt={program.title} 
        className="w-full h-48 object-cover" 
        loading="lazy" 
      />
      <div className="p-5">
        <h4 className="text-xl font-heading font-bold text-gray-800">{program.title}</h4>
        <p className="mt-2 text-gray-600 text-sm">{program.description}</p>
        <Link to="/programs" className="mt-4 inline-block text-primary font-semibold text-sm hover:underline">Learn More →</Link>
      </div>
    </div>
  );
};

export default ProgramCard;