import React from "react";
import styles from "./ImageCarousel.module.css"

const ImageCarousel = ({ data }) => {
  


  return (
    <div>
      {
        Object.keys(data).map((item, key)=> (
          <img src={item.src} alt={item.alt} key={item.key} />
        ))
      }
    </div>
  )
};

export default ImageCarousel;