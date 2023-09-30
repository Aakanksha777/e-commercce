import React, { useEffect, useState } from "react";
import image1 from "../../Assets/trendy-carousel-1.webp";
import image2 from "../../Assets/trendy-carousel-2.webp";
import image3 from "../../Assets/trendy-carousel-3.webp";

const Carousel = () => {
  const imageList = [image1, image2, image3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    let time = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imageList.length);
    }, 4000);

    return () => clearInterval(time);
  }, [imageList.length]);

  return (
    <div>
      <img src={imageList[currentImage]} alt="signup" className="side-image" />
    </div>
  );
};

export default Carousel;
