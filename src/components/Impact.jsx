import React, { useState, useEffect, useRef } from 'react';
import { FaUsers, FaProjectDiagram, FaHandsHelping, FaCity } from 'react-icons/fa';

const Impact = () => {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { value: 50000, suffix: '+', label: 'Lives Changed', icon: FaUsers },
    { value: 150, suffix: '+', label: 'Projects', icon: FaProjectDiagram },
    { value: 200, suffix: '+', label: 'Volunteers', icon: FaHandsHelping },
    { value: 30, suffix: '+', label: 'Cities', icon: FaCity },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const durations = [2500, 2000, 1800, 2200];
    const startTimes = [0, 100, 200, 300];

    stats.forEach((stat, index) => {
      const startTime = Date.now() + startTimes[index];
      const duration = durations[index];
      const endValue = stat.value;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(progress * endValue);
        
        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] = current;
          return newCounts;
        });

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      setTimeout(() => {
        requestAnimationFrame(animate);
      }, startTimes[index]);
    });
  }, [isVisible, stats]);

  return (
    <section className="py-12 sm:py-16 bg-primary text-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="text-3xl sm:text-4xl mb-2"><Icon /></div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold">
                  {counts[index].toLocaleString()}{stat.suffix}
                </div>
                <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-200">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Impact;