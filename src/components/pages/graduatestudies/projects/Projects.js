import React, { useState } from "react";
import Collapsible from "react-collapsible";
import styles from "../projects/Projects.module.css"
import ImageCarousel from "../../../imageCarousel/ImageCarousel.js";
import FairyDoorImages from "../../../../data/FairyDoorImages.js";
import BookcaseImages from "../../../../data/BookcaseImages.js";
import WorkTableImages from "../../../../data/WorkTableImages.js";
import SmallProjectsImages from "../../../../data/SmallProjects.js";
import DTNonLinear from "../../../../images/DesignThinking/td-design-thinking-non-linear-process.jpg";

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTriggerClick = (accordionPosition) => {
    setIsOpen(prev => ({
      ...prev,
      [accordionPosition]: !prev[accordionPosition]
    }));
  }

  console.log(isOpen)

  return (
    <div>
      <Collapsible accordionPosition={Number("1")} trigger=
        {
          <div onClick={() => handleTriggerClick(Number("1"))} className={styles.customTrigger}>
            <h1 className={styles.sectionTitles}>Prototyping/Physical Product Development</h1>
            <span className={`${styles.arrow} ${isOpen ? `${styles.open}` : `${styles.arrow}`}`}>&#8964;</span>
          </div>
        }>
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
      <Collapsible accordionPosition={Number("2")} trigger={
        <div onClick={() => handleTriggerClick(Number("2"))} className={styles.customTrigger}>
          <h1 className={styles.sectionTitles}>Design Thinking</h1>
          <span className={`${styles.arrow} ${isOpen ? `${styles.open}` : `${styles.arrow}`}`}>&#8964;</span>
        </div>}>
      </Collapsible>
      <Collapsible trigger={
        <div className={styles.customTrigger}>
          <h1 className={styles.sectionTitles}>Branding</h1>
          <span className={`${styles.arrow} ${isOpen ? `${styles.open}` : `${styles.arrow}`}`}>&#8964;</span>
        </div>}>
      </Collapsible>
      <Collapsible trigger={
        <div className={styles.customTrigger}>
          <h1 className={styles.sectionTitles}>Digital Product Development</h1>
          <span className={`${styles.arrow} ${isOpen ? `${styles.open}` : `${styles.arrow}`}`}>&#8964;</span>
        </div>}>
      </Collapsible>
    </div>
  )
}

export default Projects;