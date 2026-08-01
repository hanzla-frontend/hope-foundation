import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  // Google Maps Embed URL (replace with your actual location)
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316bb7a9c3%3A0xb6ffdc8b9f2f6d0a!2sNew%20York%20City%20Hall!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus";

  // Alternative: Use a static map image (simpler, no API key needed)
  const staticMapUrl = "https://maps.googleapis.com/maps/api/staticmap?center=40.713129,-74.003693&zoom=14&size=600x300&maptype=roadmap&markers=color:red%7C40.713129,-74.003693&key=YOUR_GOOGLE_MAPS_API_KEY";

  return (
    <section className="py-12 sm:py-16 bg-white dark:bg-gray-900 pt-20 sm:pt-24" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-center text-primary mb-8 sm:mb-12" data-aos="fade-up">
          Get in Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div data-aos="fade-right">
            <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-gray-800 dark:text-white mb-6">
                Send Us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Your message here..."
                    required
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors resize-y"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-all duration-300 font-semibold disabled:opacity-70 disabled:cursor-not-allowed transform hover:scale-[1.02]"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg text-center animate-slide-up">
                    ✅ Message sent successfully! We'll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
          
          {/* Contact Info & Map */}
          <div data-aos="fade-left">
            <div className="space-y-6">
              {/* Contact Information */}
              <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-gray-800 dark:text-white mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-lg">
                      <FaEnvelope className="text-primary text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                      <p className="text-gray-800 dark:text-white font-medium">info@hopefoundation.org</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-lg">
                      <FaPhone className="text-primary text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                      <p className="text-gray-800 dark:text-white font-medium">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-lg">
                      <FaMapMarkerAlt className="text-primary text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Address</p>
                      <p className="text-gray-800 dark:text-white font-medium">123 Hope Street,<br />New York, NY 10001</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-lg">
                      <FaClock className="text-primary text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Working Hours</p>
                      <p className="text-gray-800 dark:text-white font-medium">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
                
                {/* Social Media Links */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Follow Us</p>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-primary/10 dark:bg-primary/20 p-3 rounded-lg hover:bg-primary hover:text-white transition-colors text-primary">
                      <FaFacebook className="text-xl" />
                    </a>
                    <a href="#" className="bg-primary/10 dark:bg-primary/20 p-3 rounded-lg hover:bg-primary hover:text-white transition-colors text-primary">
                      <FaTwitter className="text-xl" />
                    </a>
                    <a href="#" className="bg-primary/10 dark:bg-primary/20 p-3 rounded-lg hover:bg-primary hover:text-white transition-colors text-primary">
                      <FaInstagram className="text-xl" />
                    </a>
                    <a href="#" className="bg-primary/10 dark:bg-primary/20 p-3 rounded-lg hover:bg-primary hover:text-white transition-colors text-primary">
                      <FaYoutube className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Google Map */}
              <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <h4 className="text-lg font-heading font-bold text-gray-800 dark:text-white mb-3 px-2">
                  Find Us on Map
                </h4>
                <div className="relative w-full rounded-xl overflow-hidden" style={{ height: '250px' }}>
                  <iframe
                    src={mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Hope Foundation Location Map"
                    className="rounded-xl"
                  />
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                  <FaMapMarkerAlt className="inline mr-1" /> 123 Hope Street, New York, NY 10001
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;