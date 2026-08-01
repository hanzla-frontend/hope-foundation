import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="py-16 bg-light pt-24" id="about">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <img 
              src="https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="About Hope Foundation" 
              className="rounded-2xl shadow-xl" 
            />
          </div>
          <div data-aos="fade-left">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">About Our NGO</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Founded in 2010, Hope Foundation has been at the forefront of humanitarian work. We believe in creating sustainable change by addressing root causes of poverty, inequality, and lack of access to basic services.
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Our journey started with a small group of volunteers and has grown into a nationwide movement. We operate in 30+ cities with over 200 dedicated volunteers.
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              <strong>Why we exist:</strong> To build a world where every individual has the opportunity to thrive, regardless of their background.
            </p>
            <Link to="/about" className="mt-6 inline-block text-primary font-semibold hover:underline">Learn More →</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;