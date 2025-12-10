import React from "react";
import styles from "../graduatework/GraduateWork.module.css"
import Button from "../../button/Button";
import ImageSlider from "../../imagesilder/ImageSlider";
import MainImage from "../../../images/Fairy Door/MainImage.jpeg";
import Inspo from "../../../images/Fairy Door/Inspo.jpeg";
import Drawing from "../../../images/Fairy Door/1Drawing.jpeg";
import Router from "../../../images/Fairy Door/2Router.jpeg";
import Jointer from "../../../images/Fairy Door/Jointer.jpeg";
import Bandsaw from "../../../images/Fairy Door/3Bandsaw.jpeg";
import Planer from "../../../images/Fairy Door/4Planer.jpeg";
import Pieces from "../../../images/Fairy Door/5Pieces.jpeg";
import Gluing from "../../../images/Fairy Door/6Gluing.jpeg";
import PostGluing from "../../../images/Fairy Door/7PostGluing.jpeg";
import DecorOptions from "../../../images/Fairy Door/8DecorOptions.jpeg";
import FinalLayout from "../../../images/Fairy Door/9FinalLayout.jpeg";
import Hinges from "../../../images/Fairy Door/9Hinges.jpeg";
import ClockFace from "../../../images/Fairy Door/10ClockFace.jpeg";
import ClockFinishing from "../../../images/Fairy Door/11ClockFinishing.jpeg";




const GradWork = () => {
  const fDImgs = [MainImage, Inspo, Drawing, Router, Jointer, Bandsaw, Planer, Pieces, Gluing, PostGluing, DecorOptions, FinalLayout,
    Hinges, ClockFace, ClockFinishing]
  const bCImgs = []
  const wTImgs = []
  const smProj = []


  return (
    <div className={styles.pageCont}>
      <img className={styles.background} alt="Shayla Kirby on Unsplash" />
      <div className={styles.bodyCont}>
        <div className={styles.header}>
          <h1>Masters of Innovation Design</h1>
          <h2>Wichita State University 2018-2020</h2>
          <div className={styles.buttonCont}>
            <Button className={styles.button}><a
              className={styles.links}
              href="https://www.wichita.edu/academics/college-of-innovation-and-design/master-innovation-design/index.php">
              Learn More About MID</a></Button>
          </div>
          <div>
            <p className={styles.introPara}>In the late 2010s, I was once again trying to decide what I want to be when I grow up.
              After completing my undergraduate degree in Theatre Performance, I was perusing my alma mater’s website and came across a new graduate degree called (you guessed it) Innovation Design.
              I was intrigued to say the least. As an intuitive problem solver, I wanted to find a way to make a living doing it. And what's better than an innovative solution?
              Please see the projects I completed below as part of this degree to help get a better understanding of this
              unique degree.</p>
          </div>
        </div>
        <div className={styles.prototyping}>
          <h1>Prototyping</h1>
          <div className={styles.fairyDoorCont}>
            <h2>Fairy Door Clock</h2>
            <div className={styles.fDImgs}>
              <ImageSlider images={fDImgs} />
            </div>
          </div>
          <div className={styles.bookcase}>
            <h2>Rotating Bookcase</h2>
          </div>
          <div className={styles.workTable}>
            <h2>Convertible Work Table</h2>
          </div>
          <div className={styles.smallerProj}>
            <h2>Smaller Projects</h2>
          </div>
        </div>
        <div className={styles.designT}>
          <h2>Design Thinking</h2>
        </div>
      </div>
    </div>
  );
};

export default GradWork;