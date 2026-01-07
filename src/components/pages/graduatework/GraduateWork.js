import React from "react";
import styles from "../graduatework/GraduateWork.module.css"
import Button from "../../button/Button";
import ImageCarousel from "../../imageCarousel/ImageCarousel";
import FairyDoorImages from "../../../data/FairyDoorImages";
import BookcaseImages from "../../../data/BookcaseImages";
import WorkTableImages from "../../../data/WorkTableImages.js";
import SmallProjectsImages from "../../../data/SmallProjects.js";



const GradWork = () => {

  return (
    <div className={styles.pageCont}>
      <div className={styles.background} alt="Shayla Kirby on Unsplash" />
      <div className={styles.bodyCont}>
        <div className={styles.header}>
          <h1>Masters of Innovation Design</h1>
          <h2>Wichita State University</h2>
        </div>
        <div className={styles.buttonCont}>
          <Button className={styles.button}><a
            className={styles.link}
            href="https://www.wichita.edu/academics/college-of-innovation-and-design/master-innovation-design/index.php">
            Learn More About MID</a></Button>
        </div>
        <div>
          <p className={styles.introPara}>In the late 2010s, I was once again trying to decide who and what I wanted to be when I grow up.
            Several years after completing my undergrad in Theatre Performance with a minor in Dance, I was perusing the website of my alma mater and came across a new graduate degree called, as you might imagine, Innovation Design.
            I was intrigued to say the least. As an intuitive problem solver, I wanted to find a way to make a living doing exactly that. After all, what's better than an innovative solution?
            Please see the sections and projects below to help get a better understanding of this unique degree.</p>
        </div>
        <div className={styles.sectionTitles}>
          <h1>Prototyping & Product Design</h1>
          <div className={styles.fairyDoorCont}>
            <p className={styles.imageSliderTitles}>Fairy Door Clock</p>
            <ImageCarousel data={FairyDoorImages} />
          </div>
          <div className={styles.bookcaseCont}>
            <p className={styles.imageSliderTitles}>Steampunk Bookcase</p>
            <ImageCarousel data={BookcaseImages} />
          </div>
          <div className={styles.workTableCont}>
            <p className={styles.imageSliderTitles}>Convertible Work Table</p>
            <ImageCarousel data={WorkTableImages} />
          </div>
          <div className={styles.smallerProj}>
            <p className={styles.imageSliderTitles}>Smaller Projects</p>
            <ImageCarousel data={SmallProjectsImages} />
          </div>
        </div>
        <div className={styles.background} alt="Shayla Kirby on Unsplash" />
        <div className={styles.sectionTitles}>
          <h1>Design Thinking</h1>
        </div>
      </div>
    </div>
  );
};

export default GradWork;