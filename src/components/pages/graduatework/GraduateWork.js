import React from "react";
import styles from "../graduatework/GraduateWork.module.css"
import Button from "../../button/Button";
import ImageCarousel from "../../imageCarousel/ImageCarousel";
import FairyDoorImages from "../../../data/FairyDoorImages";
import BookcaseImages from "../../../data/BookcaseImages";



const GradWork = () => {

  return (
    <div className={styles.pageCont}>
      <img className={styles.background} alt="Shayla Kirby on Unsplash" />
      <div className={styles.bodyCont}>
        <div className={styles.header}>
          <h1>Masters of Innovation Design</h1>
          <h2>Wichita State University</h2>
        </div>
        <div className={styles.buttonCont}>
          <Button className={styles.button}><a
            className={styles.links}
            href="https://www.wichita.edu/academics/college-of-innovation-and-design/master-innovation-design/index.php">
            Learn More About MID</a></Button>
        </div>
        <div>
          <p className={styles.introPara}>In the late 2010s, I was once again trying to decide what I want to be when I grow up.
            After completing my undergraduate degree in Theatre Performance, I was perusing my alma mater’s website and came across a new graduate degree called (you guessed it) Innovation Design.
            I was intrigued to say the least. As an intuitive problem solver, I wanted to find a way to make a living doing it. And what's better than an innovative solution?
            Please see the projects I completed below as part of this degree to help get a better understanding of this
            unique degree.</p>
        </div>
        <div className={styles.prototyping}>
          <h1>Practical Prototyping</h1>
          <div className={styles.fairyDoorCont}>
            <h2>Fairy Door Clock</h2>
            <div>
              <ImageCarousel data={FairyDoorImages} />
            </div>
          </div>
          <div className={styles.bookcaseCont}>
            <h2>Steampunk Bookcase</h2>
            <div>
              <ImageCarousel data={BookcaseImages} />
            </div>
          </div>
          <div className={styles.workTable}>
            <h2>Convertible Work Table</h2>
          </div>
          <div className={styles.smallerProj}>
            <h2>Smaller Projects</h2>
          </div>
        </div>
        <div className={styles.designT}>
          <h2>Design Thinking</h2>
        </div>
      </div>
    </div>
  );
};

export default GradWork;