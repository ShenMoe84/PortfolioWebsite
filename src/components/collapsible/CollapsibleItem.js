import React from "react";
import Collapsible from "react-collapsible";
import styles from "./CollapsibleItem.module.css"

const CollapsibleItem = ({
  children, dataIndex, onClick, title, isOpen, projRef
}) => {

  return (
    <Collapsible ref={projRef} trigger=
      {
        <div data-index={dataIndex} onClick={onClick} className={`${styles.customTrigger} ${"project-list"}`}>
          <h1 className={styles.sectionTitle}>{title}</h1>
          <span className={`${styles.arrow} ${isOpen[`${dataIndex}`] ? `${styles.open}` : `${styles.arrow}`}`}>&#8964;</span>
        </div>
      }>
      {children}
    </Collapsible>
  )
};

export default CollapsibleItem;