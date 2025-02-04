import React from "react";
import ImageSlider from "../../imagesilder/ImageSlider";
import styles from '../home/Home.module.css';
import Wichita from '../../../images/WichitaSkyline.jpeg';
import Chicago from '../../../images/ChicagoSkyline.png.jpeg';
import ProfilePic from '../../../images/ProfilePic.jpeg'

const Home = () => {
  const images = [Wichita, Chicago]
  const profilePic = ProfilePic

  return (
    <div>
      <div>
        <ImageSlider images={images} />
      </div>
      <div className={styles.aboutSectionContainer}>
        <h1 className={styles.aboutSection}>About</h1>
        <img className={styles.profilePic} src={profilePic} alt="Sheena Monroe" />
        <p className={styles.aboutParagraph}>I am a perpetual work in progress and a forever student of life. I embrace
        all things colorful, unique, and interesting. I'm a maker of things, a writer of thoughts, a designer of dreams and solver of problems large and small. 
        Here I hope you will find my work interesting, my words thoughtful and my ideas inspirational.</p>
      </div>
    </div>
  )
}

export default Home;