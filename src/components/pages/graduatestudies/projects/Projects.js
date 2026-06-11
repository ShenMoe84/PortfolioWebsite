import React, { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
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
  const [searchParams] = useSearchParams();



  const handleTriggerClick = (accordionPosition) => {
    setIsOpen(prev => ({
      ...prev,
      [accordionPosition]: !prev[accordionPosition]
    }));
  };


  useEffect(() => {
    const list = document.getElementsByClassName('project-list');
    const clickedSection = searchParams.get('section');

    const findRightSection = (clickedSection) => {
      const sectionToOpen = Array.from(list).find(element => {
        const index = element.getAttribute("data-index")
        if (index === clickedSection) {
          console.log(index)
          return index
        }
      }
      )
      console.log(sectionToOpen)
      return sectionToOpen
    }
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    findRightSection(clickedSection);
    handleTriggerClick(clickedSection)
    return () => clearTimeout(timer)
  }, [searchParams]);

  return (
    <div>
      <Collapsible trigger=
        {
          <div onClick={() => handleTriggerClick(0)} className={styles.customTrigger}>
            <h1 className={styles.sectionTitles}>Prototyping/Physical Product Development</h1>
            <span className={`${styles.arrow} ${isOpen[0] ? `${styles.open}` : `${styles.arrow}`}`}>&#8964;</span>
          </div>
        }>
        <div className="project-list" data-index="0">
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
        </div>
      </Collapsible>
      <Collapsible trigger={
        <div onClick={() => handleTriggerClick(1)} className={styles.customTrigger}>
          <h1 className={styles.sectionTitles}>Design Thinking</h1>
          <span className={`${styles.arrow} ${isOpen[1] ? `${styles.open}` : `${styles.arrow}`}`}>&#8964;</span>
        </div>}>
        <div className="project-list" data-index="1">
          <p>Content Goes Here</p>
        </div>
        <img className={styles.dTNonLinear} src={DTNonLinear} alt="Design Thinking Chart" />
      </Collapsible>
      <Collapsible trigger={
        <div onClick={() => handleTriggerClick(2)} className={styles.customTrigger}>
          <h1 className={styles.sectionTitles}>Branding</h1>
          <span className={`${styles.arrow} ${isOpen[2] ? `${styles.open}` : `${styles.arrow}`}`}>&#8964;</span>
        </div>}>
        <div className="project-list" data-index="2">
          <p>Content Goes Here</p>
        </div>
      </Collapsible>
      <Collapsible trigger={
        <div onClick={() => handleTriggerClick(3)} className={styles.customTrigger}>
          <h1 className={styles.sectionTitles}>Digital Product Development</h1>
          <span className={`${styles.arrow} ${isOpen[3] ? `${styles.open}` : `${styles.arrow}`}`}>&#8964;</span>
        </div>}>
        <div className="project-list" data-index="3">
          <p>Content Goes Here</p>
        </div>
      </Collapsible>
    </div>
  )
}

export default Projects;