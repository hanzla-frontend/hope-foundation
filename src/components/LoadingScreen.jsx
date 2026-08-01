import React from 'react';
import { FaHeart } from 'react-icons/fa';

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <FaHeart className="text-5xl text-primary animate-pulse mx-auto" />
        <p className="mt-2 text-gray-600">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;