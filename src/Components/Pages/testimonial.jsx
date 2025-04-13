import React, { useState } from "react";
import TestimonialCard from "../testimonialCard/testimonial_card";
import image1 from "../../assests/testimonial/1.webp";
import image2 from "../../assests/testimonial/2.webp";
import image3 from "../../assests/testimonial/3.jpeg";

const Testimonial = () => {
  const testimonials = [
    {
      image: image1,
      title: "Muhammad Bilal",
      rating: "4.5",
      desc: "The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales.The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales.",
    },
    {
      image: image2,
      title: "Ammar",
      rating: "4.5",
      desc: "The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales.The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales.",
    },
    {
      image: image3,
      title: "Muhammad",
      rating: "4.5",
      desc: "The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales.The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex + 2 < testimonials.length) {
      setCurrentIndex(currentIndex + 2);
    }
  };

  const prevSlide = () => {
    if (currentIndex - 2 >= 0) {
      setCurrentIndex(currentIndex - 2);
    }
  };

  return (
    <div className="max-w-[1300px] mx-auto px-4 py-10 relative">
      {/* Arrow Buttons */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={`p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition ${
            currentIndex === 0 ? "opacity-30 cursor-not-allowed" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l14 0" />
            <path d="M5 12l6 6" />
            <path d="M5 12l6 -6" />
          </svg>
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
        <button
          onClick={nextSlide}
          disabled={currentIndex + 2 >= testimonials.length}
          className={`p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition ${
            currentIndex + 2 >= testimonials.length
              ? "opacity-30 cursor-not-allowed"
              : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l14 0" />
            <path d="M13 18l6 -6" />
            <path d="M13 6l6 6" />
          </svg>
        </button>
      </div>

      {/* Centered Cards */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials
            .slice(currentIndex, currentIndex + 2)
            .map((item, index) => (
              <TestimonialCard
                key={index}
                image={item.image}
                title={item.title}
                rating={item.rating}
                description={item.desc}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
