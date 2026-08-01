import React from 'react';
import { stories } from '../data/mockData';

const SuccessStories = () => {
  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">Success Stories</h2>
          <p className="mt-2 text-gray-600">Real change, real lives.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((story, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden" data-aos="fade-up" data-aos-delay={idx * 100}>
              <img src={story.image} alt={story.name} className="w-full h-56 object-cover" loading="lazy" />
              <div className="p-5">
                <h4 className="text-xl font-heading font-bold">{story.name}</h4>
                <p className="mt-2 text-gray-600 text-sm italic">"{story.story}"</p>
                <div className="mt-3 text-sm font-semibold text-primary">{story.result}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;