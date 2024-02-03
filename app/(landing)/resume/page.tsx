// ResumeLandingPage.tsx
import React from 'react';

const ResumeLandingPage: React.FC = () => {

  const handleGetStarted = () => {
    // Redirect to the resume builder page or take any other action
  ('/resume-builder');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-800 text-white py-4 w-full text-center">
        <h1 className="text-4xl font-extrabold">Your Professional Resume Builder</h1>
      </header>

      <section className="text-center mt-12">
        <h2 className="text-3xl font-bold mb-4">Craft Your Exceptional Resume</h2>
        <p className="text-gray-700">
          Unleash the power of your potential. Create a standout resume effortlessly.
        </p>
        <button
          className="mt-8 bg-blue-500 text-white px-8 py-3 rounded-full text-xl font-semibold hover:bg-blue-700 transition duration-300"
        >
          Get Started
        </button>
      </section>

      <footer className="mt-12 text-gray-500 text-center">
        <p>&copy; 2024 Your Resume Builder. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ResumeLandingPage;
