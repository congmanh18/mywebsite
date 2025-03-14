import React from "react";
import "./HeroSlider.scss";

// List of images located in the public folder
const images = [
  "/personal/gXUtcmS.png",
  "/personal/baovekhoaluan.png",
  "/personal/XjdLtG8.png",
  "/personal/sYb4GJC.png",
  "/personal/rz5fmsH.png",
  "/personal/hHttimW.png"
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
