import React, { useState, useEffect } from "react";

const About = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1461800919507-79b16743b257?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aHVtYW58ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?auto.format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aHVtYW58ZW58MHx8MHx8fDA%3D",
    // Add more image URLs here
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 3000); // Change the image every 3 seconds

    return () => clearInterval(interval);
  }, [currentImage, images]);

  return (
    <div className="relative h-screen dark:bg-black">
      {/* Right section image gallery (for large devices) */}
      <div className="hidden md:block w-1/2 h-full absolute inset-0">
        <img
          src={images[currentImage]}
          alt="Image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Left section (title and content) */}
      <div className="w-4/5 md:w-1/2 mx-auto text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          About Me - Introduction
        </h1>
        <p className="text-center">
          Your introduction and some personal information go here. Write a
          compelling story about yourself.
        </p>
      </div>

      {/* Right section image gallery (for mobile devices) */}
      {window.innerWidth <= 768 && (
        <div className="md:hidden w-full h-full absolute inset-0">
          <img
            src={images[currentImage]}
            alt="Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className="text-2xl font-semibold mb-4">
              About Me - Introduction
            </h1>
            <p>
              Your introduction and some personal information go here. Write a
              compelling story about yourself.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
