import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Hope Foundation helping community" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-2xl" data-aos="fade-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
            Together We Create <br />
            <span className="text-accent">a Better Tomorrow</span>
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-200 font-body">
            Empowering communities through education, healthcare, and sustainable development. 
            Join us in making a lasting impact.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
            <Link 
              to="/donate" 
              className="bg-primary hover:bg-primary-dark text-white font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-full transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base"
            >
              Donate Now
            </Link>
            <Link 
              to="/volunteer" 
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-full transition border border-white/30 text-sm sm:text-base"
            >
              Become Volunteer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;