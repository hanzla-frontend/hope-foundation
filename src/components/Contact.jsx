import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="py-16 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-primary mb-12" data-aos="fade-up">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div data-aos="fade-right">
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
              <input type="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
              <input type="tel" placeholder="Phone" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
              <input type="text" placeholder="Subject" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
              <textarea rows="5" placeholder="Message" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
              <button type="submit" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition">Send Message</button>
            </form>
          </div>
          <div data-aos="fade-left">
            <div className="bg-light p-6 rounded-2xl">
              <div className="space-y-4">
                <p><FaEnvelope className="inline mr-3 text-primary" /> info@hopefoundation.org</p>
                <p><FaPhone className="inline mr-3 text-primary" /> +1 (555) 123-4567</p>
                <p><FaMapMarkerAlt className="inline mr-3 text-primary" /> 123 Hope St, City, Country</p>
              </div>
              <div className="mt-6 h-64 bg-gray-300 rounded-lg flex items-center justify-center text-gray-600">
                <span>Google Map Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;