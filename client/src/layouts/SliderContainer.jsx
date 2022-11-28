import React, { useState } from "react";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Slider from "../components/Slider";
import { sliderItems } from "../data/data";


/* CORREGIR EL SLIDER PARA QUE TENGA MOVIMIENTO */

const SliderContainer = () => {
  const [slideIndex, setSlideIndex] = useState(100);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className="relative flex h-screen w-full overflow-hidden">
      <div
        className="absolute top-0 bottom-0 left-5 z-10 m-auto flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-400"
        onClick={() => handleClick("left")}
      >
        <ArrowBackIosNewOutlinedIcon fontSize="small" color="secondary" />
      </div>
      <div
        className="flex h-full"
        style={{
          translate: `(${slideIndex}"vw")`,
        }}
      >
        {sliderItems.map((item) => (
          <Slider
            key={item.id}
            title={item.title}
            bg={item.bg}
            desc={item.desc}
            img={item.img}
          />
        ))}
      </div>

      <div
        className="absolute top-0 bottom-0 right-5 m-auto flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-400"
        onClick={() => handleClick("right")}
      >
        <ArrowForwardIosOutlinedIcon fontSize="small" color="secondary" />
      </div>
    </div>
  );
};

export default SliderContainer;
