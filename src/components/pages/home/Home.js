import React from "react";
import ImageSlider from "../../imagesilder/ImageSlider";
import Footer from '../../footer/Footer'
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
        <p className={styles.aboutParagraph}>Welcome to my portfolio. Wichita, KS native, and recent Chicagoan. I am a perpetual work in progress and a forever student of life. I embrace
        all things colorful, unique, and interesting. Fortunately for me, I find a lot of things interesting, so I'm never bored.
        A maker of things, a writer of thoughts, a designer of dreams, I find myself solving problems large and small. 
        Here I hope you will find my work interesting, my words thoughtful and my ideas inspirational.</p>
      </div>
    </div>
  )
}

export default Home;