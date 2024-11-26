import React from 'react';
import { assets, testimonialsData } from '../assets/assets';

const Testimonial = () => {
  return (
    <div className="container mx-auto py-10 lg:px-32 w-full overflow-hidden" id='Testimonials'>
      <h1 className="text-2xl sm:text-center mb-6">
        Customer <span>Testimonial</span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-xl mx-auto">
        Real Stories from Those who Found Home with us
      </p>
      <div className="flex flex-wrap justify-center gap-6"> {/* Adjusted gap size */}
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="max-w-[280px] border shadow-md rounded px-3 py-4 text-center"> {/* Reduced width and padding */}
            <img
              className="w-16 h-16 rounded-full mx-auto mb-4"
              src={testimonial.image} // Ensure the image path is correct
              alt={testimonial.alt}
            />
            <h2 className="text-lg text-gray-700 font-medium">{testimonial.name}</h2>
            <p className="text-gray-500 mb-3 text-sm">{testimonial.title}</p>
            
            {/* Rating section */}
            <div className="flex justify-center mb-3">
              {Array.from({ length: testimonial.rating }, (item, index) => (
                <img key={index} src={assets.star_icon} alt="star" className="w-4 h-4 mx-1" /> 
              ))}
            </div>

            <p className="text-gray-600 text-sm">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
