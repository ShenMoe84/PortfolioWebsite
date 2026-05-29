import React from "react";
import styles from "../projects/Projects.module.css"
import ImageCarousel from "../../../imageCarousel/ImageCarousel.js";
import FairyDoorImages from "../../../../data/FairyDoorImages.js";
import BookcaseImages from "../../../../data/BookcaseImages.js";
import WorkTableImages from "../../../../data/WorkTableImages.js";
import SmallProjectsImages from "../../../../data/SmallProjects.js";
import DTNonLinear from "../../../../images/DesignThinking/td-design-thinking-non-linear-process.jpg";

const Projects = () => {
  return (
    <div>
      <div>
        <h1 className={styles.sectionTitles}>Prototyping & Product Design</h1>
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
          <p className={styles.imageSliderTitles}>Small Projects</p>
          <ImageCarousel data={SmallProjectsImages} />
        </div>
      </div>
      <div>
        <div className={styles.dTBackground} alt="Hugo Rocha Unsplash">
          <img className={styles.dTNonLinear} alt="Design Thinking diagram" src={DTNonLinear} />
        </div>
      </div>
    </div>
  )
}

export default Projects;