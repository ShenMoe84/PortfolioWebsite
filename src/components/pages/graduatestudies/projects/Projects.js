import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "../projects/Projects.module.css";
import ImageCarousel from "../../../imageCarousel/ImageCarousel.js";
import PopUp from "../../../popup/PopUp.js";
import CollapsibleItem from "../../../collapsible/CollapsibleItem.js";
import FairyDoorImages from "../../../../data/FairyDoorImages.js";
import BookcaseImages from "../../../../data/BookcaseImages.js";
import WorkTableImages from "../../../../data/WorkTableImages.js";
import SmallProjectsImages from "../../../../data/SmallProjects.js";
import DTNonLinear from "../../../../images/DesignThinking/DTProcessOriginal.jpg";
import DTStickies from "../../../../images/Backgrounds/DTStickies.jpg";
import PawPrintBg from "../../../../images/DesignChallenges/PawPrintBg.jpg";
import DCh1Prototype from "../../../../images/DesignChallenges/DT1Prototype.jpeg";
import HospFPBg from "../../../../images/DesignChallenges/HospitalFPBg.png";
import DCh2Prototype from "../../../../images/DesignChallenges/DT2AppView.png"
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
      setIsOpen(true);
      return sectionToOpen;
    }

    simulateClick(findRightSection(clickedSection));

  }, [searchParams, sectionList]);

  return (
    <div>
      <CollapsibleItem
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
        <div className={styles.dChCont}>
          <div className={styles.dTPCont}>
            <img className={styles.dTStickies} src={DTStickies} alt="Post-its on Whiteboard" />
            <img className={styles.dTNonLinear} src={DTNonLinear} alt="Design Thinking Process Chart" />
          </div>
          <p className={styles.dTSection1}>Implementation - Design Challenges</p>
          <div className={styles.dTChallenges}>
            <div className={styles.dCh}>
              <img className={styles.pawPrintBg} src={PawPrintBg} alt="Paw Print Background" />
              <img
                className={styles.ch1Prototype}
                src={DCh1Prototype}
                alt="Scrubs Challenge Prototype"
              />
              <div className={styles.dCh1InfoCont}>
                <p className={styles.dCh1title}>How might we reimagine scrubs for modern wearers with comfort and functionality in mind?</p>
                <p className={styles.dCh1text}>I chose to focus exclusively on users in the pet care industry, specifically groomers. The prototype you see has a removeable set of pockets similar
                  to an apron with a waterproof space for electronics, and elements to provide temperature regulation, such as an integrated space for a hot/cold pack and grommets for breathability.
                  I also created a collapsible hat with a mesh facial screen to keep hair out of the face when drying a double-coated pet.
                </p>
              </div>
            </div>
            <div className={styles.dCh}>
              <img className={styles.hospFPBg} src={HospFPBg} alt="Hospital Floor Plan" />
              <img
                className={styles.ch2Prototype}
                src={DCh2Prototype}
                alt="Mock Up Hospital App View"
              />
              <div className={styles.dCh2InfoCont}>
                <p className={styles.dCh1title}>How might we improve the current fuctionality of hospital wristbands to assist both the care team and any associated family members?</p>
                <p className={styles.dCh1text}>Helix is an app concept that utilizes existing barcode technology to provide real time updates on basic and complex information for those visiting
                  patients in the hospital, with HIPPAA compliance in mind. The care team also gets instant updates on the movements and status of the patient so they always know where to locate them
                  within the hospital. Included in the app is a floor plan and 'you are here' function that allows visitors to navigate the building on their own.
                </p>
              </div>
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
          <p className={styles.presentationCont}>Please See Design Thinking Implementation for Hospital Wristbands</p>
        </div>
      </CollapsibleItem>
      <div className={styles.lbBackground} alt="Shayla Kirby Unsplash" />
    </div>
  )
}

export default Projects;