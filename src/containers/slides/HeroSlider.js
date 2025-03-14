import React from "react";
import "./HeroSlider.scss";

const images = [
  "https://i.imgur.com/gXUtcmS.png",
  "https://i.imgur.com/NLKMMUk.jpeg",
  "https://i.imgur.com/XjdLtG8.png",
  "https://i.imgur.com/sYb4GJC.png",
  "https://i.imgur.com/rz5fmsH.jpeg",
  "https://i.imgur.com/hHttimW.png"
];

const HeroSlider = () => {
  return (
    <div className="hero-slider">
      <div className="slider-track">
        {/* Nhân đôi ảnh trực tiếp để tạo hiệu ứng vô hạn */}
        {[...images, ...images].map((img, index) => (
          <div className="slide" key={index}>
            <img src={img} alt={`Slide ${index}`} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
