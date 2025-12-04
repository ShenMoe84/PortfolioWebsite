import React from "react";
import Lightbulbs from "../../../images/LightbulbString.jpg"
import styles from "../graduatework/GraduateWork.module.css"


const GradWork = () => {


  return (
    <div>
      <img className={styles.background} src={Lightbulbs} alt="Shayla Kirby on Unsplash"/>
    </div>
  );
};

export default GradWork;