// ContactPage.js

import React from "react";

const ContactPage = () => {
  return (
    <div className="container mx-auto p-4 font-Playpensans text-center text-black">
      <div className="bg-gray-200 p-6 rounded-lg shadow-md font-Playpensans">
        <h2 className="text-3xl font-bold mb-8 text-center font-ShadowsIntoLight">
          Contact Us
        </h2>

        <p className="mb-8">
          If you have any questions, wish to share words of encouragement, or
          want to get in touch with us, please feel free to reach out. We
          appreciate your support and value your thoughts.
        </p>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-2">Contact Information</h3>
          <p>
            Email:{" "}
            <span className="text-blue-500">[Insert Your Email Address]</span>
          </p>
          <p>
            Phone:{" "}
            <span className="text-blue-500">[Insert Your Phone Number]</span>
          </p>
          <p>
            Address:{" "}
            <span className="text-blue-500">[Insert Your Mailing Address]</span>
          </p>
          <p>
            Social Media:{" "}
            <span className="text-blue-500">
              [Insert Your Social Media Profiles]
            </span>
          </p>
        </div>

        <p>
          We're here to listen and to connect with you. Your messages mean the
          world to us, and we'll do our best to respond as promptly as possible.
        </p>

        <p>
          Thank you for being a part of this journey. Your support keeps us
          moving forward with hope and determination.
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
