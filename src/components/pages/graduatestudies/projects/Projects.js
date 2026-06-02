import React, { useState } from "react";
import Collapsible from "react-collapsible";
import { RiArrowDropDownLine } from "react-icons/ri";
import styles from "../projects/Projects.module.css"
import ImageCarousel from "../../../imageCarousel/ImageCarousel.js";
import FairyDoorImages from "../../../../data/FairyDoorImages.js";
import BookcaseImages from "../../../../data/BookcaseImages.js";
import WorkTableImages from "../../../../data/WorkTableImages.js";
import SmallProjectsImages from "../../../../data/SmallProjects.js";
import DTNonLinear from "../../../../images/DesignThinking/td-design-thinking-non-linear-process.jpg";

const Projects = ({ isOpen }) => {

  return (
    <div>
      <Collapsible trigger={
        <div className={styles.customTrigger}>
          <h1 className={styles.sectionTitles}>Prototyping & Product Design</h1>
          <span className={`${styles.arrow} ${isOpen ? 'active' : ''}`}>&#8964;</span>
        </div>}>
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
        <div className={styles.smallProjCont}>
          <p className={styles.imageSliderTitles}>Small Projects</p>
          <ImageCarousel data={SmallProjectsImages} />
        </div>
      </Collapsible>
      <Collapsible trigger={<h1>Design Thinking</h1>} className={styles.sectionTitles}>
        <div className={styles.image}>
          <img alt="Design Thinking Process Chart" src={DTNonLinear} />
        </div>
      </Collapsible>
    </div>
  )
}

export default Projects;