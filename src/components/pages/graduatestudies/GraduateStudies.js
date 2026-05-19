import React from "react";
import styles from "../graduatestudies/GraduateStudies.module.css"
import DTNonLinear from "../../../images/DesignThinking/td-design-thinking-non-linear-process.jpg";


const GradStudies = () => {

  return (
    <div className={styles.pageCont}>
      <div className={styles.lbBackground} alt="Shayla Kirby on Unsplash" />
      <div className={styles.bodyCont}>
        <div className={styles.header}>
          <a href="https://www.wichita.edu/academics/college-of-innovation-and-design/master-innovation-design/index.php" className={styles.link}>
            Master of Innovation Design</a>
          <br/>
          <a href="https://www.wichita.edu/" className={styles.link}>
            Wichita State University</a>
        </div>
        <div>
          <p className={styles.introPara}>This program focuses on preparing students to lead and adapt in fast-changing, technology-driven environments.
            While an MBA typically emphasizes optimizing existing systems like finance, operations, and managmenet, MID is built around solving ambiguous problems, creating new opportunities,
            and working across disciplines. I was trained in human-centered design, agile methods, and Design Thinking, which means I don't just analyze probolems; I rapidly experiment, test,
            prototype, and implement solutions. It's especially relevant today because organizations need people who can navigate uncertainty, leverage emerging technologies, and drive innovation,
            not just manage what already exists.</p>
        </div>
        <div className={styles.header}>
          <div className={styles.dTBackground} alt="Hugo Rocha on Unsplash" />
          <img className={styles.dTNonLinear} alt="" src={DTNonLinear} />
        </div>
      </div>
    </div>
  );
};

export default GradStudies;