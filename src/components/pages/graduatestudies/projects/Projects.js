import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "../projects/Projects.module.css";
import ImageCarousel from "../../../imageCarousel/ImageCarousel.js";
import CollapsibleItem from "../../../collapsible/CollapsibleItem.js";
import FairyDoorImages from "../../../../data/FairyDoorImages.js";
import BookcaseImages from "../../../../data/BookcaseImages.js";
import WorkTableImages from "../../../../data/WorkTableImages.js";
import SmallProjectsImages from "../../../../data/SmallProjects.js";
import DTNonLinear from "../../../../images/DesignThinking/DTProcess.jpeg";
import DTStickies from "../../../../images/Backgrounds/DTStickies.jpg";
import PawPrintBg from "../../../../images/DesignChallenges/PawPrintBg.jpg";
import Oubliette from "../../../../static/Oubliette Presentation.Sheena Monroe.pdf";

const Projects = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams] = useSearchParams();

  const sectionList = document.getElementsByClassName('project-list');

  const handleTriggerClick = (accordionPosition) => {
    setIsOpen(prev => ({
      ...prev,
      [accordionPosition]: !prev[accordionPosition]
    }));
  };

  const simulateClick = (e) => {
    e.click();
    window.scrollTo({
      top: true,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const clickedSection = searchParams.get('section');

    if (!clickedSection) return;

    const findRightSection = (clickedSection) => {
      const sectionToOpen = Array.from(sectionList).find(projectSection => {
        const index = projectSection.getAttribute("data-index");
        if (index === clickedSection) {
          return index;
        }
        return null;
      })
      return sectionToOpen;
    }

    simulateClick(findRightSection(clickedSection));

  }, [searchParams, sectionList]);

  return (
    <div>
      <CollapsibleItem
        id={"section1"}
        dataIndex={1}
        onClick={() => handleTriggerClick(1)}
        title="Prototyping - Physical Product Development"
        isOpen={isOpen}
      >
        <div>
          <div className={styles.imageSliderCont}>
            <p className={styles.imageSliderTitles}>Fairy Door Clock</p>
            <ImageCarousel data={FairyDoorImages} />
          </div>
          <div className={styles.imageSliderCont2}>
            <p className={styles.imageSliderTitles}>Steampunk Bookcase</p>
            <ImageCarousel data={BookcaseImages} />
          </div>
          <div className={styles.imageSliderCont}>
            <p className={styles.imageSliderTitles}>Convertible Work Table</p>
            <ImageCarousel data={WorkTableImages} />
          </div>
          <div className={styles.imageSliderCont2}>
            <p className={styles.imageSliderTitles}>Small Projects</p>
            <ImageCarousel data={SmallProjectsImages} />
          </div>
        </div>
      </CollapsibleItem>
      <CollapsibleItem
        dataIndex={2}
        onClick={() => handleTriggerClick(2)}
        title="Design Thinking - Process & Implementation"
        isOpen={isOpen}>
        <div className={styles.dTCont}>
          <div className={styles.dTPCont}>
            <img className={styles.dTStickies} src={DTStickies} alt="Post-its on Whiteboard" />
            <p className={styles.dTSection1}>5 Stage Process</p>
            <img className={styles.dTNonLinear} src={DTNonLinear} alt="Design Thinking Process Chart" />
          </div>
          <div className={styles.dTChallenges}>
            <p className={styles.dTSection2}>Implementation</p>
            <div className={styles.dCh1}>
              <img className={styles.pawPrintBg} src={PawPrintBg} alt="Paw Print Background" />
            </div>
            <div className={styles.dCh2}>

            </div>

          </div>
        </div>
      </CollapsibleItem>
      <CollapsibleItem
        dataIndex={3}
        onClick={() => handleTriggerClick(3)}
        title="Brand Building"
        isOpen={isOpen}>
        <div className={styles.presentationCont}>
          <a href={Oubliette} target="_blank" rel="noreferrer">Oubliette Cellars Underground Brewery Concept</a>
        </div>
      </CollapsibleItem>
      <CollapsibleItem
        dataIndex={4}
        onClick={() => handleTriggerClick(4)}
        title="Digital Product Development"
        isOpen={isOpen}>
        <div>
          <p>Content Goes Here</p>
        </div>
      </CollapsibleItem>
      <div className={styles.lbBackground} alt="Shayla Kirby Unsplash" />
    </div>
  )
}

export default Projects;