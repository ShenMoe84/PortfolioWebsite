import React from "react";
import ImageSlider from "../../imagesilder/ImageSlider";
import Form from "../../../components/form/Form";
import styles from '../home/Home.module.css';
import Wichita from '../../../images/WichitaSkyline.jpeg';
import Chicago from '../../../images/ChicagoSkyline.jpeg';
import ProfilePic from '../../../images/ProfilePic.jpeg';

const Home = () => {
  const images = [Wichita, Chicago]
  const profilePic = ProfilePic

  return (
    <div className={styles.background}>
      <div>
        <ImageSlider images={images} delay={10000} />
      </div>
      <div className={styles.aboutSectionContainer}>
        <h1 className={styles.aboutSection}>Hello, World!</h1>
        <img className={styles.profilePic} src={profilePic} alt="Sheena Monroe" />
        <p className={styles.aboutParagraph}>Welcome to my website - coded and designed by me! I'm a Wichita, Kansas native and
          recent Chicagoan. Much like this site, I'm a work in progress on a journey of improving a little every day.
          I embrace all things colorful, unique, and interesting. Fortunately, many things fall into those categories, so I'm never truly bored.
          Amongst other things, I am a designer, software developer, innovative thinker, and maker. In conjuction with those, I find myself wanting to solve problems large and small.
          Here I hope you will find my work interesting, my words thoughtful and my ideas inspirational.</p>
      </div>
      <div>
        <Form
          title="Contact">
          <input type="text" />
          <input type="email" />
          <textarea />
        </Form>

      </div>
    </div>
  )
}

export default Home;