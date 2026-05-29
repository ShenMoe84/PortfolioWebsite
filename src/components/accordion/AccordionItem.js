import React, { useRef } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import styles from "../accordion/AccordionItem.module.css"


const AccordionItem = ({ title, content, isOpen, onClick }) => {
  const contentHeight = useRef()

  return(
    <div className={styles.wrapper} >
    <button className={`${styles.titleCont} ${isOpen ? 'active' : ''}`} onClick={onClick} >
     <p className={styles.titleContent}>{title}</p>
     <RiArrowDropDownLine className={`${styles.arrow} ${isOpen ? 'active' : ''}`} /> 
    </button>

     <div ref={contentHeight} className={styles.contentCont} style={
          isOpen
          ? { height: contentHeight.current.scrollHeight }
          : { height: "0px" }
         }>
      <p className={styles.projContent}>{content}</p>
     </div>
   </div>
  )
}

export default AccordionItem;