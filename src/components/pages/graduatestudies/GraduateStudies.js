import React from "react";
import styles from "../graduatestudies/GraduateStudies.module.css"
import DTNonLinear from "../../../images/DesignThinking/td-design-thinking-non-linear-process.jpg";


const GradStudies = () => {

  return (
    <div className={styles.pageCont}>
      <div className={styles.lbBackground} alt="Shayla Kirby Unsplash">
        <div>
          <div className={styles.header}>
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
            <p className={styles.introPara}>I was trained in human-centered design, agile methods, and Design Thinking. This means I don't just analyze probolems; I rapidly experiment, test,
              prototype, and implement solutions. Today's organizations need people who can navigate uncertainty, leverage emerging technologies, drive innovation, and go beyond
              managing what already exists.</p>
          </div>
          <div className={styles.categories}>
            <div className={styles.categorybox}>
            <p>Prototyping</p>
              <ul>
                <li>Products</li>
                <li>Services</li>
                <li>Processes</li>
              </ul>
            </div>
            <div className={styles.categorybox}>
            <p>Design Thinking</p>
              <ul>
                <li>Process</li>
                <li>Facilitation</li>
                <li>Implementation</li>
              </ul>
            </div>
          </div>
          <div className={styles.categories}>
            <div className={styles.categorybox}>
            <p>Branding</p>
              <ul>
                <li>Building</li>
                <li>Strategy</li>
              </ul>
            </div>
            <div className={styles.categorybox}>
            <p>Product Development</p>
              <ul>
                <li>Process</li>
                <li>Optimization</li>
              </ul>
            </div>
          </div>
          <div className={styles.header}>
            <div className={styles.dTBackground} alt="Hugo Rocha Unsplash">
              <img className={styles.dTNonLinear} alt="Design Thinking diagram" src={DTNonLinear} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradStudies;