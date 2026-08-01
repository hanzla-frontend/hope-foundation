import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-light">
      <div className="text-center">
        <h1 className="text-6xl font-heading font-bold text-primary">404</h1>
        <p className="text-xl mt-2">Page not found</p>
        <Link to="/" className="mt-4 inline-block bg-primary text-white px-6 py-2 rounded-full">Go Home</Link>
      </div>
    </div>
  );
};

export default NotFound;