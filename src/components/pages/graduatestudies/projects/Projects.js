import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

import styles from "../projects/Projects.module.css"
import ImageCarousel from "../../../imageCarousel/ImageCarousel.js";
import FairyDoorImages from "../../../../data/FairyDoorImages.js";
import BookcaseImages from "../../../../data/BookcaseImages.js";
import WorkTableImages from "../../../../data/WorkTableImages.js";
import SmallProjectsImages from "../../../../data/SmallProjects.js";
import DTNonLinear from "../../../../images/DesignThinking/td-design-thinking-non-linear-process.jpg";
import CollapsibleItem from "../../../collapsible/CollapsibleItem.js";

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const sectionRef = useRef(null);



  const handleTriggerClick = (accordionPosition) => {
    setIsOpen(prev => ({
      ...prev,
      [accordionPosition]: !prev[accordionPosition]
    }));
  };


  useEffect(() => {
    // First, we get the list of project sections.
    const sectionList = document.getElementsByClassName('project-list');

    //Second, we get the search parameters that involved the wors 'section', which returns a number.
    const clickedSection = searchParams.get('section');

    //Next, we take that number and check to see if it matches the data-index number embedded in the section itself.
    const findRightSection = (clickedSection) => {
      //Make an array from the sections
      const sectionToOpen = Array.from(sectionList).find(projectSection => {
        //Find each of their data-indexes
        const index = projectSection.getAttribute("data-index");
        //If the data-index matches the section that was clicked
        if (index === clickedSection) {
          //set the state to true
          console.log(index)
          return index;
          
        }
      })
      console.log(sectionToOpen)
      return sectionToOpen
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);

    findRightSection(clickedSection);
    

    return () => clearTimeout(timer)
  }, [searchParams]);

  return (
    <div>
      <CollapsibleItem
        dataIndex={1}
        onClick={() => handleTriggerClick(1)}
        title="Prototyping/Physical Product Development"
        isOpen={isOpen}>
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
      <img className={styles.dTNonLinear} src={DTNonLinear} alt="Design Thinking Chart" />
    </div>
  )
}

export default Projects;