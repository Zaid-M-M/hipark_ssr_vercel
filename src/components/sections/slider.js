import React from "react";
import Slider from 'react-slick';

const SliderSection = (props) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    ...props.settings
  };

  return (
    <Slider {...settings}>
      {props.children}
    </Slider>
  );
};

export default SliderSection;
