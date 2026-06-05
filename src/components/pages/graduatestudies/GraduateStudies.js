import React from "react";
import styles from "../graduatestudies/GraduateStudies.module.css"
import { HashLink } from "react-router-hash-link";


const GradStudies = () => {

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
          <p className={styles.introPara}>I was trained in human-centered design, agile methods, and Design Thinking. This means I don't just analyze probolems; I rapidly experiment, test,
            prototype, and implement solutions. Today's organizations need people who can navigate uncertainty, leverage emerging technologies, drive innovation, and go beyond
            managing what already exists.</p>
        </div>
        <div className={styles.catCont}>
        <h2 className={styles.header2}>Click or Hover Below for More Info</h2>
          <div className={styles.categories}>
            <div className={styles.categorybox}>
              <p className={styles.catheading}>Prototyping</p>
              <ul className={styles.unlist}>
                <HashLink smooth to="graduatestudies/projects/section1"><li>Products</li></HashLink>
                <li>Services</li>
                <li>Processes</li>
              </ul>
            </div>
            <div className={styles.categorybox}>
              <p className={styles.catheading}>Design Thinking</p>
              <ul className={styles.unlist}>
                <a href="graduatestudies/projects"><li>Process</li></a>
                <li>Facilitation</li>
                <a href="graduatestudies/projects"><li>Implementation</li></a>
              </ul>
            </div>
          </div>
          <div className={styles.categories}>
            <div className={styles.categorybox}>
              <p className={styles.catheading}>Branding</p>
              <ul className={styles.unlist}>
                <li>Building</li>
                <a href="graduatestudies/projects"><li>Strategy</li></a>
              </ul>
            </div>
            <div className={styles.categorybox}>
              <p className={styles.catheading}>Product Development</p>
              <ul className={styles.unlist}>
                <li>Process</li>
                <li>Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradStudies;