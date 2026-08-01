import React, { useState } from 'react';
import { galleryImages } from '../data/mockData';
import { FaTimes } from 'react-icons/fa';

const Gallery = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-16 bg-white pt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-primary mb-12" data-aos="fade-up">Photo Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, idx) => (
            <div 
              key={idx} 
              className="overflow-hidden rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300" 
              onClick={() => setSelected(img)} 
              data-aos="zoom-in" 
              data-aos-delay={idx * 50}
            >
              <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-48 object-cover" loading="lazy" />
            </div>
          ))}
        </div>
        {/* Lightbox */}
        {selected && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4" onClick={() => setSelected(null)}>
            <div className="relative max-w-4xl w-full">
              <img src={selected} alt="Gallery lightbox" className="w-full h-auto max-h-[80vh] object-contain rounded-lg" />
              <button className="absolute top-4 right-4 text-white text-3xl" onClick={() => setSelected(null)}><FaTimes /></button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;