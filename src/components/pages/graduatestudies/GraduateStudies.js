import React, { useState } from "react";
import styles from "../graduatestudies/GraduateStudies.module.css"
import { HashLink } from "react-router-hash-link";
import PopUp from "../../popup/PopUp";



const GradStudies = ({ data }) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [currentPopUp, setCurrentPopUp] = useState(0);


  const findRightPopUp = (id) => {
    const matchingPopUp = Array.from(data).find(popUp => data.id === id);
    setShowPopUp(true);
    return matchingPopUp;
  }


  return (
    <div className={styles.pageCont}>
      <div className={styles.lbBackground} alt="Shayla Kirby Unsplash">
        <div className={styles.header1}>
          <a href="https://www.wichita.edu/academics/college-of-innovation-and-design/master-innovation-design/index.php" className={styles.link}>
            Masters of Innovation Design</a>
          <br />
          <a href="https://www.wichita.edu/" className={styles.link}>
            Wichita State University</a>
        </div>
        <div>
          <p className={styles.introPara}>This program focuses on preparing students to lead and adapt in fast-changing, technology-driven environments.
            While an MBA typically emphasizes optimizing existing systems like finance, operations, and managmenet, MID is built around solving ambiguous problems, creating new opportunities,
            and working across disciplines. </p>
          <p className={styles.introPara}>I was trained in human-centered design, agile methods, and Design Thinking. This means I don't just analyze problems; I rapidly experiment, test,
            prototype, and implement solutions. Today's organizations need people who can navigate uncertainty, leverage emerging technologies, drive innovation, and go beyond
            managing what already exists.</p>
        </div>
        <div className={styles.catCont}>
          <h2 className={styles.header2}>Click or hover below for more info!</h2>
          <div className={styles.categories}>
            <div className={styles.categorybox}>
              <p className={styles.catheading}>Prototyping</p>
              <ul className={styles.unlist}>
                <HashLink to="./projects?section=1"><li>Products</li></HashLink>
                <li><button data-index={0} onMouseEnter={() => findRightPopUp(setCurrentPopUp(0))}>Services</button></li>
                <li><button data-index={1} onMouseEnter={() => findRightPopUp(setCurrentPopUp(1))}>Processes</button></li>
              </ul>
            </div>
            <div className={styles.categorybox}>
              <p className={styles.catheading}>Design Thinking</p>
              <ul className={styles.unlist}>
                <HashLink to="./projects?section=2"><li>Process</li></HashLink>
                <li><button data-index={2} onMouseEnter={() => findRightPopUp(setCurrentPopUp(2))}>Facilitation</button></li>
                <HashLink to="./projects?section=2"><li>Implementation</li></HashLink>
              </ul>
            </div>
          </div>
          <div className={styles.categories}>
            <div className={styles.categorybox}>
              <p className={styles.catheading}>Branding</p>
              <ul className={styles.unlist}>
                <li><button data-index={3} onMouseEnter={() => findRightPopUp(setCurrentPopUp(3))}>Building</button></li>
                <HashLink to="./projects?section=3"><li>Strategy</li></HashLink>
              </ul>
            </div>
            <div className={styles.categorybox}>
              <p className={styles.catheading}>Product Development</p>
              <ul className={styles.unlist}>
                <li><button data-index={4} onMouseEnter={() => findRightPopUp(setCurrentPopUp(4))}>Process</button></li>
                <li><button data-index={5} onMouseEnter={() => findRightPopUp(setCurrentPopUp(5))}>Optimization</button></li>
              </ul>
            </div>
          </div>

          {showPopUp && Object.values(data).map((popUp, idx) => {
            return (
              <PopUp
                key={idx}
                showPopUp={showPopUp}
                currentPopUp={currentPopUp}
                idx={idx}
                closePopUp={() => setShowPopUp(false)}
              >
                <h2 className={styles.popUpText}>{popUp.text}</h2>
              </PopUp>
            )
          }
          )}

        </div>
      </div>
    </div>
  );
};

export default GradStudies;