import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "../projects/Projects.module.css"
import ImageCarousel from "../../../imageCarousel/ImageCarousel.js";
import FairyDoorImages from "../../../../data/FairyDoorImages.js";
import BookcaseImages from "../../../../data/BookcaseImages.js";
import WorkTableImages from "../../../../data/WorkTableImages.js";
import SmallProjectsImages from "../../../../data/SmallProjects.js";
import DTNonLinear from "../../../../images/DesignThinking/td-design-thinking-non-linear-process.jpg";
import CollapsibleItem from "../../../collapsible/CollapsibleItem.js";

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
    })
  }

  useEffect(() => {

    const clickedSection = searchParams.get('section');

    const findRightSection = (clickedSection) => {
      const sectionToOpen = Array.from(sectionList).find(projectSection => {
        const index = projectSection.getAttribute("data-index");
        if (index === clickedSection) {
          return index;
        }
      })
      return sectionToOpen
    }
    
    simulateClick(findRightSection(clickedSection))

  }, [searchParams, sectionList]);

  return (
    <div>
      <CollapsibleItem
        id={"section1"}
        dataIndex={1}
        onClick={() => handleTriggerClick(1)}
        title="Prototyping/Physical Product Development"
        isOpen={isOpen}
      >
        <div>
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
      </CollapsibleItem>
      <CollapsibleItem
        dataIndex={2}
        onClick={() => handleTriggerClick(2)}
        title="Design Thinking"
        isOpen={isOpen}>
        <div>
          <p>Content Goes Here</p>
          <img className={styles.dTNonLinear} src={DTNonLinear} alt="Design Thinking Chart" />
        </div>
      </CollapsibleItem>
      <CollapsibleItem
        dataIndex={3}
        onClick={() => handleTriggerClick(3)}
        title="Branding"
        isOpen={isOpen}>
        <div>
          <p>Content Goes Here</p>
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
      <div className={styles.lbBackground} alt="Shayla Kirby Unsplash"/>
    </div>
  )
}

export default Projects;