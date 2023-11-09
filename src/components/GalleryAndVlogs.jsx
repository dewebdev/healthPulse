// GalleryAndVlogs.js

import React from "react";

const GalleryAndVlogs = () => {
  return (
    <div className="container mx-auto p-4 font-Playpensans text-center ">
      <h2 className="text-3xl font-bold mb-8 text-center font-ShadowsIntoLight">
        Gallery and Vlogs
      </h2>

      <p className="mb-8">
        Welcome to a visual journey that offers a unique perspective into
        Rhonak's life, experiences, and his unwavering spirit. In this section,
        you'll find a collection of Rhonak's photos and video vlogs, providing a
        glimpse into his journey.
      </p>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Media</h3>
        {/* Insert your gallery images or videos here */}
        {/* You can use an external library or component for image and video rendering */}
      </div>

      <p className="mb-8">
        Click on the images and video thumbnails to connect with Rhonak's
        journey on a personal level. Your support and presence in this visual
        journey mean a lot to us.
      </p>

      <p>
        Thank you for visiting this website and supporting Rhonak on his
        journey. Your presence and support mean the world to us.
      </p>
    </div>
  );
};

export default GalleryAndVlogs;
