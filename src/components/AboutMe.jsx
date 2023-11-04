import React, { useState, useEffect } from "react";

const AboutMe = () => {
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
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImage, images]);

  return (
    <div className="aboutMe bg-black w-full h-screen flex justify-between  text-white">
      <img
        src={images[currentImage]}
        alt="rhonak_images"
        className="w-full h-full object-cover absolute lg:hidden opacity-30"
      />
      <div className="relative left_section lg:w-1/2 flex flex-col justify-center m-4 p-4 gap-4">
        <h1 className="text-2xl font-semibold font-Kenia">
          About Me - Introduction
        </h1>
        <div className=" overflow-auto flex flex-col gap-4 font-Playpensans ">
          <p className="">
            "Meet Rhonak, a 21-year-old adventurer hailing from the serene city
            of Mangalore. He possesses an unquenchable spirit that's more than a
            thirst for life; it's a fiery determination that blazes through
            every challenge. To Rhonak, every challenge is just another stepping
            stone on the path of life's grand journey.
          </p>
          <p className="">
            What truly sets Rhonak apart is not just his zest for adventure but
            his boundless positivity, relentless curiosity, and a genuine love
            for fun. Life, to him, isn't just about reaching destinations; it's
            about the captivating stories he collects along the way. With a
            Bachelor's degree in Computer Applications from Alvas College,
            Rhonak brings a touch of brilliance to every adventure. He's not
            just an explorer; he's also a vlogging sensation, masterfully
            capturing the vibrant moments that life offers.
          </p>
          <p className="">
            And then, life took an unexpected turn. As he was embarking on a new
            chapter, recently started in a job in Pune, Rhonak decided to return
            to Mangalore to nurture the next generation of tech enthusiasts by
            conducting an IoT internship for Alvas BCA juniors.
          </p>
          <p className="">
            But then, one fateful day, just as he was set to return to Pune,
            Rhonak's world was gently and irrevocably altered by a life-altering
            bike accident."
          </p>
        </div>
      </div>
      <div className="hidden lg:flex right_section w-1/2 opacity-80">
        <img
          src={images[currentImage]}
          alt="rhonak_images"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default AboutMe;
