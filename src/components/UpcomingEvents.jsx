import React from 'react';
import { events } from '../data/mockData';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const UpcomingEvents = () => {
  return (
    <section className="py-16 bg-white pt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">Upcoming Events</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, idx) => (
            <div key={idx} className="bg-light rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition" data-aos="fade-up" data-aos-delay={idx * 100}>
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover" loading="lazy" />
              <div className="p-5">
                <h4 className="text-xl font-heading font-bold">{event.title}</h4>
                <div className="flex items-center text-sm text-gray-600 mt-2"><FaCalendarAlt className="mr-2" /> {event.date}</div>
                <div className="flex items-center text-sm text-gray-600 mt-1"><FaMapMarkerAlt className="mr-2" /> {event.location}</div>
                <p className="mt-3 text-gray-700 text-sm">{event.description}</p>
                <button className="mt-4 bg-primary text-white text-sm px-5 py-2 rounded-full hover:bg-primary-dark transition">Register</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;