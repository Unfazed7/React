import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import t1 from "./images/t2.webp";
import t2 from "./images/t3.webp";
import t3 from "./images/t4.webp";
import t4 from "./images/t5.webp";

const Slider = () => {
  const sliderItems = [
    {
      image:  t1 ,
      
    },
    {
      image:  t2 ,
      
    },
    {
      image: t3,
      
    },
    {
      image: t4 ,
      
    },
  ];

  return (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      {sliderItems.map((item, index) => (
        <div key={index}>
          <img src={item.image} alt={item.caption} />
          <p className="legend">{item.caption}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
