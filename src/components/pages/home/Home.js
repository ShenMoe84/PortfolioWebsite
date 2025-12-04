import React from "react";
import ImageSlider from "../../imagesilder/ImageSlider";
import styles from '../home/Home.module.css';
import Wichita from '../../../images/WichitaSkyline.jpeg';
import Chicago from '../../../images/ChicagoSkyline.jpeg';
import ProfilePic from '../../../images/ProfilePic.jpeg'

const Home = () => {
  const images = [Wichita, Chicago]
  const profilePic = ProfilePic

  return (
    <div className={styles.background}>
      <div>
        <ImageSlider images={images} />
      </div>
      <div className={styles.aboutSectionContainer}>
        <h1 className={styles.aboutSection}>Hello!</h1>
        <img className={styles.profilePic} src={profilePic} alt="Sheena Monroe" />
        <p className={styles.aboutParagraph}>Welcome to my portfolio. I'm a Wichita, KS native, and recent Chicagoan. Much like this site, I am a perpetual work in progress and a forever student of life. I embrace
        all things colorful, unique, and interesting. Fortunately, I find a lot of things interesting, so I'm never truly bored.
        A maker of things, a writer of thoughts, a designer of dreams, I find myself solving problems large and small. 
        Here I hope you will find my work interesting, my words thoughtful and my ideas inspirational.</p>
      </div>
    </div>
  )
}

export default Home;