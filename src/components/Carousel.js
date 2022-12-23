import React, { useEffect, useState } from "react";

const Carousel = () => {
  const data = [
    "Very helpful and got my car sorted and delivered. They answered all my questions and were always very professional. Highly recommend.",
    "Marcus has always been my go to when it comes to purchasing cars, now him and the rest of the team at Brocar were able to save me money on my monthly payments along with the invaluable advice throughout the process, thank you!!",
    "Excellent honest service which goes a long way with me. I have had issues with other finance companies but from the very start, they took me through the procedures and gave me options which suited my budget. I didn’t feel rushed and I would highly recommend. I plan to change my car after 3-4 years and I will most certainly return. Thank you guys.",
    "Karel has been sorting out my vehicles for over 10 years at his previous employers. He has just came through again saving me several hundreds of pounds on my car refinance.",
    "So quick and easy with brocar! Was worried about prices and lead times but the guys kept me informed the whole way and I couldn’t be happier now!",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselInfiniteScroll = () => {
    if (currentIndex === data.length - 1) {
      return setCurrentIndex(currentIndex(0));
    }
    return setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      carouselInfiniteScroll();
    }, 10000);
    return () => clearInterval(interval);
  });
  return (
    <div className="is-flex is-justify-content-center">
      <div className="carousel-container">
        {data.map((item, index) => {
          return (
            <>
              <p
                className="carousel-item is-size-4-desktop is-size-6-mobile has-text-centered p-6"
                style={{ transform: `translate(-${currentIndex * 100}%)` }}
                key={index}
              >
                "{item}"
              </p>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
