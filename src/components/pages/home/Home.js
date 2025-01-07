import React from "react";
import ImageSlider from "../../imagesilder/ImageSlider";
import styles from '../home/Home.module.css';
import Wichita from '../../../images/WichitaSkyline.jpeg';
import Chicago from '../../../images/ChicagoSkyline.png.jpeg';

const Home = () => {
  const images = [Wichita, Chicago]

  return (
    <div>
      <ImageSlider imageUrls={images} />
    </div>
  )
}

export default Home;