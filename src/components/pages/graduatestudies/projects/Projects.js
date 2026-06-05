import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Collapsible from "react-collapsible";
import styles from "../projects/Projects.module.css"
import ImageCarousel from "../../../imageCarousel/ImageCarousel.js";
import FairyDoorImages from "../../../../data/FairyDoorImages.js";
import BookcaseImages from "../../../../data/BookcaseImages.js";
import WorkTableImages from "../../../../data/WorkTableImages.js";
import SmallProjectsImages from "../../../../data/SmallProjects.js";
import DTNonLinear from "../../../../images/DesignThinking/td-design-thinking-non-linear-process.jpg";

const Projects = ( {accordionPositions}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams] = useSearchParams();

  const handleTriggerClick = (accordionPosition) => {
    setIsOpen(prev => ({
      ...prev,
      [accordionPosition]: !prev[accordionPosition]
    }));
  };

  useEffect(() => {
    const getAccPosition = () => {
      for (const accordionPosition of accordionPositions) {
        return accordionPosition;
      };
    };
    const targetSection = searchParams.get(getAccPosition());
    if (targetSection === getAccPosition()) {
      setIsOpen(true)
    }
  }, [accordionPositions, searchParams]);

  return (
    <div>
      <Collapsible accordionPosition={"1"} trigger=
        {
          <div onClick={() => handleTriggerClick(1)} className={styles.customTrigger}>
            <h1 className={styles.sectionTitles}>Prototyping/Physical Product Development</h1>
            <span className={`${styles.arrow} ${isOpen[1] ? `${styles.open}` : `${styles.arrow}`}`}>&#8964;</span>
          </div>
        }>
        <div id="section1">
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
      <Collapsible accordionPosition={"2"} trigger={
        <div onClick={() => handleTriggerClick(2)} className={styles.customTrigger}>
          <h1 className={styles.sectionTitles}>Design Thinking</h1>
          <span className={`${styles.arrow} ${isOpen[2] ? `${styles.open}` : `${styles.arrow}`}`}>&#8964;</span>
        </div>}>
        <div id="section2">
          <p>Content Goes Here</p>
        </div>
        <img className={styles.dTNonLinear} src={DTNonLinear} alt="Design Thinking Chart" />
      </Collapsible>
      <Collapsible accordionPosition={"3"} trigger={
        <div onClick={() => handleTriggerClick(3)} className={styles.customTrigger}>
          <h1 className={styles.sectionTitles}>Branding</h1>
          <span className={`${styles.arrow} ${isOpen[3] ? `${styles.open}` : `${styles.arrow}`}`}>&#8964;</span>
        </div>}>
        <div id="section3" >
          <p>Content Goes Here</p>
        </div>
      </Collapsible>
      <Collapsible accordionPosition={"4"} trigger={
        <div onClick={() => handleTriggerClick(4)} className={styles.customTrigger}>
          <h1 className={styles.sectionTitles}>Digital Product Development</h1>
          <span className={`${styles.arrow} ${isOpen[4] ? `${styles.open}` : `${styles.arrow}`}`}>&#8964;</span>
        </div>}>
        <div id="section4" >
          <p>Content Goes Here</p>
        </div>
      </Collapsible>
    </div>
  )
}

export default Projects;